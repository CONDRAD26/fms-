// screens/UsersScreen.js
import React, { useState , useContext} from 'react';
import { View, Text, StyleSheet, Button,  } from 'react-native';
import { ThemeContext } from '../context/ThemeContext'; // Import the ThemeContext

const UsersScreen = () => {
  const { theme } = useContext(ThemeContext); // Access the current theme
  const [count, setCount] = useState(0); // State to manage the number

  // Function to increment the number
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.title, { color: theme.colors.text }]}>Users Screen</Text>
      <Text style={[styles.countText, { color: theme.colors.text }]}>Count: {count}</Text>
      <Button
        title="Increment"
        onPress={incrementCount}
        color={theme.colors.primary} // Use theme-based primary color
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  countText: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default UsersScreen;