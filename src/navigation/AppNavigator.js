import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import MoreScreen from '../screens/MoreScreen';

import StockScreen from '../screens/StockScreen';
import CartScreen from '../screens/CartScreen';

import PreparingOrderScreen from '../screens/PreparingOrderScreen';
import FullScreen from '../screens/FullScreen';
import DeliveryScreen from '../screens/DeliveryScreen';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="FullScreen" component={FullScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{ presentation: 'modal', headerShown: false }}
      />
      <Stack.Screen
        name="PreparingOrderScreen"
        component={PreparingOrderScreen}
        options={{
          presentation: 'fullScreenModal',
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Delivery"
        component={DeliveryScreen}
        options={{
          presentation: 'fullScreenModal',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      barStyle={{ backgroundColor: '#F8F8FF', color: 'red' }}
      screenOptions={{
        tabBarActiveTintColor: 'purple',
      }}>
      <Tab.Screen
        name="Home2"
        component={HomeStack}
        options={{
          tabBarLabel: 'Главная',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
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
