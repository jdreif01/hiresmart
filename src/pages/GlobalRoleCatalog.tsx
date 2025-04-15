// src/pages/GlobalRoleCatalog.tsx
import React, { useState, useEffect, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser, fetchAuthSession } from '@aws-amplify/auth';
import { generateClient } from '@aws-amplify/api';
import { Flex, Heading, Card, Text, Button, TextField, SelectField, Alert, View, Icon } from '@aws-amplify/ui-react';
import { MdAdd, MdEdit } from 'react-icons/md';
import type { Schema } from '../../amplify/data/resource'; // Adjust path based on your project structure

const client = generateClient<Schema>();

interface Competency {
  id: string;
  name: string;
  description: string | null;
  priority: 'Low' | 'Medium' | 'High' | null;
  createdAt?: string;
  updatedAt?: string;
}

interface Question {
  id: string;
  text: string;
  competencyId: string;
}

const GlobalRoleCatalog: React.FC = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isAppAdmin, setIsAppAdmin] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [globalRoles, setGlobalRoles] = useState<any[]>([]);
  const [competencies, setCompetencies] = useState<Competency[]>([]);
  const [newRole, setNewRole] = useState({
    name: '',
    description: '',
    functionalCompetencyIds: [] as string[],
    questionIds: [] as string[],
    culturalValueIds: [] as string[], // Not used in this use case, but part of schema
  });
  const [selectedCompetencies, setSelectedCompetencies] = useState<Competency[]>([]);
  const [newCompetency, setNewCompetency] = useState({
    name: '',
    description: '' as string | null,
    priority: 'Medium' as 'Low' | 'Medium' | 'High',
  });
  const [aiQuestions, setAiQuestions] = useState<Question[]>([]);
  const [showAddCompetency, setShowAddCompetency] = useState(false);
  const [duplicateWarning, setDuplicateWarning] = useState<string | null>(null);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const user = await getCurrentUser();
        const session = await fetchAuthSession();
        const groups = session.tokens?.idToken?.payload['cognito:groups'] as string[] | undefined;
        const isAdmin = groups?.includes('AppAdmins') || false;
        setIsAppAdmin(isAdmin);
        setIsAuthenticated(true);

        if (!isAdmin) {
          setErrorMessage('You do not have permission to access this page.');
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
        setIsAuthenticated(false);
        setErrorMessage('Failed to authenticate. Please try again.');
      }
    };

    initializeAuth();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (!isAuthenticated || !isAppAdmin) return;

      try {
        // Fetch existing global roles
        const rolesResponse = await client.models.GlobalRole.list();
        const roles = rolesResponse.data || [];
        setGlobalRoles(roles);

        // Fetch existing competencies
        const competenciesResponse = await client.models.FunctionalCompetency.list();
        const comps = competenciesResponse.data || [];
        setCompetencies(comps);
      } catch (error) {
        console.error('Error fetching data:', error);
        setErrorMessage('Failed to fetch roles or competencies. Please try again.');
      }
    };

    fetchData();
  }, [isAuthenticated, isAppAdmin]);

  const handleSuggestCompetencies = () => {
    // Mock AI-recommended competencies (replace with actual AI integration)
    const aiSuggested = competencies.filter((comp: Competency) =>
      ['Planning', 'Risk Management', 'Stakeholder Communication'].includes(comp.name)
    );
    setSelectedCompetencies(aiSuggested);
  };

  const handleAddCompetency = async () => {
    try {
      const competencyInput = {
        name: newCompetency.name,
        description: newCompetency.description,
        priority: newCompetency.priority,
      };
      const response = await client.models.FunctionalCompetency.create(competencyInput);
      if (response.data) {
        setCompetencies([...competencies, response.data]);
        setSelectedCompetencies([...selectedCompetencies, response.data]);
        setNewCompetency({ name: '', description: '', priority: 'Medium' });
        setShowAddCompetency(false);
      }
    } catch (error) {
      console.error('Error creating competency:', error);
      setErrorMessage('Failed to create competency. Please try again.');
    }
  };

  const handleGenerateQuestions = () => {
    // Mock AI-generated questions (replace with actual AI integration)
    const generatedQuestions: Question[] = selectedCompetencies.map((comp) => ({
      id: `mock-${comp.id}`,
      text: `Describe a time when you used ${comp.name.toLowerCase()} to achieve a goal.`,
      competencyId: comp.id,
    }));
    setAiQuestions(generatedQuestions);
  };

  const handleQuestionChange = (index: number, text: string) => {
    const updatedQuestions = [...aiQuestions];
    updatedQuestions[index].text = text;
    setAiQuestions(updatedQuestions);
  };

  const handleSaveRole = async () => {
    // Check for duplicate role name
    if (globalRoles.some((role) => role.name.toLowerCase() === newRole.name.toLowerCase())) {
      setDuplicateWarning(`Role '${newRole.name}' already exists. Proceed or rename?`);
      return;
    }

    try {
      // Save AI-generated questions
      const questionIds: string[] = [];
      for (const question of aiQuestions) {
        const questionInput = {
          text: question.text,
          competencyId: question.competencyId,
          roleId: '', // Will be updated after role creation
        };
        const response = await client.models.Question.create(questionInput);
        if (response.data) {
          questionIds.push(response.data.id);
        }
      }

      // Save the global role
      const roleInput = {
        name: newRole.name,
        description: newRole.description,
        functionalCompetencyIds: selectedCompetencies.map((comp) => comp.id),
        questionIds,
        culturalValueIds: [],
      };
      const roleResponse = await client.models.GlobalRole.create(roleInput);
      const createdRole = roleResponse.data;

      if (createdRole) {
        // Update questions with the new role ID
        for (const questionId of questionIds) {
          await client.models.Question.update({
            id: questionId,
            roleId: createdRole.id,
          });
        }

        setGlobalRoles([...globalRoles, createdRole]);
        setNewRole({ name: '', description: '', functionalCompetencyIds: [], questionIds: [], culturalValueIds: [] });
        setSelectedCompetencies([]);
        setAiQuestions([]);
        setDuplicateWarning(null);
      }
    } catch (error) {
      console.error('Error saving role:', error);
      setErrorMessage('Failed to save role. Please try again.');
    }
  };

  const handleDuplicateProceed = async () => {
    setDuplicateWarning(null);
    await handleSaveRole(); // Proceed with saving
  };

  const handleDuplicateRename = () => {
    setDuplicateWarning(null);
    // Allow user to edit the name
  };

  const handleCompetencyChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedIds = Array.from(e.target.selectedOptions).map((option) => option.value);
    const selected = competencies.filter((comp: Competency) => selectedIds.includes(comp.id));
    setSelectedCompetencies(selected);
  };

  if (!isAuthenticated) {
    return <Text>Loading...</Text>;
  }

  if (!isAppAdmin) {
    return <Text>You do not have permission to access this page.</Text>;
  }

  return (
    <Flex direction="column" gap="space.medium" maxWidth="1000px" margin="0 auto" padding={{ base: 'space.medium', medium: 'space.large' }}>
      <Heading level={1}>System-Wide Role Catalog</Heading>
      {errorMessage && <Alert variation="error">{errorMessage}</Alert>}
      {duplicateWarning && (
        <Alert variation="warning">
          {duplicateWarning}
          <Flex gap="space.small" marginTop="space.small">
            <Button variation="primary" onClick={handleDuplicateProceed}>
              Proceed
            </Button>
            <Button variation="link" onClick={handleDuplicateRename}>
              Rename
            </Button>
          </Flex>
        </Alert>
      )}
      <Flex direction="column" gap="space.medium">
        <Heading level={3}>Existing Roles</Heading>
        {globalRoles.length === 0 ? (
          <Text>No roles found. Add a new role below.</Text>
        ) : (
          globalRoles.map((role) => (
            <Card key={role.id} variation="elevated">
              <Flex direction="row" alignItems="center" justifyContent="space-between">
                <Flex direction="column" gap="space.xs">
                  <Text fontSize="large" fontWeight="500">
                    {role.name}
                  </Text>
                  <Text fontSize="medium" color="font.secondary">
                    {role.description || 'No description provided'}
                  </Text>
                </Flex>
                <Button variation="primary" onClick={() => navigate(`/global-role/${role.id}`)}>
                  <Icon as={MdEdit} />
                  Edit
                </Button>
              </Flex>
            </Card>
          ))
        )}
      </Flex>
      <Flex direction="column" gap="space.medium" padding="space.medium" backgroundColor="background.secondary">
        <Heading level={3}>Add New Role</Heading>
        <TextField
          label="Role Name"
          value={newRole.name}
          onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
        />
        <TextField
          label="Role Description"
          value={newRole.description}
          onChange={(e) => setNewRole({ ...newRole, description: e.target.value })}
        />
        <Flex direction="column" gap="space.small">
          <Text>Functional Competencies</Text>
          <Button variation="primary" onClick={handleSuggestCompetencies}>
            Suggest Competencies
          </Button>
          <SelectField
            label="Select Competencies"
            multiple
            value={selectedCompetencies.map((comp) => comp.id) as any} // Type assertion to bypass type error
            onChange={handleCompetencyChange} // Updated handler
          >
            {competencies.map((comp) => (
              <option key={comp.id} value={comp.id}>
                {comp.name} (Priority: {comp.priority || 'Not set'})
              </option>
            ))}
          </SelectField>
          <Button variation="link" onClick={() => setShowAddCompetency(!showAddCompetency)}>
            {showAddCompetency ? 'Cancel' : 'Add New Competency'}
          </Button>
          {showAddCompetency && (
            <Flex direction="column" gap="space.small">
              <TextField
                label="Competency Name"
                value={newCompetency.name}
                onChange={(e) => setNewCompetency({ ...newCompetency, name: e.target.value })}
              />
              <TextField
                label="Competency Description"
                value={newCompetency.description || ''}
                onChange={(e) => setNewCompetency({ ...newCompetency, description: e.target.value || null })}
              />
              <SelectField
                label="Priority"
                value={newCompetency.priority}
                onChange={(e) => setNewCompetency({ ...newCompetency, priority: e.target.value as 'Low' | 'Medium' | 'High' })}
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </SelectField>
              <Button variation="primary" onClick={handleAddCompetency}>
                Save Competency
              </Button>
            </Flex>
          )}
        </Flex>
        <Flex direction="column" gap="space.small">
          <Text>AI-Generated Questions</Text>
          <Button variation="primary" onClick={handleGenerateQuestions} disabled={selectedCompetencies.length === 0}>
            Generate AI Questions
          </Button>
          {aiQuestions.map((question, index) => (
            <TextField
              key={index}
              label={`Question for Competency ${selectedCompetencies.find((comp) => comp.id === question.competencyId)?.name}`}
              value={question.text}
              onChange={(e) => handleQuestionChange(index, e.target.value)}
            />
          ))}
        </Flex>
        <Button variation="primary" alignSelf="flex-end" onClick={handleSaveRole}>
          Save Role
        </Button>
      </Flex>
    </Flex>
  );
};

export default GlobalRoleCatalog;