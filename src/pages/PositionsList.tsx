import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser, fetchAuthSession } from '@aws-amplify/auth';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { generateClient } from '@aws-amplify/api';
import { Flex, Heading, Table, TableCell, TableHead, TableBody, TableRow, Text, Button } from '@aws-amplify/ui-react';
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
    <Flex direction="column" padding="20px">
      <Heading level={1}>Positions</Heading>
      <Button variation="primary" onClick={() => navigate('/position/new')}>
        Create New Position
      </Button>
      {errorMessage && <Text color="red">{errorMessage}</Text>}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Role ID</TableCell>
            <TableCell>Position Status</TableCell>
            <TableCell>Hiring Manager</TableCell>
            <TableCell>Approver</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {positions.map((position) => (
            <TableRow key={position.id}>
              <TableCell>{position.name}</TableCell>
              <TableCell>{position.roleId}</TableCell>
              <TableCell>{position.positionStatus}</TableCell>
              <TableCell>{position.hiringManager}</TableCell>
              <TableCell>{position.approver}</TableCell>
              <TableCell>
                <Button onClick={() => navigate(`/position/${position.id}`)}>
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

export default withAuthenticator(PositionsList, {
  socialProviders: ['google'],
  loginMechanisms: [],
  signUpAttributes: [],
  hideSignUp: true
});