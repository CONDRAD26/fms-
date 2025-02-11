import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // For the toggle icon

const Sidebar = ({ navigation, expanded }) => {
  return (
    <View style={[styles.sidebar, { width: expanded ? 250 : 60 }]}>
      {/* Toggle Button when collapsed */}
      {expanded ? (
        <View style={styles.sidebarContent}>
          <TouchableOpacity onPress={() => navigation.navigate('Dashboard')} style={styles.menuItem}>
            <Text style={styles.menuText}>Dashboard</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('UserManagement')} style={styles.menuItem}>
            <Text style={styles.menuText}>User Management</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={styles.menuItem}>
            <Text style={styles.menuText}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Logout')} style={styles.menuItem}>
            <Text style={styles.menuText}>Logout</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity onPress={() => navigation.toggleSidebar()} style={styles.menuItem}>
          <MaterialIcons name="menu" size={30} color="black" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    backgroundColor: '#2c3e50',
    flexDirection: 'column',
    paddingTop: 50,
    position: 'absolute',
    height: '100%',
    left: 0,
    top: 0,
    zIndex: 10,
    transition: 'width 0.3s ease',
  },
  sidebarContent: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 30,
  },
  menuItem: {
    marginBottom: 20,
    paddingLeft: 20,
    paddingVertical: 15,
    backgroundColor: '#34495e',
    borderRadius: 5,
  },
  menuText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Sidebar;
