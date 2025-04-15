// hiresmart/src/components/NavBar.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut, getCurrentUser, fetchAuthSession } from '@aws-amplify/auth';
import { View, Flex, Button, Icon, Text } from '@aws-amplify/ui-react';
import { MdHome, MdWork, MdPeople, MdLogout, MdSettings, MdEvent, MdPerson } from 'react-icons/md';
import Logo from '../assets/logo-only.svg?react';

const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const [isAppAdmin, setIsAppAdmin] = useState<boolean>(false);
  const [isOrgAdmin, setIsOrgAdmin] = useState<boolean>(false);
  const [isHiringManager, setIsHiringManager] = useState<boolean>(false);
  const [isRecruiter, setIsRecruiter] = useState<boolean>(false);
  const [isInterviewer, setIsInterviewer] = useState<boolean>(false);
  const [isFacilitator, setIsFacilitator] = useState<boolean>(false);
  const [isCandidate, setIsCandidate] = useState<boolean>(false);

  useEffect(() => {
    const checkUserGroups = async () => {
      try {
        await getCurrentUser();
        const session = await fetchAuthSession();
        const groups = session.tokens?.idToken?.payload['cognito:groups'] as string[] | undefined;
        setIsAppAdmin(groups?.includes('AppAdmins') || false);
        setIsOrgAdmin(groups?.includes('OrgAdmins') || false);
        setIsHiringManager(groups?.includes('HiringManagers') || false);
        setIsRecruiter(groups?.includes('Recruiters') || false);
        setIsInterviewer(groups?.includes('Interviewers') || false);
        setIsFacilitator(groups?.includes('Facilitators') || false);
        setIsCandidate(groups?.includes('Candidates') || false);
      } catch (error) {
        console.error('Error checking user groups:', error);
        setIsAppAdmin(false);
        setIsOrgAdmin(false);
        setIsHiringManager(false);
        setIsRecruiter(false);
        setIsInterviewer(false);
        setIsFacilitator(false);
        setIsCandidate(false);
      }
    };

    checkUserGroups();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <View
      backgroundColor="background.secondary"
      padding="space.small space.medium"
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
      position="fixed"
      top="0"
      width="100%"
      height="80px"
      style={{ zIndex: 1000 }}
    >
      <Flex
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        height="100%"
        maxWidth="1200px"
        margin="0 auto"
        padding={{ base: '0 space.medium', medium: '0' }}
      >
        {/* Logo and Wicked Smart Hire text container */}
        <Flex
          direction="row"
          alignItems="center"
          gap="space.xs"
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer' }}
        >
          <Logo
            width="160px"
            height="60px"
            style={{ transition: 'transform 0.2s' }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          />
          <Text
            fontSize="large"
            fontWeight="bold"
            color="font.primary"
            fontFamily="'Roboto', sans-serif"
          >
            Wicked Smart Hire
          </Text>
        </Flex>

        {/* Navigation buttons */}
        <Flex direction="row" alignItems="center" gap="space.small">
          <Button
            variation="primary"
            onClick={() => navigate('/')}
            gap="space.xs"
            fontSize="small"
            padding="space.xs space.small"
          >
            <Icon as={MdHome} fontSize="1rem" />
            Home
          </Button>
          {isAppAdmin && (
            <Button
              variation="primary"
              onClick={() => navigate('/organization-list')}
              gap="space.xs"
              fontSize="small"
              padding="space.xs space.small"
            >
              <Icon as={MdWork} fontSize="1rem" />
              Organization List
            </Button>
          )}
          {(isOrgAdmin || isHiringManager || isRecruiter) && (
            <Button
              variation="primary"
              onClick={() => navigate('/positions')}
              gap="space.xs"
              fontSize="small"
              padding="space.xs space.small"
            >
              <Icon as={MdPeople} fontSize="1rem" />
              Positions
            </Button>
          )}
          {isAppAdmin && (
            <Button
              variation="primary"
              onClick={() => navigate('/global-role-catalog')}
              gap="space.xs"
              fontSize="small"
              padding="space.xs space.small"
            >
              <Icon as={MdSettings} fontSize="1rem" />
              Global Roles
            </Button>
          )}
          {isOrgAdmin && (
            <Button
              variation="primary"
              onClick={() => navigate('/organization-settings')}
              gap="space.xs"
              fontSize="small"
              padding="space.xs space.small"
            >
              <Icon as={MdSettings} fontSize="1rem" />
              Org Settings
            </Button>
          )}
          {(isHiringManager || isRecruiter || isInterviewer || isFacilitator) && (
            <Button
              variation="primary"
              onClick={() => navigate('/interviews')}
              gap="space.xs"
              fontSize="small"
              padding="space.xs space.small"
            >
              <Icon as={MdEvent} fontSize="1rem" />
              Interviews
            </Button>
          )}
          {isCandidate && (
            <Button
              variation="primary"
              onClick={() => navigate('/candidate-portal')}
              gap="space.xs"
              fontSize="small"
              padding="space.xs space.small"
            >
              <Icon as={MdPerson} fontSize="1rem" />
              Candidate Portal
            </Button>
          )}
          <Button
            variation="primary"
            onClick={handleSignOut}
            gap="space.xs"
            fontSize="small"
            padding="space.xs space.small"
          >
            <Icon as={MdLogout} fontSize="1rem" />
            Sign Out
          </Button>
        </Flex>
      </Flex>
    </View>
  );
};

export default NavBar;