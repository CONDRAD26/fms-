import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Sidebar from './Sidebar';

const screenWidth = Dimensions.get('window').width;
const sidebarWidth = screenWidth * 0.2; // Adjust sidebar width dynamically

const MainLayout = ({ children }) => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const navigation = useNavigation(); // Ensure navigation context is accessible

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Sidebar expanded={sidebarExpanded} toggleSidebar={toggleSidebar} navigation={navigation} />
        <View style={[styles.content, sidebarExpanded && { marginLeft: sidebarWidth }]}>
          {children}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff', // Ensure background consistency
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  content: {
    flex: 1,
  },
});

export default MainLayout;
