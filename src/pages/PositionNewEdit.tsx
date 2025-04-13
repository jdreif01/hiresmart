import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCurrentUser, fetchAuthSession } from '@aws-amplify/auth';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { generateClient } from '@aws-amplify/api';
import { Flex, Heading, TextField, Button, SelectField, Text } from '@aws-amplify/ui-react';
import { getPosition, listRoles, listPositions } from '../graphql/queries';
import { createPosition, updatePosition } from '../graphql/mutations';

const client = generateClient();

const PositionNewEdit: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [tenantId, setTenantId] = useState<string>('');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [position, setPosition] = useState<any>({
    id: '',
    tenantId: '',
    roleId: '',
    name: '',
    positionStatus: 'Open',
    hiringManager: '',
    approver: '',
    status: 'Active',
    notifications: JSON.stringify({ email: '', frequency: '' }),
  });
  const [roles, setRoles] = useState<any[]>([]);

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
    const fetchPosition = async () => {
      if (!id || !isAuthenticated || !tenantId) return;

      try {
        const response = await client.graphql({
          query: getPosition,
          variables: { id },
          authMode: 'userPool',
        }) as any;
        const fetchedPosition = response.data?.getPosition;
        if (fetchedPosition && fetchedPosition.tenantId === tenantId) {
          setPosition(fetchedPosition);
        } else {
          setErrorMessage('Position not found or you do not have access.');
        }
      } catch (error) {
        console.error('Error fetching position:', error);
        setErrorMessage('Failed to fetch position. Please try again.');
      }
    };

    const fetchRoles = async () => {
      if (!isAuthenticated || !tenantId) return;

      try {
        const response = await client.graphql({
          query: listRoles,
          variables: {
            filter: { tenantId: { eq: tenantId } }
          },
          authMode: 'userPool',
        }) as any;
        const fetchedRoles = response.data?.listRoles?.items || [];
        setRoles(fetchedRoles);
      } catch (error) {
        console.error('Error fetching roles:', error);
        setErrorMessage('Failed to fetch roles. Please try again.');
      }
    };

    fetchPosition();
    fetchRoles();
  }, [id, isAuthenticated, tenantId]);

  const handleInputChange = (field: string, value: any) => {
    if (field === 'notifications') {
      setPosition((prev: any) => ({
        ...prev,
        [field]: JSON.stringify(value),
      }));
    } else {
      setPosition((prev: any) => ({
        ...prev,
        [field]: value,
      }));
    }
  };

  const handleSave = async () => {
    try {
      const positionInput = {
        id: position.id,
        tenantId,
        roleId: position.roleId,
        name: position.name,
        positionStatus: position.positionStatus,
        customCompetencyIds: position.customCompetencyIds || [],
        customQuestionIds: position.customQuestionIds || [],
        aiSuggestedQuestions: position.aiSuggestedQuestions || [],
        hiringManager: position.hiringManager,
        approver: position.approver,
        status: position.status,
        notifications: position.notifications || JSON.stringify({ email: '', frequency: '' }),
      };

      if (id) {
        await client.graphql({
          query: updatePosition,
          variables: { input: positionInput },
          authMode: 'userPool',
        });
      } else {
        delete positionInput.id;
        await client.graphql({
          query: createPosition,
          variables: { input: positionInput },
          authMode: 'userPool',
        });
      }
      navigate('/positions');
    } catch (error) {
      console.error('Error saving position:', error);
      setErrorMessage('Failed to save position. Please try again.');
    }
  };

  if (!isAuthenticated) {
    return <Text>Loading...</Text>;
  }

  return (
    <Flex direction="column" padding="20px">
      <Heading level={1}>{id ? 'Edit Position' : 'New Position'}</Heading>
      {errorMessage && <Text color="red">{errorMessage}</Text>}
      <TextField
        label="Position Name"
        value={position.name}
        onChange={(e) => handleInputChange('name', e.target.value)}
      />
      <SelectField
        label="Role"
        value={position.roleId}
        onChange={(e) => handleInputChange('roleId', e.target.value)}
      >
        <option value="">Select a Role</option>
        {roles.map((role) => (
          <option key={role.id} value={role.id}>
            {role.name}
          </option>
        ))}
      </SelectField>
      <SelectField
        label="Position Status"
        value={position.positionStatus}
        onChange={(e) => handleInputChange('positionStatus', e.target.value)}
      >
        <option value="Open">Open</option>
        <option value="Closed">Closed</option>
        <option value="Filled">Filled</option>
      </SelectField>
      <TextField
        label="Hiring Manager Email"
        value={position.hiringManager}
        onChange={(e) => handleInputChange('hiringManager', e.target.value)}
      />
      <TextField
        label="Approver Email"
        value={position.approver}
        onChange={(e) => handleInputChange('approver', e.target.value)}
      />
      <SelectField
        label="Status"
        value={position.status}
        onChange={(e) => handleInputChange('status', e.target.value)}
      >
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </SelectField>
      <Button variation="primary" onClick={handleSave}>
        Save Position
      </Button>
    </Flex>
  );
};

export default withAuthenticator(PositionNewEdit, {
  socialProviders: ['google'],
  loginMechanisms: [],
  signUpAttributes: [],
  hideSignUp: true
});