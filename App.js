import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeProvider } from './context/ThemeContext';
import MainLayout from './components/MainLayout';

// Import all your screens...
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

const RootStack = createStackNavigator();
const MainAppStack = createStackNavigator();

// Create a screen component wrapper
const createScreen = (Component) => {
  return ({ navigation }) => (
    <MainLayout>
      {({ toggleSidebar }) => (
        <Component navigation={navigation} toggleSidebar={toggleSidebar} />
      )}
    </MainLayout>
  );
};

const MainApp = () => (
  <MainAppStack.Navigator 
    initialRouteName="Home" 
    screenOptions={{ headerShown: false }}
  >
    <MainAppStack.Screen name="Home" component={createScreen(HomeScreen)} />
    <MainAppStack.Screen name="Transactions" component={createScreen(TransactionScreen)} />
    <MainAppStack.Screen name="Budget" component={createScreen(BudgetScreen)} />
    <MainAppStack.Screen name="Departments" component={createScreen(DepartmentScreen)} />
    <MainAppStack.Screen name="Accounts" component={createScreen(AccountScreen)} />
    <MainAppStack.Screen name="FinancialReport" component={createScreen(FinancialReportScreen)} />
    <MainAppStack.Screen name="BudgetReport" component={createScreen(BudgetReportScreen)} />
    <MainAppStack.Screen name="Users" component={createScreen(UsersScreen)} />
    <MainAppStack.Screen name="Settings" component={createScreen(SettingsScreen)} />
  </MainAppStack.Navigator>
);

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(true); 

  return (
    <ThemeProvider>
      <PaperProvider>
        <NavigationContainer>
          <RootStack.Navigator screenOptions={{ headerShown: false }}>
            {isAuthenticated ? (
              <RootStack.Screen name="MainApp" component={MainApp} />
            ) : (
              <>
                <RootStack.Screen name="Landing" component={LandingScreen} />
                <RootStack.Screen name="Login" component={LoginScreen} />
                <RootStack.Screen name="SignUp" component={SignUpScreen} />
                <RootStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
              </>
            )}
          </RootStack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </ThemeProvider>
  );
}