// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import LandingScreen from './screens/LandingScreen'; // Import Landing Screen
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import TransactionScreen from './screens/TransactionScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen 
            name="Landing" 
            component={LandingScreen} 
            options={{ headerShown: false }} // Hide header for landing screen
          />
          <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Transactions" component={TransactionScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
