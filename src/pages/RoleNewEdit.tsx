import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCurrentUser, fetchAuthSession } from '@aws-amplify/auth';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { generateClient } from '@aws-amplify/api';
import { Flex, Heading, TextField, Button, SelectField, Text } from '@aws-amplify/ui-react';
import { getRole, listRoles } from '../graphql/queries';
import { createRole, updateRole } from '../graphql/mutations';

const client = generateClient();

const RoleNewEdit: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [tenantId, setTenantId] = useState<string>('');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [role, setRole] = useState<any>({
    id: '',
    tenantId: '',
    name: '',
    baseRoleId: '',
    functionalCompetencyIds: [],
    culturalValueIds: [],
    questionIds: [],
    aiSuggestedQuestions: [],
    status: 'Draft',
    approver: '',
  });

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const user = await getCurrentUser();
        const session = await fetchAuthSession();
        const idTokenPayload = session.tokens?.idToken?.payload;
        const tenant = idTokenPayload?.['custom:tenantId'] as string;
        console.log('Fetched tenantId:', tenant);
        if (!tenant) {
          console.error('custom:tenantId not found in ID token payload');
        }
        setTenantId(tenant || '');
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Error fetching tenantId:', error);
        setIsAuthenticated(false);
      }
    };

    initializeAuth();
  }, []);

  useEffect(() => {
    const fetchRole = async () => {
      if (!id || !isAuthenticated || !tenantId) return;

      try {
        const response = await client.graphql({
          query: getRole,
          variables: { id },
          authMode: 'userPool',
        }) as any;
        const fetchedRole = response.data?.getRole;
        if (fetchedRole && fetchedRole.tenantId === tenantId) {
          setRole(fetchedRole);
        } else {
          setErrorMessage('Role not found or you do not have access.');
        }
      } catch (error) {
        console.error('Error fetching role:', error);
        setErrorMessage('Failed to fetch role. Please try again.');
      }
    };

    fetchRole();
  }, [id, isAuthenticated, tenantId]);

  const handleInputChange = (field: string, value: any) => {
    setRole((prev: any) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    try {
      const roleInput = {
        id: role.id,
        tenantId,
        name: role.name,
        baseRoleId: role.baseRoleId,
        functionalCompetencyIds: role.functionalCompetencyIds || [],
        culturalValueIds: role.culturalValueIds || [],
        questionIds: role.questionIds || [],
        aiSuggestedQuestions: role.aiSuggestedQuestions || [],
        status: role.status,
        approver: role.approver,
      };

      if (id) {
        await client.graphql({
          query: updateRole,
          variables: { input: roleInput },
          authMode: 'userPool',
        });
      } else {
        delete roleInput.id;
        await client.graphql({
          query: createRole,
          variables: { input: roleInput },
          authMode: 'userPool',
        });
      }
      navigate('/roles');
    } catch (error) {
      console.error('Error saving role:', error);
      setErrorMessage('Failed to save role. Please try again.');
    }
  };

  if (!isAuthenticated) {
    return <Text>Loading...</Text>;
  }

  return (
    <Flex direction="column" padding="20px">
      <Heading level={1}>{id ? 'Edit Role' : 'New Role'}</Heading>
      {errorMessage && <Text color="red">{errorMessage}</Text>}
      <TextField
        label="Role Name"
        value={role.name}
        onChange={(e) => handleInputChange('name', e.target.value)}
      />
      <TextField
        label="Base Role ID"
        value={role.baseRoleId}
        onChange={(e) => handleInputChange('baseRoleId', e.target.value)}
      />
      <SelectField
        label="Status"
        value={role.status}
        onChange={(e) => handleInputChange('status', e.target.value)}
      >
        <option value="Draft">Draft</option>
        <option value="Approved">Approved</option>
        <option value="Closed">Closed</option>
      </SelectField>
      <TextField
        label="Approver Email"
        value={role.approver}
        onChange={(e) => handleInputChange('approver', e.target.value)}
      />
      <Button variation="primary" onClick={handleSave}>
        Save Role
      </Button>
    </Flex>
  );
};

export default withAuthenticator(RoleNewEdit, {
  socialProviders: ['google'],
  loginMechanisms: [],
  signUpAttributes: [],
  hideSignUp: true
});