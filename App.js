// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeProvider } from './context/ThemeContext'; // Import the ThemeProvider
import LandingScreen from './screens/LandingScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import TransactionScreen from './screens/TransactionScreen';
import SignUpScreen from './screens/SignUpScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import UsersScreen from './screens/UsersScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen
              name="Landing"
              component={LandingScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Transactions" component={TransactionScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
            <Stack.Screen name="UsersScreen" component={UsersScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </ThemeProvider>
  );
}