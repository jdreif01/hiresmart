// hiresmart/src/pages/OrganizationList.tsx
import React, { useEffect, useState } from 'react';
import { generateClient } from '@aws-amplify/api'; // Correct import for Amplify v6+
import { listOrganizations } from '../graphql/queries'; // Use the standard list query
import { ListOrganizationsQuery } from '../graphql/API';
import { Flex, Heading, Table, TableCell, TableHead, TableBody, TableRow, Text, Button } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';

const client = generateClient();

interface Organization {
  id: string;
  name: string;
  ssoConfig: string;
  tenantId: string;
}

const OrganizationList: React.FC = () => {
  const navigate = useNavigate();
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    const fetchOrganizations = async () => {
      try {
        setLoading(true);
        const response = await client.graphql<ListOrganizationsQuery>({
          query: listOrganizations,
          authMode: 'userPool'
        }) as { data: ListOrganizationsQuery };

        const items = response.data?.listOrganizations?.items || [];
        console.log('Fetched items:', items);
        if (items.length === 0) {
          setErrorMessage('No organizations found.');
        } else {
          const orgs = items
            .filter((item): item is NonNullable<typeof item> => item !== null)
            .map((item: any) => ({
              id: item.id,
              name: item.name,
              ssoConfig: item.ssoConfig || '',
              tenantId: item.tenantId || '',
            }));
          setOrganizations(orgs);
          setErrorMessage('');
        }
      } catch (error) {
        console.error('Error fetching organizations:', error);
        setErrorMessage('Failed to fetch organizations. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchOrganizations();
  }, []);

  return (
    <Flex direction="column" padding="20px">
      <Heading level={1}>Organizations</Heading>
      {errorMessage && <Text color="red">{errorMessage}</Text>}
      {loading ? (
        <Text>Loading organizations...</Text>
      ) : (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>SSO Provider</TableCell>
              <TableCell>Tenant ID</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {organizations.map(org => (
              <TableRow key={org.id}>
                <TableCell>{org.name}</TableCell>
                <TableCell>{org.ssoConfig ? JSON.parse(org.ssoConfig).provider : 'N/A'}</TableCell>
                <TableCell>{org.tenantId}</TableCell>
                <TableCell>
                  <Button
                    variation="primary"
                    size="small"
                    onClick={() => navigate(`/organization-settings/${org.id}`)}
                  >
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </Flex>
  );
};

export default OrganizationList;