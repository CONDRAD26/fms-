// screens/TransactionScreen.js
import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { TextInput, Button, Card, Title, Paragraph } from 'react-native-paper';
import Layout from '../components/Layout'; // Import the Layout component

export default function TransactionScreen() {
  const [transactions, setTransactions] = useState([]);
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const addTransaction = () => {
    if (!amount || !description) {
      alert('Please fill in both amount and description.');
      return;
    }

    const newTransaction = {
      id: Date.now().toString(),
      amount: parseFloat(amount).toFixed(2), // Ensure amount is a number with 2 decimal places
      description,
    };

    setTransactions([...transactions, newTransaction]);
    setAmount('');
    setDescription('');
  };

  return (
    <Layout>
      <View style={styles.container}>
        {/* Input Fields */}
        <TextInput
          label="Amount"
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
          style={styles.input}
        />
        <TextInput
          label="Description"
          value={description}
          onChangeText={setDescription}
          style={styles.input}
        />

        {/* Add Transaction Button */}
        <Button mode="contained" onPress={addTransaction} style={styles.button}>
          Add Transaction
        </Button>

        {/* Transactions List */}
        <FlatList
          data={transactions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card style={styles.transactionItem}>
              <Card.Content>
                <Title>{item.description}</Title>
                <Paragraph>${item.amount}</Paragraph>
              </Card.Content>
            </Card>
          )}
        />
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  button: {
    marginBottom: 16,
  },
  transactionItem: {
    marginBottom: 8,
    backgroundColor: '#fff',
  },
});