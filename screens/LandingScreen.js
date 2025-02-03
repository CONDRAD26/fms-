import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function LandingScreen({ navigation }) {
  return (
    <LinearGradient colors={['#004d7a', '#008793', '#00bf72']} style={styles.container}>
      {/* Logo Image */}
      <View style={styles.logoContainer}>
        <Image source={require('../assets/download.png')} style={styles.logo} />
      </View>

      {/* Circular Image */}
      <Image source={require('../assets/pic.jpg')} style={styles.image} />

      {/* Title */}
      <Text style={styles.title}>Financial Management System</Text>

      {/* Get Started Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    position: 'absolute', // Positions the logo at the top
    top: 50, // Adjust this value to control the distance from the top
    alignItems: 'center', // Centers the logo horizontally
  },
  logo: {
    width: 200, // Adjust the width as needed
    height: 100, // Adjust the height as needed
    resizeMode: 'contain', // Ensures the logo scales properly
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75, // Makes the image circular
    borderWidth: 4,
    borderColor: 'white', // White border for a polished look
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textTransform: 'uppercase', // Makes text look professional
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#00bf72',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, // Adds shadow effect for Android
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
}); 