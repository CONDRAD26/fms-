import React, { useContext } from 'react';
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Text, Card, DataTable, Button } from 'react-native-paper';
import { LineChart } from 'react-native-chart-kit';
import Layout from '../components/Layout'; // Import the Layout component
import { ThemeContext } from '../context/ThemeContext'; // Import the ThemeContext

function HomeScreen({ navigation }) {
  const { theme } = useContext(ThemeContext); // Access the current theme

  return (
    <Layout navigation={navigation}>
      {/* Dashboard Content */}
      <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
        {/* Header */}
        <Text style={[styles.header, { color: theme.colors.text }]}>Dashboard</Text>

        {/* Widgets */}
        <View style={styles.widgetContainer}>
          <Card style={[styles.card, { backgroundColor: theme.colors.card }]}>
            <Card.Content>
              <Text style={[styles.widgetTitle, { color: theme.colors.text }]}>5</Text>
              <Text style={{ color: theme.colors.text }}>Pending Verifications</Text>
            </Card.Content>
          </Card>
          <Card style={[styles.card, { backgroundColor: theme.colors.card }]}>
            <Card.Content>
              <Text style={[styles.widgetTitle, { color: theme.colors.text }]}>120</Text>
              <Text style={{ color: theme.colors.text }}>Total Transactions</Text>
            </Card.Content>
          </Card>
          <Card style={[styles.card, { backgroundColor: theme.colors.card }]}>
            <Card.Content>
              <Text style={[styles.widgetTitle, { color: theme.colors.text }]}>$15,000</Text>
              <Text style={{ color: theme.colors.text }}>Total Balance</Text>
            </Card.Content>
          </Card>
          <Card style={[styles.card, { backgroundColor: theme.colors.card }]}>
            <Card.Content>
              <Text style={[styles.widgetTitle, { color: theme.colors.text }]}>$20,000</Text>
              <Text style={{ color: theme.colors.text }}>Total Budget</Text>
            </Card.Content>
          </Card>
        </View>

        {/* Chart */}
        <View style={styles.chartContainer}>
          <Text style={[styles.chartTitle, { color: theme.colors.text }]}>Expense Trends</Text>
          <LineChart
            data={{
              labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
              datasets: [{ data: [500, 800, 600, 1000, 1200] }],
            }}
            width={Dimensions.get('window').width - 50}
            height={220}
            chartConfig={{
              backgroundGradientFrom: theme.colors.card,
              backgroundGradientTo: theme.colors.card,
              color: (opacity = 1) => theme.colors.primary, // Use theme-based primary color
              labelColor: (opacity = 1) => theme.colors.text, // Use theme-based text color
            }}
            style={styles.chart}
          />
        </View>

        {/* Transactions Table */}
        <View style={styles.tableContainer}>
          <Text style={[styles.chartTitle, { color: theme.colors.text }]}>Recent Transactions</Text>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>
                <Text style={{ color: theme.colors.text }}>Date</Text>
              </DataTable.Title>
              <DataTable.Title>
                <Text style={{ color: theme.colors.text }}>Amount</Text>
              </DataTable.Title>
              <DataTable.Title>
                <Text style={{ color: theme.colors.text }}>Status</Text>
              </DataTable.Title>
            </DataTable.Header>

            <DataTable.Row>
              <DataTable.Cell>
                <Text style={{ color: theme.colors.text }}>2025-02-11</Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text style={{ color: theme.colors.text }}>$200</Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text style={{ color: theme.colors.text }}>Completed</Text>
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>
                <Text style={{ color: theme.colors.text }}>2025-02-10</Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text style={{ color: theme.colors.text }}>$500</Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text style={{ color: theme.colors.text }}>Pending</Text>
              </DataTable.Cell>
            </DataTable.Row>
          </DataTable>
        </View>

        {/* Pending Users Table */}
        <View style={styles.tableContainer}>
          <Text style={[styles.chartTitle, { color: theme.colors.text }]}>Pending User Verifications</Text>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>
                <Text style={{ color: theme.colors.text }}>Name</Text>
              </DataTable.Title>
              <DataTable.Title>
                <Text style={{ color: theme.colors.text }}>Email</Text>
              </DataTable.Title>
              <DataTable.Title>
                <Text style={{ color: theme.colors.text }}>Role</Text>
              </DataTable.Title>
            </DataTable.Header>

            <DataTable.Row>
              <DataTable.Cell>
                <Text style={{ color: theme.colors.text }}>John Doe</Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text style={{ color: theme.colors.text }}>john@example.com</Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text style={{ color: theme.colors.text }}>Accountant</Text>
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>
                <Text style={{ color: theme.colors.text }}>Jane Smith</Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text style={{ color: theme.colors.text }}>jane@example.com</Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text style={{ color: theme.colors.text }}>Auditor</Text>
              </DataTable.Cell>
            </DataTable.Row>
          </DataTable>
        </View>

        {/* Navigation */}
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Transactions')}
          style={styles.button}
          color={theme.colors.primary} // Use theme-based primary color
        >
          View Transactions
        </Button>
      </ScrollView>
    </Layout>
  );
}

const styles = StyleSheet.create({
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