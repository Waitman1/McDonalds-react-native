import React from 'react';
import { Image, Linking, View, TouchableNativeFeedback, Text, StyleSheet } from 'react-native';

import { useSelector } from 'react-redux';
import StockScreen from '../screens/StockScreen';

const Header = () => {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
      }}>
      <TouchableNativeFeedback onPress={() => Linking.openURL('https://www.google.com/')}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/800px-McDonald%27s_Golden_Arches.svg.png',
          }}
          style={{
            width: 51,
            height: 45,
          }}
        />
      </TouchableNativeFeedback>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '38%',
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
          }}>
          {totalCount}
        </Text>

        <TouchableNativeFeedback style={{}} onPress={StockScreen}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/34/34627.png',
            }}
            style={{
              width: 35,
              height: 35,
              position: 'absolute',
              left: 15,
              right: 0,
              bottom: 0,
            }}
          />
        </TouchableNativeFeedback>

        <Text
          style={{
            color: 'black',
            fontSize: 20,
          }}>
          {totalPrice} ₽
        </Text>
      </View>
    </View>
  );
};

export default Header;
