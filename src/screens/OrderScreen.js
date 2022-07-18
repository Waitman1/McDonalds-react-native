import { View, Text, SafeAreaView, Image } from 'react-native';
import React from 'react';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

const OrderScreen = () => {
  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: '#FFC72C',
          height: 100,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '700',
            color: '#27251F',
            marginBottom: 10,
          }}>
          Ваши заказы
        </Text>
      </SafeAreaView>
      <View
        style={{
          backgroundColor: 'black',
          height: '100%',
          justifyContent: 'center',
          paddingTop: 30,
          flexDirection: 'row',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            marginRight: 180,
          }}>
          Заказ
        </Text>
        <TouchableHighlight
          style={{
            backgroundColor: '#FFC72C',
            borderRadius: 7,
            width: 30,
            height: 27,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 20,
          }}>
          <AntDesign name="plus" size={18} color="black" />
        </TouchableHighlight>

        <TouchableHighlight
          style={{
            backgroundColor: '#FFC72C',
            borderRadius: 7,
            width: 30,
            height: 27,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AntDesign name="minus" size={18} color="black" />
        </TouchableHighlight>
      </View>
    </>
  );
};

export default OrderScreen;
