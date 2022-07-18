import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import MoreScreen from '../screens/MoreScreen';
import OrderScreen from '../screens/OrderScreen';
import StockScreen from '../screens/StockScreen';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      barStyle={{ backgroundColor: '#FFC72C', color: 'red' }}
      screenOptions={{
        tabBarActiveTintColor: 'purple',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Главная',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Stock"
        component={StockScreen}
        options={{
          tabBarLabel: 'Акции',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="ticket-percent-outline" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Order"
        component={OrderScreen}
        options={{
          tabBarLabel: 'Заказ',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="basket" color={color} size={24} />
          ),
          tabBarBadge: 2,
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarLabel: 'Карта',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="map" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreScreen}
        options={{
          tabBarLabel: 'Еще',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="more" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
