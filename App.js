// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeProvider } from './context/ThemeContext';
import MainLayout from './components/MainLayout';

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

const Stack = createStackNavigator();

export default function App() {
  const [isAuthenticated] = React.useState(true); // Set to false to enable auth

  return (
    <ThemeProvider>
      <PaperProvider>
        <NavigationContainer>
          {isAuthenticated ? (
            <MainLayout>
              <Stack.Navigator 
                initialRouteName="Home"
                screenOptions={{ 
                  headerShown: false,
                  animationEnabled: false 
                }}
              >
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Transactions" component={TransactionScreen} />
                <Stack.Screen name="Budget" component={BudgetScreen} />
                <Stack.Screen name="Departments" component={DepartmentScreen} />
                <Stack.Screen name="Accounts" component={AccountScreen} />
                <Stack.Screen name="FinancialReport" component={FinancialReportScreen} />
                <Stack.Screen name="BudgetReport" component={BudgetReportScreen} />
                <Stack.Screen name="Users" component={UsersScreen} />
                <Stack.Screen name="Settings" component={SettingsScreen} />
              </Stack.Navigator>
            </MainLayout>
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