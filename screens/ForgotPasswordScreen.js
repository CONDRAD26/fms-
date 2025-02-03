// screens/ForgotPasswordScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';

export default function ForgotPasswordScreen() {
  return (
    <View style={styles.container}>
      <Title>Forgot Password</Title>
      <TextInput
        label="Email"
        style={styles.input}
        mode="outlined"
      />
      <Button mode="contained" onPress={() => console.log('Reset Password')}>
        Reset Password
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    marginBottom: 15,
  },
});