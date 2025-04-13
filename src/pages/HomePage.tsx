import React from 'react';
import { useNavigate } from 'react-router-dom';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Flex, Heading, Text, Button, View } from '@aws-amplify/ui-react';
import Logo from '../assets/logo.svg?react';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <View
      backgroundColor="#f5f5f5" // Light gray background for contrast
      minHeight="100vh" // Full viewport height
      padding="40px"
    >
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        gap="30px"
        maxWidth="800px"
        margin="0 auto" // Center the content
      >
        <Logo
          width="200px"
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer' }}
        />
        <Heading
          level={1}
          fontFamily="'Roboto', sans-serif"
          fontWeight="500"
          color="#000000"
          textAlign="center"
        >
          Welcome to Wicked Smart Hire (WiSH)
        </Heading>
        <Text
          fontFamily="'Roboto', sans-serif'"
          fontSize="1.2rem"
          color="#333333"
          textAlign="center"
          maxWidth="600px"
        >
          Streamline your hiring process with our AI-powered platform. Navigate to the sections below to manage your organizations, roles, and positions.
        </Text>
        <Flex direction="row" gap="30px" justifyContent="center" wrap="wrap">
          <Button
            variation="primary"
            backgroundColor="#007bff"
            color="#ffffff"
            fontFamily="'Roboto', sans-serif"
            fontWeight="500"
            padding="10px 20px"
            onClick={() => navigate('/')}
          >
            Manage Organizations
          </Button>
          <Button
            variation="primary"
            backgroundColor="#007bff"
            color="#ffffff"
            fontFamily="'Roboto', sans-serif"
            fontWeight="500"
            padding="10px 20px"
            onClick={() => navigate('/roles')}
          >
            Manage Roles
          </Button>
          <Button
            variation="primary"
            backgroundColor="#007bff"
            color="#ffffff"
            fontFamily="'Roboto', sans-serif"
            fontWeight="500"
            padding="10px 20px"
            onClick={() => navigate('/positions')}
          >
            Manage Positions
          </Button>
        </Flex>
      </Flex>
    </View>
  );
};

export default withAuthenticator(HomePage, {
  socialProviders: ['google'],
  loginMechanisms: [],
  signUpAttributes: [],
  hideSignUp: true
});