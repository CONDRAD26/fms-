// components/MainLayout.js
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Sidebar from './Sidebar';

const MainLayout = ({ children }) => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  return (
    <View style={styles.container}>
      <Sidebar 
        expanded={sidebarExpanded} 
        toggleSidebar={toggleSidebar} 
      />
      <View style={[
        styles.content,
        sidebarExpanded && styles.contentShifted
      ]}>
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
  },
  contentShifted: {
    marginLeft: '20%', // Adjust this value based on your sidebar width
  },
});

export default MainLayout;