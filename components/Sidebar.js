// components/Sidebar.js
import React, { useRef, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions } from 'react-native';
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons'; // For icons
import { ThemeContext } from '../context/ThemeContext'; // Import the ThemeContext

const { width } = Dimensions.get('window'); // Get the screen width

const Sidebar = ({ navigation, expanded, toggleSidebar }) => {
  const { theme, toggleTheme } = useContext(ThemeContext); // Access the current theme and toggle function

  // Animation for sidebar position
  const sidebarPosition = useRef(new Animated.Value(-width)).current; // Start off-screen

  // Animation for backdrop opacity
  const backdropOpacity = useRef(new Animated.Value(0)).current;

  // Animate sidebar and backdrop
  React.useEffect(() => {
    Animated.parallel([
      Animated.timing(sidebarPosition, {
        toValue: expanded ? 0 : -width, // Slide in to 0, slide out to -width
        duration: 300,
        useNativeDriver: true, // Use native driver for better performance
      }),
      Animated.timing(backdropOpacity, {
        toValue: expanded ? 0.5 : 0, // Fade backdrop in and out
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  }, [expanded]);

  return (
    <>
      {/* Backdrop */}
      {expanded && (
        <Animated.View
          style={[
            styles.backdrop,
            {
              opacity: backdropOpacity,
              backgroundColor: theme.colors.backdrop, // Use theme-based backdrop color
            },
          ]}
        >
          <TouchableOpacity style={styles.backdropTouchable} onPress={toggleSidebar} />
        </Animated.View>
      )}

      {/* Sidebar */}
      <Animated.View
        style={[
          styles.sidebar,
          {
            transform: [{ translateX: sidebarPosition }], // Slide horizontally
            backgroundColor: theme.colors.sidebarBackground, // Use theme-based background color
          },
        ]}
      >
        {/* Sidebar Header */}
        <View style={styles.sidebarHeader}>
          <Text style={[styles.sidebarTitle, { color: theme.colors.sidebarText }]}>Menu</Text>
          <TouchableOpacity onPress={toggleSidebar} style={styles.closeButton}>
            <MaterialIcons name="close" size={24} color={theme.colors.sidebarText} />
          </TouchableOpacity>
        </View>

        {/* Sidebar Content */}
        <View style={styles.sidebarContent}>
          {/* Dashboard Navigation */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('HomeScreen'); // Navigate to HomeScreen
              toggleSidebar(); // Close the sidebar after navigation
            }}
            style={styles.menuItem}
          >
            <FontAwesome name="dashboard" size={20} color={theme.colors.sidebarText} />
            <Text style={[styles.menuText, { color: theme.colors.sidebarText }]}>Dashboard</Text>
          </TouchableOpacity>

          {/* Users Screen Navigation */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('UsersScreen'); // Navigate to UsersScreen
              toggleSidebar(); // Close the sidebar after navigation
            }}
            style={styles.menuItem}
          >
            <Ionicons name="people" size={20} color={theme.colors.sidebarText} />
            <Text style={[styles.menuText, { color: theme.colors.sidebarText }]}>Users</Text>
          </TouchableOpacity>

          {/* Other Menu Items */}
          <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={styles.menuItem}>
            <Ionicons name="settings" size={20} color={theme.colors.sidebarText} />
            <Text style={[styles.menuText, { color: theme.colors.sidebarText }]}>Settings</Text>
          </TouchableOpacity>

          {/* Theme Toggle Button */}
          <TouchableOpacity onPress={toggleTheme} style={styles.menuItem}>
            <MaterialIcons
              name={theme.mode === 'light' ? 'nights-stay' : 'wb-sunny'}
              size={20}
              color={theme.colors.sidebarText}
            />
            <Text style={[styles.menuText, { color: theme.colors.sidebarText }]}>
              {theme.mode === 'light' ? 'Dark Mode' : 'Light Mode'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Logout')} style={styles.menuItem}>
            <MaterialIcons name="logout" size={20} color={theme.colors.sidebarText} />
            <Text style={[styles.menuText, { color: theme.colors.sidebarText }]}>Logout</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 9,
  },
  backdropTouchable: {
    flex: 1,
  },
  sidebar: {
    flexDirection: 'column',
    height: '100%',
    width: width * 0.7, // Sidebar width (70% of screen width)
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 10,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
  sidebarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#34495e',
  },
  sidebarTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  closeButton: {
    padding: 5,
  },
  sidebarContent: {
    flex: 1,
    padding: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    backgroundColor: '#34495e', // You can also make this theme-based if needed
  },
  menuText: {
    fontSize: 16,
    marginLeft: 15,
  },
});

export default Sidebar;