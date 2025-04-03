// screens/TransactionScreen.js
import React, { useState } from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput, Button, Card, Title, Paragraph, Text, IconButton, Colors } from 'react-native-paper';
import Layout from '../components/Layout';

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
      amount: parseFloat(amount).toFixed(2),
      description,
      date: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      type: amount >= 0 ? 'income' : 'expense'
    };

    setTransactions([newTransaction, ...transactions]); // Add new transaction at beginning
    setAmount('');
    setDescription('');
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  };

  const getTotalBalance = () => {
    return transactions.reduce((total, item) => total + parseFloat(item.amount), 0).toFixed(2);
  };

  return (
    <Layout>
      <View style={styles.container}>
        {/* Balance Card */}
        <Card style={styles.balanceCard}>
          <Card.Content>
            <Text style={styles.balanceLabel}>Current Balance</Text>
            <Text style={styles.balanceAmount}>${getTotalBalance()}</Text>
          </Card.Content>
        </Card>

        {/* Input Section */}
        <Card style={styles.inputCard}>
          <Card.Content>
            <Text style={styles.sectionTitle}>Add New Transaction</Text>
            <TextInput
              label="Amount"
              value={amount}
              onChangeText={setAmount}
              keyboardType="numeric"
              style={styles.input}
              mode="outlined"
              left={<TextInput.Affix text="$" />}
            />
            <TextInput
              label="Description"
              value={description}
              onChangeText={setDescription}
              style={styles.input}
              mode="outlined"
            />
            <Button 
              mode="contained" 
              onPress={addTransaction} 
              style={styles.button}
              labelStyle={styles.buttonLabel}
              icon="plus"
            >
              Add Transaction
            </Button>
          </Card.Content>
        </Card>

        {/* Transactions List */}
        <View style={styles.listHeader}>
          <Text style={styles.sectionTitle}>Recent Transactions</Text>
          <Text style={styles.transactionCount}>{transactions.length} items</Text>
        </View>
        
        {transactions.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>No transactions yet</Text>
            <Text style={styles.emptySubtext}>Add your first transaction above</Text>
          </View>
        ) : (
          <FlatList
            data={transactions}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Card style={[
                styles.transactionItem,
                item.type === 'income' ? styles.incomeItem : styles.expenseItem
              ]}>
                <Card.Content style={styles.transactionContent}>
                  <View style={styles.transactionInfo}>
                    <Text style={styles.transactionDescription}>{item.description}</Text>
                    <Text style={styles.transactionDate}>{item.date}</Text>
                  </View>
                  <View style={styles.transactionAmountContainer}>
                    <Text style={[
                      styles.transactionAmount,
                      item.type === 'income' ? styles.incomeAmount : styles.expenseAmount
                    ]}>
                      {item.type === 'income' ? '+' : ''}{item.amount}
                    </Text>
                    <IconButton
                      icon="delete"
                      color={Colors.red500}
                      size={20}
                      onPress={() => deleteTransaction(item.id)}
                      style={styles.deleteButton}
                    />
                  </View>
                </Card.Content>
              </Card>
            )}
          />
        )}
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  balanceCard: {
    marginBottom: 16,
    backgroundColor: '#6200ee',
    borderRadius: 12,
    elevation: 4,
  },
  balanceLabel: {
    color: 'white',
    fontSize: 16,
    marginBottom: 8,
  },
  balanceAmount: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  inputCard: {
    marginBottom: 16,
    borderRadius: 12,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  input: {
    marginBottom: 16,
    backgroundColor: 'white',
  },
  button: {
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 8,
    backgroundColor: '#6200ee',
    paddingVertical: 6,
  },
  buttonLabel: {
    color: 'white',
    fontSize: 16,
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    paddingHorizontal: 4,
  },
  transactionCount: {
    color: '#666',
    fontSize: 14,
  },
  transactionItem: {
    marginBottom: 8,
    borderRadius: 10,
    elevation: 1,
  },
  incomeItem: {
    borderLeftWidth: 4,
    borderLeftColor: '#4CAF50',
  },
  expenseItem: {
    borderLeftWidth: 4,
    borderLeftColor: '#F44336',
  },
  transactionContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  transactionInfo: {
    flex: 1,
  },
  transactionDescription: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  transactionDate: {
    fontSize: 12,
    color: '#666',
  },
  transactionAmountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
  },
  incomeAmount: {
    color: '#4CAF50',
  },
  expenseAmount: {
    color: '#F44336',
  },
  deleteButton: {
    margin: 0,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 18,
    color: '#666',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#999',
  },
});