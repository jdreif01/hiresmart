import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from '@aws-amplify/auth';
import { Flex, Button, View } from '@aws-amplify/ui-react';

const NavBar: React.FC = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/organization-list'); // Redirect to organization-list after sign-out
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <View backgroundColor="#f5f5f5" padding="10px">
      <Flex direction="row" alignItems="center" justifyContent="space-between">
        <Flex direction="row" gap="20px">
          <Button variation="link" onClick={() => navigate('/organization-list')}>
            Organizations
          </Button>
          <Button variation="link" onClick={() => navigate('/roles')}>
            Roles
          </Button>
          <Button variation="link" onClick={() => navigate('/positions')}>
            Positions
          </Button>
        </Flex>
        <Button variation="primary" onClick={handleSignOut}>
          Sign Out
        </Button>
      </Flex>
    </View>
  );
};

export default NavBar;