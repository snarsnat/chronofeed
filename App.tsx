// ChronoFeed - Main App Entry Point
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, User, Settings } from 'lucide-react-native';

import TimelineScreen from './src/screens/TimelineScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import { ThemeProvider } from './src/context/ThemeContext';

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: '#1DA1F2',
            tabBarInactiveTintColor: '#657786',
            headerShown: false,
          }}
        >
          <Tab.Screen 
            name="Timeline" 
            component={TimelineScreen}
            options={{
              tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
            }}
          />
          <Tab.Screen 
            name="Profile" 
            component={ProfileScreen}
            options={{
              tabBarIcon: ({ color, size }) => <User color={color} size={size} />,
            }}
          />
          <Tab.Screen 
            name="Settings" 
            component={SettingsScreen}
            options={{
              tabBarIcon: ({ color, size }) => <Settings color={color} size={size} />,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
