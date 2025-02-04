import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput, Button, Title, Text, useTheme } from 'react-native-paper';

const SignupScreen = () => {
    const theme = useTheme();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('');
    const [department, setDepartment] = useState('');
    const [error, setError] = useState('');

    const handleSignup = () => {
        const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;

        if (!email.includes('@gmail.com')) {
            setError("Please enter a valid email with '@gmail.com'.");
            return;
        }

        if (!passwordRegex.test(password)) {
            setError("Password must be at least 8 characters long and contain at least one symbol.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        setError('');
        alert("Signup successful!");
    };

    return (
        <ImageBackground source={require('../assets/bg-pricing.jpg')} style={styles.background}>
            <KeyboardAvoidingView 
                behavior={Platform.OS === "ios" ? "padding" : "height"} 
                style={styles.container}
            >
                <View style={styles.signupBox}>
                    <Title style={styles.title}>Sign Up</Title>

                    <TextInput
                        label="Email"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        style={styles.input}
                        mode="outlined"
                    />

                    <TextInput
                        label="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        style={styles.input}
                        mode="outlined"
                    />

                    <TextInput
                        label="Confirm Password"
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        secureTextEntry
                        style={styles.input}
                        mode="outlined"
                    />

                    <TextInput
                        label="Role (manager, auditor, user)"
                        value={role}
                        onChangeText={setRole}
                        style={styles.input}
                        mode="outlined"
                    />

                    {role !== 'manager' && role !== 'auditor' && (
                        <TextInput
                            label="Department"
                            value={department}
                            onChangeText={setDepartment}
                            style={styles.input}
                            mode="outlined"
                        />
                    )}

                    {error ? <Text style={styles.error}>{error}</Text> : null}

                    <Button mode="contained" onPress={handleSignup} style={styles.button}>
                        Sign Up
                    </Button>
                </View>
            </KeyboardAvoidingView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    signupBox: {
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        padding: 20,
        borderRadius: 8,
        width: 300,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    title: {
        textAlign: "center",
        marginBottom: 10,
        fontSize: 22,
    },
    input: {
        marginBottom: 10,
    },
    button: {
        marginTop: 10,
    },
    error: {
        color: "red",
        textAlign: "center",
        marginBottom: 10,
    },
});

export default SignupScreen;
