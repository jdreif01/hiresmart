// hiresmart/src/App.tsx
import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Authenticator, ThemeProvider, Flex, Heading, Text } from '@aws-amplify/ui-react';
import { getCurrentUser, fetchAuthSession } from '@aws-amplify/auth';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import RolesList from './pages/RolesList';
import PositionsList from './pages/PositionsList';
import RoleNewEdit from './pages/RoleNewEdit';
import PositionNewEdit from './pages/PositionNewEdit';
import GlobalRoleCatalog from './pages/GlobalRoleCatalog';
import OrganizationList from './pages/OrganizationList.tsx';
import Logo from './assets/logo-only.svg?react';
import '@aws-amplify/ui-react/styles.css';

// Define a comprehensive theme following Amplify UI best practices
const theme = {
  name: 'wish-theme',
  cssText: '',
  containerProps: () => ({}),
  breakpoints: {
    values: {
      base: 0,
      small: 480,
      medium: 768,
      large: 992,
      xl: 1280,
    },
    defaultBreakpoint: 'base',
  },
  tokens: {
    colors: {
      brand: {
        primary: { value: '#007bff' },
        secondary: { value: '#0056b3' },
      },
      background: {
        primary: { value: '#f5f5f5' },
        secondary: { value: '#ffffff' },
      },
      font: {
        primary: { value: '#000000' },
        secondary: { value: '#333333' },
        interactive: { value: '#007bff' },
      },
      neutral: {
        10: { value: '#f5f5f5' },
        20: { value: '#e0e0e0' },
        40: { value: '#bdbdbd' },
      },
    },
    space: {
      xs: { value: '0.5rem' },
      small: { value: '1rem' },
      medium: { value: '1.5rem' },
      large: { value: '2rem' },
      xl: { value: '3rem' },
      xxl: { value: '4rem' },
      xxxl: { value: '5rem' },
    },
    fontSizes: {
      small: { value: '0.9rem' },
      medium: { value: '1rem' },
      large: { value: '1.2rem' },
      xl: { value: '1.5rem' },
      xxl: { value: '2rem' },
    },
    fonts: {
      default: { value: "'Roboto', sans-serif" },
    },
    borderWidths: {
      small: { value: '1px' },
      medium: { value: '2px' },
      large: { value: '4px' },
    },
    fontWeights: {
      light: { value: '300' },
      normal: { value: '400' },
      medium: { value: '500' },
      bold: { value: '700' },
    },
    lineHeights: {
      small: { value: '1.25' },
      medium: { value: '1.5' },
      large: { value: '1.75' },
    },
    radii: {
      xs: { value: '2px' },
      small: { value: '4px' },
      medium: { value: '8px' },
      large: { value: '16px' },
    },
    shadows: {
      small: { value: '0 1px 3px rgba(0, 0, 0, 0.1)' },
      medium: { value: '0 4px 8px rgba(0, 0, 0, 0.1)' },
      large: { value: '0 8px 16px rgba(0, 0, 0, 0.1)' },
    },
    components: {
      button: {
        primary: {
          backgroundColor: { value: '{colors.brand.primary.value}' },
          color: { value: '#ffffff' },
          padding: { value: '{space.small.value} {space.medium.value}' },
          fontSize: { value: '{fontSizes.medium.value}' },
          fontFamily: { value: '{fonts.default.value}' },
          fontWeight: { value: '{fontWeights.medium.value}' },
          borderRadius: { value: '{radii.small.value}' },
          boxShadow: { value: '{shadows.small.value}' },
          _hover: {
            backgroundColor: { value: '{colors.brand.secondary.value}' },
          },
        },
        link: {
          color: { value: '{colors.brand.primary.value}' },
          fontSize: { value: '{fontSizes.medium.value}' },
          fontFamily: { value: '{fonts.default.value}' },
          _hover: {
            color: { value: '{colors.brand.secondary.value}' },
          },
        },
      },
      card: {
        backgroundColor: { value: '{colors.background.secondary.value}' },
        borderRadius: { value: '{radii.medium.value}' },
        boxShadow: { value: '{shadows.medium.value}' },
        padding: { value: '{space.medium.value}' },
      },
      heading: {
        color: { value: '{colors.font.primary.value}' },
        fontFamily: { value: '{fonts.default.value}' },
        fontWeight: { value: '{fontWeights.medium.value}' },
        lineHeight: { value: '{lineHeights.medium.value}' },
        1: { fontSize: { value: '{fontSizes.xxl.value}' } },
        3: { fontSize: { value: '{fontSizes.large.value}' } },
      },
      text: {
        color: { value: '{colors.font.secondary.value}' },
        fontFamily: { value: '{fonts.default.value}' },
        fontSize: { value: '{fontSizes.medium.value}' },
        lineHeight: { value: '{lineHeights.medium.value}' },
      },
      textfield: {
        borderRadius: { value: '{radii.small.value}' },
        boxShadow: { value: '{shadows.small.value}' },
        fontFamily: { value: '{fonts.default.value}' },
        fontSize: { value: '{fontSizes.medium.value}' },
        lineHeight: { value: '{lineHeights.medium.value}' },
        borderWidth: { value: '{borderWidths.small.value}' },
      },
      selectfield: {
        borderRadius: { value: '{radii.small.value}' },
        boxShadow: { value: '{shadows.small.value}' },
        fontFamily: { value: '{fonts.default.value}' },
        fontSize: { value: '{fontSizes.medium.value}' },
        lineHeight: { value: '{lineHeights.medium.value}' },
        borderWidth: { value: '{borderWidths.small.value}' },
      },
    },
  },
};

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isAppAdmin, setIsAppAdmin] = useState<boolean>(false);
  const [isOrgAdmin, setIsOrgAdmin] = useState<boolean>(false);
  const [isHiringManager, setIsHiringManager] = useState<boolean>(false);
  const [isRecruiter, setIsRecruiter] = useState<boolean>(false);
  const [isInterviewer, setIsInterviewer] = useState<boolean>(false);
  const [isFacilitator, setIsFacilitator] = useState<boolean>(false);
  const [isCandidate, setIsCandidate] = useState<boolean>(false);
  const [tenantId, setTenantId] = useState<string | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await getCurrentUser();
        setIsAuthenticated(true);
        const session = await fetchAuthSession();
        const groups = session.tokens?.idToken?.payload['cognito:groups'] as string[] | undefined;
        setIsAppAdmin(groups?.includes('AppAdmins') || false);
        setIsOrgAdmin(groups?.includes('OrgAdmins') || false);
        setIsHiringManager(groups?.includes('HiringManagers') || false);
        setIsRecruiter(groups?.includes('Recruiters') || false);
        setIsInterviewer(groups?.includes('Interviewers') || false);
        setIsFacilitator(groups?.includes('Facilitators') || false);
        setIsCandidate(groups?.includes('Candidates') || false);
        const tenantIdValue = session.tokens?.idToken?.payload['custom:tenantId'];
        setTenantId(typeof tenantIdValue === 'string' ? tenantIdValue : null);
      } catch (error) {
        console.error('Error checking authentication:', error);
        setIsAuthenticated(false);
        setIsAppAdmin(false);
        setIsOrgAdmin(false);
        setIsHiringManager(false);
        setIsRecruiter(false);
        setIsInterviewer(false);
        setIsFacilitator(false);
        setIsCandidate(false);
        setTenantId(null);
      }
    };

    checkAuth();
  }, []);

  // Protected route component
  const ProtectedRoute: React.FC<{
    element: React.ReactElement;
    allowedGroups?: string[];
    redirectTo?: string;
    requireTenantId?: boolean;
  }> = ({ element, allowedGroups, redirectTo = '/', requireTenantId = false }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }
    if (requireTenantId && !tenantId) {
      return <Navigate to="/organization-list" replace />;
    }
    if (allowedGroups && !allowedGroups.some(group => {
      if (group === 'AppAdmins') return isAppAdmin;
      if (group === 'OrgAdmins') return isOrgAdmin;
      if (group === 'HiringManagers') return isHiringManager;
      if (group === 'Recruiters') return isRecruiter;
      if (group === 'Interviewers') return isInterviewer;
      if (group === 'Facilitators') return isFacilitator;
      if (group === 'Candidates') return isCandidate;
      return false;
    })) {
      return <Navigate to={redirectTo} replace />;
    }
    return element;
  };

  return (
    <ThemeProvider theme={theme}>
      <Authenticator
        socialProviders={['google']}
        loginMechanisms={['email']}
        signUpAttributes={[]}
        hideSignUp={true}
        components={{
          SignIn: {
            Header: () => (
              <Flex direction="column" alignItems="center" padding="space.xl">
                <Logo width="200px" />
                <Heading level={3} marginTop="space.medium">
                  Sign In to Wicked Smart Hire
                </Heading>
              </Flex>
            ),
            Footer: () => (
              <Flex justifyContent="center" padding="space.medium">
                <Text fontSize="small">
                  © 2025 Wicked Smart Hire. All rights reserved.
                </Text>
              </Flex>
            ),
          },
        }}
      >
        {() => (
          <Routes>
            <Route
              path="/*"
              element={
                <Layout>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route
                      path="/organization-list"
                      element={<ProtectedRoute element={<OrganizationList />} allowedGroups={['AppAdmins']} />}
                    />
                    <Route
                      path="/roles"
                      element={<ProtectedRoute element={<RolesList />} allowedGroups={['OrgAdmins', 'HiringManagers', 'Recruiters']} requireTenantId />}
                    />
                    <Route
                      path="/role/new"
                      element={<ProtectedRoute element={<RoleNewEdit />} allowedGroups={['OrgAdmins', 'HiringManagers', 'Recruiters']} requireTenantId />}
                    />
                    <Route
                      path="/role/:id"
                      element={<ProtectedRoute element={<RoleNewEdit />} allowedGroups={['OrgAdmins', 'HiringManagers', 'Recruiters']} requireTenantId />}
                    />
                    <Route
                      path="/positions"
                      element={<ProtectedRoute element={<PositionsList />} allowedGroups={['OrgAdmins', 'HiringManagers', 'Recruiters']} requireTenantId />}
                    />
                    <Route
                      path="/position/new"
                      element={<ProtectedRoute element={<PositionNewEdit />} allowedGroups={['OrgAdmins', 'HiringManagers', 'Recruiters']} requireTenantId />}
                    />
                    <Route
                      path="/position/:id"
                      element={<ProtectedRoute element={<PositionNewEdit />} allowedGroups={['OrgAdmins', 'HiringManagers', 'Recruiters']} requireTenantId />}
                    />
                    <Route
                      path="/global-role-catalog"
                      element={<ProtectedRoute element={<GlobalRoleCatalog />} allowedGroups={['AppAdmins']} />}
                    />
                    <Route
                      path="/global-role/:id"
                      element={<ProtectedRoute element={<div>Edit Global Role (TBD)</div>} allowedGroups={['AppAdmins']} />}
                    />
                    <Route
                      path="/organization-settings"
                      element={<ProtectedRoute element={<div>Organization Settings (To Be Implemented)</div>} allowedGroups={['OrgAdmins']} requireTenantId />}
                    />
                    <Route
                      path="/interviews"
                      element={<ProtectedRoute element={<div>Interviews (To Be Implemented)</div>} allowedGroups={['HiringManagers', 'Recruiters', 'Interviewers', 'Facilitators']} requireTenantId />}
                    />
                    <Route
                      path="/candidate-portal"
                      element={<ProtectedRoute element={<div>Candidate Portal (To Be Implemented)</div>} allowedGroups={['Candidates']} />}
                    />
                    <Route path="/login" element={<div>Login Page (Not Needed with Authenticator)</div>} />
                  </Routes>
                </Layout>
              }
            />
          </Routes>
        )}
      </Authenticator>
    </ThemeProvider>
  );
};

export default App;