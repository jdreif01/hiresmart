import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser, fetchAuthSession } from '@aws-amplify/auth';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { generateClient } from '@aws-amplify/api';
import { Flex, Heading, Table, TableCell, TableHead, TableBody, TableRow, Text, Button } from '@aws-amplify/ui-react';
import { listRoles } from '../graphql/queries';

const client = generateClient();

const RolesList: React.FC = () => {
  const navigate = useNavigate();
  const [roles, setRoles] = useState<any[]>([]);
  const [tenantId, setTenantId] = useState<string>('');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

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
    const fetchRoles = async () => {
      if (!isAuthenticated || !tenantId) {
        console.log('tenantId or authentication not ready, skipping fetchRoles');
        return;
      }

      try {
        console.log('Fetching roles for tenantId:', tenantId);
        const response = await client.graphql({
          query: listRoles,
          variables: {
            filter: { tenantId: { eq: tenantId } }
          },
          authMode: 'userPool',
        }) as any;
        console.log('GraphQL response:', response);
        const items = response.data?.listRoles?.items || [];
        console.log('Fetched items:', items);
        if (items.length === 0) {
          setErrorMessage('No roles found for this tenant.');
        } else {
          setRoles(items);
          setErrorMessage('');
        }
      } catch (error) {
        console.error('Error fetching roles:', error);
        setErrorMessage('Failed to fetch roles. Please try again.');
      }
    };

    fetchRoles();
  }, [tenantId, isAuthenticated]);

  if (!isAuthenticated) {
    return <Text>Loading...</Text>;
  }

  return (
    <Flex direction="column" padding="20px">
      <Heading level={1}>Roles</Heading>
      <Button variation="primary" onClick={() => navigate('/role/new')}>
        Create New Role
      </Button>
      {errorMessage && <Text color="red">{errorMessage}</Text>}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Approver</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {roles.map((role) => (
            <TableRow key={role.id}>
              <TableCell>{role.name}</TableCell>
              <TableCell>{role.status}</TableCell>
              <TableCell>{role.approver}</TableCell>
              <TableCell>
                <Button onClick={() => navigate(`/role/${role.id}`)}>
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Flex>
  );
};

export default withAuthenticator(RolesList, {
  socialProviders: ['google'],
  loginMechanisms: [],
  signUpAttributes: [],
  hideSignUp: true
});