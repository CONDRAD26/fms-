// components/MainLayout.js
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Sidebar from './Sidebar';

const MainLayout = ({ children }) => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  return (
    <View style={styles.container}>
      <Sidebar 
        expanded={sidebarExpanded} 
        toggleSidebar={() => setSidebarExpanded(!sidebarExpanded)} 
      />
      
      <View style={[
        styles.content, 
        sidebarExpanded && styles.contentShifted
      ]}>
        {children({ toggleSidebar: () => setSidebarExpanded(!sidebarExpanded) })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  content: {
    flex: 1,
    width: '100%',
  },
  contentShifted: {
    marginLeft: '80%',
    width: '20%',
    overflow: 'hidden',
  },
});

export default MainLayout; // Make sure this export exists