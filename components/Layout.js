// components/Layout.js
import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Sidebar from './Sidebar';

const Layout = ({ children, navigation }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleSidebar = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      {/* Sidebar */}
      <Sidebar navigation={navigation} expanded={expanded} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <View style={styles.content}>
        {/* Toggle Button for Sidebar */}
        {!expanded && (
          <TouchableOpacity onPress={toggleSidebar} style={styles.menuButton}>
            <MaterialIcons name="menu" size={30} color="black" />
          </TouchableOpacity>
        )}

        {/* Page Content */}
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  menuButton: {
    marginBottom: 20,
  },
});

export default Layout;