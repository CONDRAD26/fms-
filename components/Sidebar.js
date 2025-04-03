// components/Sidebar.js
import React, { useRef, useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions } from 'react-native';
import { MaterialIcons, FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { ThemeContext } from '../context/ThemeContext';
import { useNavigation, useRoute } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const Sidebar = ({ expanded, toggleSidebar }) => {
  const navigation = useNavigation();
  const route = useRoute();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const sidebarPosition = useRef(new Animated.Value(-width)).current;
  const backdropOpacity = useRef(new Animated.Value(0)).current;
  const [expandedItems, setExpandedItems] = useState({});

  React.useEffect(() => {
    Animated.parallel([
      Animated.timing(sidebarPosition, {
        toValue: expanded ? 0 : -width,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(backdropOpacity, {
        toValue: expanded ? 0.5 : 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  }, [expanded]);

  const toggleExpand = (title) => {
    setExpandedItems(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const navItems = [
    {
      title: 'Dashboard',
      icon: <FontAwesome name="dashboard" size={20} />,
      screen: 'Home'
    },
    {
      title: 'Transactions',
      icon: <MaterialCommunityIcons name="swap-horizontal" size={20} />,
      screen: 'Transactions'
    },
    {
      title: 'Budget',
      icon: <MaterialIcons name="account-balance-wallet" size={20} />,
      screen: 'Budget'
    },
    {
      title: 'Departments',
      icon: <MaterialCommunityIcons name="office-building" size={20} />,
      screen: 'Departments'
    },
    {
      title: 'Accounts',
      icon: <MaterialCommunityIcons name="bank" size={20} />,
      screen: 'Accounts'
    },
    {
      title: 'Reports',
      icon: <MaterialIcons name="insert-chart" size={20} />,
      subItems: [
        { title: 'Financial', screen: 'FinancialReport' },
        { title: 'Budget', screen: 'BudgetReport' },
      ]
    },
    {
      title: 'Users',
      icon: <Ionicons name="people" size={20} />,
      screen: 'Users'
    },
  ];

  const renderMenuItem = (item, index, level = 0) => {
    const isActive = route.name === item.screen;
    const hasSubItems = item.subItems && item.subItems.length > 0;
    const isExpanded = expandedItems[item.title];

    return (
      <View key={index} style={{ marginLeft: level * 15 }}>
        <TouchableOpacity
          onPress={() => {
            if (hasSubItems) {
              toggleExpand(item.title);
            } else {
              navigation.navigate(item.screen);
              toggleSidebar();
            }
          }}
          style={[
            styles.menuItem,
            { 
              backgroundColor: isActive 
                ? theme.colors.activeMenuItem 
                : theme.colors.menuItemBackground,
              paddingLeft: 15 + (level * 15)
            }
          ]}
        >
          {item.icon && React.cloneElement(item.icon, { 
            color: isActive ? theme.colors.activeMenuText : theme.colors.sidebarText 
          })}
          <Text style={[
            styles.menuText, 
            { 
              color: isActive ? theme.colors.activeMenuText : theme.colors.sidebarText,
              fontWeight: isActive ? 'bold' : 'normal'
            }
          ]}>
            {item.title}
          </Text>
          {hasSubItems && (
            <MaterialIcons 
              name={isExpanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} 
              size={20} 
              color={isActive ? theme.colors.activeMenuText : theme.colors.sidebarText}
              style={{ marginLeft: 'auto' }}
            />
          )}
        </TouchableOpacity>

        {hasSubItems && isExpanded && (
          <View style={styles.subMenu}>
            {item.subItems.map((subItem, subIndex) => 
              renderMenuItem(subItem, subIndex, level + 1)
            )}
          </View>
        )}
      </View>
    );
  };

  return (
    <>
      {expanded && (
        <Animated.View
          style={[
            styles.backdrop,
            {
              opacity: backdropOpacity,
              backgroundColor: theme.colors.backdrop,
            },
          ]}
        >
          <TouchableOpacity 
            style={styles.backdropTouchable} 
            onPress={toggleSidebar} 
            activeOpacity={1}
          />
        </Animated.View>
      )}

      <Animated.View
        style={[
          styles.sidebar,
          {
            transform: [{ translateX: sidebarPosition }],
            backgroundColor: theme.colors.sidebarBackground,
          },
        ]}
      >
        <View style={styles.sidebarHeader}>
          <Text style={[styles.sidebarTitle, { color: theme.colors.sidebarText }]}>
            Finance App
          </Text>
          <TouchableOpacity onPress={toggleSidebar} style={styles.closeButton}>
            <MaterialIcons name="close" size={24} color={theme.colors.sidebarText} />
          </TouchableOpacity>
        </View>

        <View style={styles.sidebarContent}>
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: theme.colors.sidebarText }]}>
              Navigation
            </Text>
            {navItems.map((item, index) => renderMenuItem(item, index))}
          </View>

          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: theme.colors.sidebarText }]}>
              App Settings
            </Text>
            <TouchableOpacity 
              onPress={toggleTheme} 
              style={[
                styles.menuItem,
                { backgroundColor: theme.colors.menuItemBackground }
              ]}
            >
              <MaterialIcons
                name={theme.mode === 'light' ? 'nights-stay' : 'wb-sunny'}
                size={20}
                color={theme.colors.sidebarText}
              />
              <Text style={[styles.menuText, { color: theme.colors.sidebarText }]}>
                {theme.mode === 'light' ? 'Dark Mode' : 'Light Mode'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity 
              onPress={() => navigation.navigate('Settings')} 
              style={[
                styles.menuItem,
                { backgroundColor: theme.colors.menuItemBackground }
              ]}
            >
              <Ionicons name="settings" size={20} color={theme.colors.sidebarText} />
              <Text style={[styles.menuText, { color: theme.colors.sidebarText }]}>
                Settings
              </Text>
            </TouchableOpacity>
          </View>
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
    width: width * 0.8,
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
    borderBottomColor: 'rgba(255,255,255,0.1)',
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
    padding: 15,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 15,
    marginLeft: 10,
    opacity: 0.8,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  menuText: {
    fontSize: 16,
    marginLeft: 15,
  },
  subMenu: {
    marginTop: 4,
    marginBottom: 8,
  },
});

export default Sidebar;