// screens/LoginScreen.js
import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput, Button, Title, Text, useTheme } from 'react-native-paper';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { colors } = useTheme();

  const handleLogin = () => {
    // Add your login logic here
    console.log('Username:', username);
    console.log('Password:', password);
    navigation.navigate('Home'); // Navigate to the Home screen after login
  };

  return (
    <ImageBackground
      source={require('../assets/office-dark.jpg')} 
      style={styles.background}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <View style={styles.loginBox}>
          <Title style={styles.title}>Financial Management System</Title>
          <Text style={styles.subtitle}>Login</Text>

          {/* Username or Email Input */}
          <TextInput
            label="Username or Email"
            value={username}
            onChangeText={setUsername}
            style={styles.input}
            mode="outlined"
            theme={{ colors: { text: colors.text, placeholder: colors.text } }}
          />

          {/* Password Input */}
          <TextInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
            mode="outlined"
            theme={{ colors: { text: colors.text, placeholder: colors.text } }}
          />

          {/* Login Button */}
          <Button
            mode="contained"
            onPress={handleLogin}
            style={styles.button}
            labelStyle={{ color: colors.background }}
          >
            Login
          </Button>

          {/* Forgot Password Link */}
          <Button
            mode="text"
            onPress={() => navigation.navigate('ForgotPassword')}
            style={styles.link}
            labelStyle={{ color: colors.primary }}
          >
            Forgot Password?
          </Button>

          {/* Sign Up Link */}
          <Button
            mode="text"
            onPress={() => navigation.navigate('SignUp')}
            style={styles.link}
            labelStyle={{ color: colors.primary }}
          >
            Sign Up
          </Button>
        </View>

        {/* Footer */}
        <Text style={styles.footer}>&copy; 2025.UG | Created by Condrad Otim</Text>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBox: {
    width: '80%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 24,
    marginBottom: 10,
  },
  subtitle: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    marginBottom: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  button: {
    marginTop: 10,
    paddingVertical: 5,
  },
  link: {
    marginTop: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    textAlign: 'center',
    color: '#FFF',
  },
});