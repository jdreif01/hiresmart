// src/components/Layout.tsx
import React, { ReactNode } from 'react';
import { View, Flex } from '@aws-amplify/ui-react';
import NavBar from './NavBar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <View backgroundColor="background.primary" minHeight="100vh">
      <NavBar />
      <View
        paddingTop="80px" // Matches new NavBar height
        padding={{ base: 'space.medium', medium: 'space.xl' }}
        maxWidth="100%"
        margin="0 auto"
        style={{ overflow: 'auto' }}
      >
        <Flex direction="column" gap="space.medium" minHeight="calc(100vh - 80px)">
          {children}
        </Flex>
      </View>
    </View>
  );
};

export default Layout;