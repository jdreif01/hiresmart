import React, { useState, useEffect } from 'react';
import { getCurrentUser, fetchAuthSession } from '@aws-amplify/auth';
import { generateClient } from '@aws-amplify/api';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Flex, Heading, Table, TableCell, TableHead, TableBody, TableRow, Text } from '@aws-amplify/ui-react';
import { itemsByTenantId } from '../graphql/queries';

const client = generateClient();

interface Organization {
  id: string;
  Name: string;
  SSOProvider: string;
  TenantId: string;
}

const OrganizationList: React.FC = () => {
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [tenantId, setTenantId] = useState<string>('');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const user = await getCurrentUser();
        const session = await fetchAuthSession();
        console.log('Authenticated user:', user);
        console.log('Username (cognito:username):', user.username);
        console.log('User session:', session);
        console.log('Access token:', session.tokens?.accessToken?.toString());
        console.log('ID token:', session.tokens?.idToken?.toString());
        const idTokenPayload = session.tokens?.idToken?.payload;
        console.log('ID Token Payload:', idTokenPayload);
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
    const fetchOrganizations = async () => {
      if (!tenantId || !isAuthenticated) {
        console.log('tenantId or authentication not ready, skipping fetchOrganizations');
        return;
      }

      try {
        console.log('Fetching organizations for tenantId:', tenantId);
        const response = await client.graphql({
          query: itemsByTenantId,
          variables: {
            tenantId: tenantId,
            sk: { beginsWith: 'Organization#' }
          },
          authMode: 'userPool'
        }) as any;
        console.log('GraphQL response:', response);
        const items = response.data?.itemsByTenantId?.items || [];
        console.log('Fetched items:', items);
        if (items.length === 0) {
          setErrorMessage('No organizations found for this tenant.');
        } else {
          const orgs = items.map((item: any) => ({
            id: item.pk.split('#')[2],
            Name: item.data.Name,
            SSOProvider: item.data.SSOProvider,
            TenantId: item.data.TenantId // Ensure this matches the schema's casing
          }));
          setOrganizations(orgs);
          setErrorMessage('');
        }
      } catch (error) {
        console.error('Error fetching organizations:', error);
        setErrorMessage('Failed to fetch organizations. Please try again.');
      }
    };

    fetchOrganizations();
  }, [tenantId, isAuthenticated]);

  return (
    <Flex direction="column" padding="20px">
      <Heading level={1}>Organizations</Heading>
      {errorMessage && <Text color="red">{errorMessage}</Text>}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>SSO Provider</TableCell>
            <TableCell>Tenant ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {organizations.map(org => (
            <TableRow key={org.id}>
              <TableCell>{org.Name}</TableCell>
              <TableCell>{org.SSOProvider}</TableCell>
              <TableCell>{org.TenantId}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Flex>
  );
};

export default withAuthenticator(OrganizationList, {
  socialProviders: ['google'],
  loginMechanisms: [],
  signUpAttributes: [],
  hideSignUp: true
});