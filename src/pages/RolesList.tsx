import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser, fetchAuthSession } from '@aws-amplify/auth';
import { generateClient } from '@aws-amplify/api';
import { Flex, Heading, Card, Text, Button, View } from '@aws-amplify/ui-react';
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
    <View padding="space.xl" backgroundColor="background.primary" paddingTop="space.xxxl">
      <Flex direction="column" gap="space.medium" maxWidth="1000px" margin="0 auto">
        <Flex justifyContent="space-between" alignItems="center">
          <Heading level={1}>Roles</Heading>
          <Button variation="primary" onClick={() => navigate('/role/new')}>
            Create New Role
          </Button>
        </Flex>
        {errorMessage && <Text color="red">{errorMessage}</Text>}
        {roles.length === 0 && !errorMessage ? (
          <Text fontSize="large" textAlign="center">
            No roles found. Create a new role to get started.
          </Text>
        ) : (
          <Flex direction="column" gap="space.medium">
            {roles.map((role) => (
              <Card key={role.id} variation="elevated">
                <Flex direction="row" alignItems="center" justifyContent="space-between">
                  <Flex direction="column" gap="space.xs">
                    <Text fontSize="large" fontWeight="500">
                      {role.name}
                    </Text>
                    <Text fontSize="medium" color="font.secondary">
                      Status: {role.status}
                    </Text>
                    <Text fontSize="medium" color="font.secondary">
                      Approver: {role.approver}
                    </Text>
                  </Flex>
                  <Button variation="primary" onClick={() => navigate(`/role/${role.id}`)}>
                    Edit
                  </Button>
                </Flex>
              </Card>
            ))}
          </Flex>
        )}
      </Flex>
    </View>
  );
};

export default RolesList;