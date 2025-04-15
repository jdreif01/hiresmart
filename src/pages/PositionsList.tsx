// hiresmart/src/pages/PositionsList.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser, fetchAuthSession } from '@aws-amplify/auth';
import { generateClient } from '@aws-amplify/api';
import { Flex, Heading, Card, Text, Button, View, Pagination } from '@aws-amplify/ui-react';
import { listPositions } from '../graphql/queries';

const client = generateClient();

const PositionsList: React.FC = () => {
  const navigate = useNavigate();
  const [positions, setPositions] = useState<any[]>([]);
  const [tenantId, setTenantId] = useState<string>('');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const positionsPerPage = 6;

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
          // Sort positions alphabetically by name (case-insensitive)
          const sortedPositions = items.sort((a, b) =>
            a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })
          );
          setPositions(sortedPositions);
          setErrorMessage('');
        }
      } catch (error) {
        console.error('Error fetching positions:', error);
        setErrorMessage('Failed to fetch positions. Please try again.');
      }
    };

    fetchPositions();
  }, [tenantId, isAuthenticated]);

  // Pagination logic
  const totalPages = Math.ceil(positions.length / positionsPerPage);
  const startIndex = (currentPage - 1) * positionsPerPage;
  const endIndex = startIndex + positionsPerPage;
  const currentPositions = positions.slice(startIndex, endIndex);

  const handlePageChange = (newPageIndex?: number, prevPageIndex?: number) => {
    console.log('handlePageChange called with:', { newPageIndex, prevPageIndex });
    if (newPageIndex !== undefined) {
      setCurrentPage(newPageIndex);
    }
  };

  const handleNextPage = () => {
    console.log('handleNextPage called, currentPage:', currentPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    console.log('handlePreviousPage called, currentPage:', currentPage);
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

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
          <>
            <Flex direction="row" wrap="wrap" gap="space.medium" justifyContent="center">
              {currentPositions.map((position) => (
                <Card key={position.id} variation="elevated" padding="space.medium" width={{ base: '100%', medium: '300px' }}>
                  <Flex direction="column" gap="space.xs">
                    <Flex direction="row" justifyContent="space-between" alignItems="center">
                      <Text fontSize="large" fontWeight="500">
                        {position.name}
                      </Text>
                      <Button
                        variation="primary"
                        size="small"
                        onClick={() => navigate(`/position/${position.id}`)}
                      >
                        Edit
                      </Button>
                    </Flex>
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
                </Card>
              ))}
            </Flex>
            {totalPages > 1 && (
              <Flex justifyContent="center" marginTop="space.medium">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onChange={handlePageChange}
                  onNext={handleNextPage}
                  onPrevious={handlePreviousPage}
                />
              </Flex>
            )}
          </>
        )}
      </Flex>
    </View>
  );
};

export default PositionsList;