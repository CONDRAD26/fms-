import React from 'react';
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Text, Card, DataTable, Button } from 'react-native-paper';
import { LineChart } from 'react-native-chart-kit';
//import Sidebar from '../components/Sidebar'; // Adjust the path based on your file structure

function HomeScreen({ navigation }) {
  return (
    <View style={styles.mainContainer}>
      {/* Sidebar */}
      <Sidebar navigation={navigation} />

      {/* Dashboard Content */}
      <ScrollView style={styles.container}>
        {/* Header */}
        <Text style={styles.header}>Dashboard</Text>

        {/* Widgets */}
        <View style={styles.widgetContainer}>
          <Card style={styles.card}>
            <Card.Content>
              <Text style={styles.widgetTitle}>5</Text>
              <Text>Pending Verifications</Text>
            </Card.Content>
          </Card>
          <Card style={styles.card}>
            <Card.Content>
              <Text style={styles.widgetTitle}>120</Text>
              <Text>Total Transactions</Text>
            </Card.Content>
          </Card>
          <Card style={styles.card}>
            <Card.Content>
              <Text style={styles.widgetTitle}>$15,000</Text>
              <Text>Total Balance</Text>
            </Card.Content>
          </Card>
          <Card style={styles.card}>
            <Card.Content>
              <Text style={styles.widgetTitle}>$20,000</Text>
              <Text>Total Budget</Text>
            </Card.Content>
          </Card>
        </View>

        {/* Chart */}
        <View style={styles.chartContainer}>
          <Text style={styles.chartTitle}>Expense Trends</Text>
          <LineChart
            data={{
              labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
              datasets: [{ data: [500, 800, 600, 1000, 1200] }],
            }}
            width={Dimensions.get('window').width - 50}
            height={220}
            chartConfig={{
              backgroundGradientFrom: '#f8f8f8',
              backgroundGradientTo: '#fff',
              color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
            }}
            style={styles.chart}
          />
        </View>

        {/* Transactions Table */}
        <View style={styles.tableContainer}>
          <Text style={styles.chartTitle}>Recent Transactions</Text>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Date</DataTable.Title>
              <DataTable.Title>Amount</DataTable.Title>
              <DataTable.Title>Status</DataTable.Title>
            </DataTable.Header>

            <DataTable.Row>
              <DataTable.Cell>2025-02-11</DataTable.Cell>
              <DataTable.Cell>$200</DataTable.Cell>
              <DataTable.Cell>Completed</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>2025-02-10</DataTable.Cell>
              <DataTable.Cell>$500</DataTable.Cell>
              <DataTable.Cell>Pending</DataTable.Cell>
            </DataTable.Row>
          </DataTable>
        </View>

        {/* Pending Users Table */}
        <View style={styles.tableContainer}>
          <Text style={styles.chartTitle}>Pending User Verifications</Text>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Name</DataTable.Title>
              <DataTable.Title>Email</DataTable.Title>
              <DataTable.Title>Role</DataTable.Title>
            </DataTable.Header>

            <DataTable.Row>
              <DataTable.Cell>John Doe</DataTable.Cell>
              <DataTable.Cell>john@example.com</DataTable.Cell>
              <DataTable.Cell>Accountant</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Jane Smith</DataTable.Cell>
              <DataTable.Cell>jane@example.com</DataTable.Cell>
              <DataTable.Cell>Auditor</DataTable.Cell>
            </DataTable.Row>
          </DataTable>
        </View>

        {/* Navigation */}
        <Button mode="contained" onPress={() => navigation.navigate('Transactions')} style={styles.button}>
          View Transactions
        </Button>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row', // Sidebar and content side-by-side
    backgroundColor: '#F4F6F6',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  widgetContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    padding: 16,
    marginBottom: 10,
    alignItems: 'center',
  },
  widgetTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  chartContainer: {
    marginTop: 20,
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  chart: {
    borderRadius: 10,
  },
  tableContainer: {
    marginTop: 20,
  },
  button: {
    marginTop: 20,
  },
});

export default HomeScreen;
