import React, { useContext } from 'react';
import { View, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Text, Card, DataTable, Button, IconButton, Avatar } from 'react-native-paper';
import { LineChart, PieChart } from 'react-native-chart-kit';
import { MaterialIcons } from '@expo/vector-icons';
import { ThemeContext } from '../context/ThemeContext';

function HomeScreen({ navigation, toggleSidebar }) {
  const { theme } = useContext(ThemeContext);
  const screenWidth = Dimensions.get('window').width;

  // Sample data
  const recentTransactions = [
    { id: 1, date: '2025-02-11', amount: 200, description: 'Office Supplies', status: 'Completed' },
    { id: 2, date: '2025-02-10', amount: 500, description: 'Software Subscription', status: 'Pending' },
    { id: 3, date: '2025-02-09', amount: 350, description: 'Marketing Materials', status: 'Completed' },
  ];

  const pendingUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Accountant', avatar: 'JD' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Auditor', avatar: 'JS' },
  ];

  const expenseCategories = [
    { name: 'Office', amount: 1200, color: '#4CAF50', legendFontColor: theme.colors.text },
    { name: 'Marketing', amount: 800, color: '#2196F3', legendFontColor: theme.colors.text },
    { name: 'Travel', amount: 600, color: '#FFC107', legendFontColor: theme.colors.text },
    { name: 'Software', amount: 400, color: '#F44336', legendFontColor: theme.colors.text },
  ];

  return (
    <View style={{ flex: 1 }}>
      {/* Custom Header with Menu Button */}
      <View style={[styles.headerContainer, { backgroundColor: theme.colors.primary }]}>
        <TouchableOpacity onPress={toggleSidebar}>
          <MaterialIcons name="menu" size={28} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Dashboard</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Avatar.Text size={32} label="AD" style={{ backgroundColor: 'white' }} />
        </TouchableOpacity>
      </View>

      <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
        {/* Quick Stats Cards */}
        <View style={styles.widgetContainer}>
          <StatCard 
            theme={theme}
            value="5"
            label="Pending Verifications"
            icon="alert-circle-outline"
          />
          <StatCard 
            theme={theme}
            value="120"
            label="Total Transactions"
            icon="swap-horizontal"
          />
          <StatCard 
            theme={theme}
            value="$15,000"
            label="Total Balance"
            icon="wallet-outline"
          />
          <StatCard 
            theme={theme}
            value="$20,000"
            label="Total Budget"
            icon="chart-pie"
          />
        </View>

        {/* Charts Row */}
        <View style={styles.chartsRow}>
          {/* Expense Trends Chart */}
          <View style={styles.chartContainer}>
            <View style={styles.chartHeader}>
              <Text style={[styles.chartTitle, { color: theme.colors.text }]}>Expense Trends</Text>
              <IconButton 
                icon="chevron-right" 
                size={20} 
                color={theme.colors.primary} 
                onPress={() => navigation.navigate('FinancialReport')}
              />
            </View>
            <LineChart
              data={{
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{ 
                  data: [500, 800, 600, 1000, 1200, 900, 1500],
                  strokeWidth: 2
                }],
              }}
              width={screenWidth - 40}
              height={220}
              chartConfig={{
                backgroundGradientFrom: theme.colors.card,
                backgroundGradientTo: theme.colors.card,
                color: (opacity = 1) => theme.colors.primary,
                labelColor: (opacity = 1) => theme.colors.text,
                propsForDots: {
                  r: "4",
                  strokeWidth: "2",
                  stroke: theme.colors.primary
                }
              }}
              bezier
              style={styles.chart}
            />
          </View>

          {/* Expense Breakdown Pie Chart */}
          <View style={styles.chartContainer}>
            <Text style={[styles.chartTitle, { color: theme.colors.text }]}>Expense Breakdown</Text>
            <PieChart
              data={expenseCategories}
              width={screenWidth - 40}
              height={150}
              chartConfig={{
                color: (opacity = 1) => theme.colors.text,
              }}
              accessor="amount"
              backgroundColor="transparent"
              paddingLeft="15"
              absolute
            />
          </View>
        </View>

        {/* Recent Transactions */}
        <Card style={[styles.sectionCard, { backgroundColor: theme.colors.card }]}>
          <Card.Title 
            title="Recent Transactions"
            titleStyle={{ color: theme.colors.text }}
            right={() => (
              <IconButton 
                icon="chevron-right" 
                color={theme.colors.primary} 
                onPress={() => navigation.navigate('Transactions')}
              />
            )}
          />
          <Card.Content>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>
                  <Text style={{ color: theme.colors.text }}>Date</Text>
                </DataTable.Title>
                <DataTable.Title numeric>
                  <Text style={{ color: theme.colors.text }}>Amount</Text>
                </DataTable.Title>
                <DataTable.Title>
                  <Text style={{ color: theme.colors.text }}>Status</Text>
                </DataTable.Title>
              </DataTable.Header>

              {recentTransactions.map((txn) => (
                <DataTable.Row key={txn.id} onPress={() => navigation.navigate('TransactionDetail', { id: txn.id })}>
                  <DataTable.Cell>
                    <Text style={{ color: theme.colors.text }}>{txn.date}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell numeric>
                    <Text style={{ color: txn.amount > 0 ? '#4CAF50' : '#F44336' }}>
                      ${Math.abs(txn.amount)}
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <View style={[
                      styles.statusBadge,
                      { 
                        backgroundColor: txn.status === 'Completed' ? '#E8F5E9' : '#FFF8E1',
                        borderColor: txn.status === 'Completed' ? '#4CAF50' : '#FFC107'
                      }
                    ]}>
                      <Text style={{ 
                        color: txn.status === 'Completed' ? '#4CAF50' : '#FFA000',
                        fontSize: 12
                      }}>
                        {txn.status}
                      </Text>
                    </View>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </Card.Content>
        </Card>

        {/* Pending Verifications */}
        <Card style={[styles.sectionCard, { backgroundColor: theme.colors.card }]}>
          <Card.Title 
            title="Pending Verifications"
            titleStyle={{ color: theme.colors.text }}
            right={() => (
              <IconButton 
                icon="chevron-right" 
                color={theme.colors.primary} 
                onPress={() => navigation.navigate('Users')}
              />
            )}
          />
          <Card.Content>
            {pendingUsers.map((user) => (
              <TouchableOpacity 
                key={user.id} 
                style={styles.userItem}
                onPress={() => navigation.navigate('UserDetail', { id: user.id })}
              >
                <Avatar.Text size={40} label={user.avatar} style={{ backgroundColor: theme.colors.primary }} />
                <View style={styles.userInfo}>
                  <Text style={[styles.userName, { color: theme.colors.text }]}>{user.name}</Text>
                  <Text style={{ color: theme.colors.text, fontSize: 12 }}>{user.email}</Text>
                </View>
                <View style={styles.userRole}>
                  <Text style={{ color: theme.colors.text }}>{user.role}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </Card.Content>
        </Card>

        {/* Quick Actions */}
        <View style={styles.quickActions}>
          <Button
            mode="contained"
            icon="plus"
            onPress={() => navigation.navigate('NewTransaction')}
            style={styles.actionButton}
            color={theme.colors.primary}
          >
            New Transaction
          </Button>
          <Button
            mode="outlined"
            icon="chart-bar"
            onPress={() => navigation.navigate('FinancialReport')}
            style={styles.actionButton}
            color={theme.colors.primary}
          >
            View Reports
          </Button>
        </View>
      </ScrollView>
    </View>
  );
}

// Reusable Stat Card Component
const StatCard = ({ theme, value, label, icon }) => (
  <Card style={[styles.statCard, { backgroundColor: theme.colors.card }]}>
    <Card.Content style={styles.statCardContent}>
      <IconButton 
        icon={icon} 
        color={theme.colors.primary} 
        size={24}
        style={styles.statIcon}
      />
      <Text style={[styles.statValue, { color: theme.colors.text }]}>{value}</Text>
      <Text style={[styles.statLabel, { color: theme.colors.text }]}>{label}</Text>
    </Card.Content>
  </Card>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingTop: 50, // Adjust for status bar
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  widgetContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16,
    marginTop: 16,
  },
  statCard: {
    width: '48%',
    marginBottom: 16,
    borderRadius: 12,
  },
  statCardContent: {
    alignItems: 'center',
    padding: 12,
  },
  statIcon: {
    margin: 0,
  },
  statValue: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  statLabel: {
    fontSize: 12,
    textAlign: 'center',
  },
  chartsRow: {
    marginBottom: 16,
  },
  chartContainer: {
    marginBottom: 16,
  },
  chartHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  chart: {
    borderRadius: 12,
    marginLeft: -10,
  },
  sectionCard: {
    borderRadius: 12,
    marginBottom: 16,
  },
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },
  userInfo: {
    flex: 1,
    marginLeft: 12,
  },
  userName: {
    fontWeight: 'bold',
  },
  userRole: {
    marginLeft: 'auto',
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    alignSelf: 'flex-start',
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  actionButton: {
    flex: 1,
    marginHorizontal: 4,
  },
});

export default HomeScreen;