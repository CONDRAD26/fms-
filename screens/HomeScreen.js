
// screens/HomeScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Welcome to Financial Management </Title>
          <Paragraph>Track your expenses and manage your finances easily.</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={() => navigation.navigate('Transactions')}>
            Go to Transactions
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  card: {
    padding: 16,
  },
});