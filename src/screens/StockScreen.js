import { View, Text, SafeAreaView, TouchableHighlight } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../../constants';
import Stock from '../components/Stock';

const StockScreen = () => {
  return (
    <View
      style={{
        height: '100%',
        backgroundColor: '#FAEBD7',
      }}>
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
          Акции
        </Text>
      </SafeAreaView>
      <Stock />
    </View>
  );
};

export default StockScreen;
