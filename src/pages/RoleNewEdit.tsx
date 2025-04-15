import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCurrentUser, fetchAuthSession } from '@aws-amplify/auth';
import { generateClient } from '@aws-amplify/api';
import { Flex, Heading, TextField, Button, SelectField, Text, View, Icon } from '@aws-amplify/ui-react';
import { getRole, listRoles } from '../graphql/queries';
import { createRole, updateRole } from '../graphql/mutations';
import { MdArrowBack } from 'react-icons/md';

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
        baseRoleId: '',
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
    <View padding="space.xl" backgroundColor="background.primary" paddingTop="space.xxxl">
      <Flex direction="column" gap="space.medium" maxWidth="600px" margin="0 auto">
        <Flex alignItems="center" gap="space.small">
          <Button variation="link" onClick={() => navigate('/roles')} padding="0">
            <Icon as={MdArrowBack} fontSize="1.5rem" color="brand.primary" />
          </Button>
          <Heading level={1}>{id ? 'Edit Role' : 'New Role'}</Heading>
        </Flex>
        {errorMessage && <Text color="red">{errorMessage}</Text>}
        <Flex direction="column" gap="space.medium" padding="space.medium" backgroundColor="background.secondary">
          <TextField
            label="Role Name"
            value={role.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
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
          <Button variation="primary" alignSelf="flex-end" onClick={handleSave}>
            Save Role
          </Button>
        </Flex>
      </Flex>
    </View>
  );
};

export default RoleNewEdit;