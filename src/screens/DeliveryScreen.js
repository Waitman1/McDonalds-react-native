import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectBurger } from '../redux/slices/burgerSlice';

import { Feather } from '@expo/vector-icons';

import * as Progress from 'react-native-progress';

import MapView, { Marker } from 'react-native-maps';

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const burger = useSelector(selectBurger);

  return (
    <View style={{ backgroundColor: '#FF8C00', flex: 1 }}>
      <SafeAreaView style={{ zIndex: 50 }}>
        <View
          style={{
            paddingHorizontal: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Feather name="x" size={34} color="white" />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, color: 'white' }}>Помощь</Text>
        </View>
        <View
          style={{
            marginTop: 20,
            backgroundColor: 'white',
            borderRadius: 10,
            paddingHorizontal: 30,
            height: 120,
            marginHorizontal: 20,
            zIndex: 50,
            justifyContent: 'center',
          }}>
          <Text style={{ color: 'grey', marginTop: 10 }}>Ожидаемая доставка</Text>
          <Text style={{ fontWeight: '700', fontSize: 30, marginBottom: 10 }}>45-55 минут</Text>
          <Progress.Bar size={30} color="#FF8C00" indeterminate={true} />
          <Text style={{ color: 'grey', marginVertical: 10 }}>Ваш заказ готовиться</Text>
        </View>
      </SafeAreaView>

      <MapView
        initialRegion={{
          latitude: 55.7679987,
          longitude: 37.575644,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{ flex: 1, zIndex: 0, marginTop: -30 }}
        mapType="mutedStandard"></MapView>
    </View>
  );
};

export default DeliveryScreen;
