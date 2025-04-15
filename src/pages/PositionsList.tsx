import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser, fetchAuthSession } from '@aws-amplify/auth';
import { generateClient } from '@aws-amplify/api';
import { Flex, Heading, Card, Text, Button, View } from '@aws-amplify/ui-react';
import { listPositions } from '../graphql/queries';

const client = generateClient();

const PositionsList: React.FC = () => {
  const navigate = useNavigate();
  const [positions, setPositions] = useState<any[]>([]);
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
    const fetchPositions = async () => {
      if (!isAuthenticated || !tenantId) {
        console.log('tenantId or authentication not ready, skipping fetchPositions');
        return;
      }

      try {
        console.log('Fetching positions for tenantId:', tenantId);
        const response = await client.graphql({
          query: listPositions,
          variables: {
            filter: { tenantId: { eq: tenantId } }
          },
          authMode: 'userPool',
        }) as any;
        console.log('GraphQL response:', response);
        const items = response.data?.listPositions?.items || [];
        console.log('Fetched items:', items);
        if (items.length === 0) {
          setErrorMessage('No positions found for this tenant.');
        } else {
          setPositions(items);
          setErrorMessage('');
        }
      } catch (error) {
        console.error('Error fetching positions:', error);
        setErrorMessage('Failed to fetch positions. Please try again.');
      }
    };

    fetchPositions();
  }, [tenantId, isAuthenticated]);

  if (!isAuthenticated) {
    return <Text>Loading...</Text>;
  }

  return (
    <View padding="space.xl" backgroundColor="background.primary" paddingTop="space.xxxl">
      <Flex direction="column" gap="space.medium" maxWidth="1000px" margin="0 auto">
        <Flex justifyContent="space-between" alignItems="center">
          <Heading level={1}>Positions</Heading>
          <Button variation="primary" onClick={() => navigate('/position/new')}>
            Create New Position
          </Button>
        </Flex>
        {errorMessage && <Text color="red">{errorMessage}</Text>}
        {positions.length === 0 && !errorMessage ? (
          <Text fontSize="large" textAlign="center">
            No positions found. Create a new position to get started.
          </Text>
        ) : (
          <Flex direction="column" gap="space.medium">
            {positions.map((position) => (
              <Card key={position.id} variation="elevated">
                <Flex direction="row" alignItems="center" justifyContent="space-between">
                  <Flex direction="column" gap="space.xs">
                    <Text fontSize="large" fontWeight="500">
                      {position.name}
                    </Text>
                    <Text fontSize="medium" color="font.secondary">
                      Position Status: {position.positionStatus}
                    </Text>
                    <Text fontSize="medium" color="font.secondary">
                      Hiring Manager: {position.hiringManager}
                    </Text>
                    <Text fontSize="medium" color="font.secondary">
                      Approver: {position.approver}
                    </Text>
                  </Flex>
                  <Button variation="primary" onClick={() => navigate(`/position/${position.id}`)}>
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

export default PositionsList;