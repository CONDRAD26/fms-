

// components/CustomDrawerContent.js
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useTheme, Avatar, Title, Caption } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CustomDrawerContent(props) {
  const { colors } = useTheme();

  return (
    <DrawerContentScrollView {...props} style={styles.container}>
      {/* Drawer Header */}
      <View style={styles.drawerHeader}>
        <Avatar.Icon size={50} icon="account" style={styles.avatar} />
        <Title style={styles.title}>John Doe</Title>
        <Caption style={styles.caption}>john.doe@example.com</Caption>
      </View>

      {/* Drawer Menu Items */}
      <DrawerItemList {...props} />

      {/* Logout Button */}
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => console.log('Logout pressed')}
      >
        <Icon name="logout" size={24} color={colors.text} />
        <Text style={[styles.logoutText, { color: colors.text }]}>Logout</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  avatar: {
    backgroundColor: '#4CAF50',
  },
  title: {
    marginTop: 10,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 12,
    color: '#888',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginTop: 'auto',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  logoutText: {
    marginLeft: 15,
    fontSize: 16,
  },
});