import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Flex, Heading, Text, View } from '@aws-amplify/ui-react';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <View
      backgroundColor="linear-gradient(135deg, {colors.background.primary.value} 0%, #e0e7ff 100%)"
      minHeight="100vh"
      padding="space.xl"
      paddingTop="space.xxxl"
    >
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        gap="space.large"
        maxWidth="800px"
        margin="0 auto"
      >
        <Heading level={1} textAlign="center">
          Welcome to Wicked Smart Hire (WiSH)
        </Heading>
        <Text fontSize="xl" color="brand.primary" textAlign="center" fontWeight="500">
          Streamline Your Hiring with AI
        </Text>
        <Text fontSize="large" textAlign="center" maxWidth="600px">
          Use the navigation bar above to manage your organizations, roles, and positions with our AI-powered platform.
        </Text>
      </Flex>
    </View>
  );
};

export default HomePage;