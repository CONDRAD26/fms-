import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeProvider } from './context/ThemeContext';

// Auth Screens
import LandingScreen from './screens/LandingScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';

// Main App Screens
import HomeScreen from './screens/HomeScreen';
import TransactionScreen from './screens/TransactionScreen';
import BudgetScreen from './screens/BudgetScreen';
import DepartmentScreen from './screens/DepartmentScreen';
import AccountScreen from './screens/AccountScreen';
import FinancialReportScreen from './screens/FinancialReportScreen';
import BudgetReportScreen from './screens/BudgetReportScreen';
import UsersScreen from './screens/UsersScreen';
import SettingsScreen from './screens/SettingsScreen';

import MainLayout from './components/MainLayout';

const Stack = createStackNavigator();

export default function App() {
  const [isAuthenticated] = React.useState(true); // Set to false to enable auth

  return (
    <ThemeProvider>
      <PaperProvider>
        <NavigationContainer>
          {isAuthenticated ? (
            <Stack.Navigator
              initialRouteName="Home"
              screenOptions={{
                headerShown: false,
                animationEnabled: false
              }}
            >
              {/* Wrap each screen inside MainLayout */}
              <Stack.Screen name="Home">
                {(props) => (
                  <MainLayout>
                    <HomeScreen {...props} />
                  </MainLayout>
                )}
              </Stack.Screen>
              <Stack.Screen name="Transactions">
                {(props) => (
                  <MainLayout>
                    <TransactionScreen {...props} />
                  </MainLayout>
                )}
              </Stack.Screen>
              <Stack.Screen name="Budget">
                {(props) => (
                  <MainLayout>
                    <BudgetScreen {...props} />
                  </MainLayout>
                )}
              </Stack.Screen>
              <Stack.Screen name="Departments">
                {(props) => (
                  <MainLayout>
                    <DepartmentScreen {...props} />
                  </MainLayout>
                )}
              </Stack.Screen>
              <Stack.Screen name="Accounts">
                {(props) => (
                  <MainLayout>
                    <AccountScreen {...props} />
                  </MainLayout>
                )}
              </Stack.Screen>
              <Stack.Screen name="FinancialReport">
                {(props) => (
                  <MainLayout>
                    <FinancialReportScreen {...props} />
                  </MainLayout>
                )}
              </Stack.Screen>
              <Stack.Screen name="BudgetReport">
                {(props) => (
                  <MainLayout>
                    <BudgetReportScreen {...props} />
                  </MainLayout>
                )}
              </Stack.Screen>
              <Stack.Screen name="Users">
                {(props) => (
                  <MainLayout>
                    <UsersScreen {...props} />
                  </MainLayout>
                )}
              </Stack.Screen>
              <Stack.Screen name="Settings">
                {(props) => (
                  <MainLayout>
                    <SettingsScreen {...props} />
                  </MainLayout>
                )}
              </Stack.Screen>
            </Stack.Navigator>
          ) : (
            <Stack.Navigator initialRouteName="Landing" screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Landing" component={LandingScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="SignUp" component={SignUpScreen} />
              <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
            </Stack.Navigator>
          )}
        </NavigationContainer>
      </PaperProvider>
    </ThemeProvider>
  );
}
