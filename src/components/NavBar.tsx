import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from '@aws-amplify/auth';
import { Flex, Button, View } from '@aws-amplify/ui-react';
import Logo from '../assets/logo.svg?react';

const NavBar: React.FC = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/organization-list');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <View
      backgroundColor="#ffffff"
      padding="10px 20px"
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
      position="sticky"
      top="0"
      style={{ zIndex: 1000 }}
    >
      <Flex direction="row" alignItems="center" justifyContent="space-between">
        <Flex direction="row" alignItems="center" gap="20px">
          <Logo
            width="150px"
            height="auto"
            onClick={() => navigate('/organization-list')}
            style={{ cursor: 'pointer' }}
          />
          <Button
            variation="link"
            color="#000000"
            fontFamily="'Roboto', sans-serif"
            fontWeight="500"
            onClick={() => navigate('/organization-list')}
          >
            Organizations
          </Button>
          <Button
            variation="link"
            color="#000000"
            fontFamily="'Roboto', sans-serif"
            fontWeight="500"
            onClick={() => navigate('/roles')}
          >
            Roles
          </Button>
          <Button
            variation="link"
            color="#000000"
            fontFamily="'Roboto', sans-serif"
            fontWeight="500"
            onClick={() => navigate('/positions')}
          >
            Positions
          </Button>
        </Flex>
        <Button
          variation="primary"
          backgroundColor="#007bff"
          color="#ffffff"
          fontFamily="'Roboto', sans-serif"
          fontWeight="500"
          onClick={handleSignOut}
        >
          Sign Out
        </Button>
      </Flex>
    </View>
  );
};

export default NavBar;