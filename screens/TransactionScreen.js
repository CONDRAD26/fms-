// screens/TransactionScreen.js
import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { TextInput, Button, Card, Title } from 'react-native-paper';

export default function TransactionScreen() {
  const [transactions, setTransactions] = useState([]);
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const addTransaction = () => {
    setTransactions([...transactions, { id: Date.now(), amount, description }]);
    setAmount('');
    setDescription('');
  };

  return (
    <View style={styles.container}>
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
      <Button mode="contained" onPress={addTransaction} style={styles.button}>
        Add Transaction
      </Button>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id.toString()}
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginBottom: 16,
  },
  transactionItem: {
    marginBottom: 8,
  },
});