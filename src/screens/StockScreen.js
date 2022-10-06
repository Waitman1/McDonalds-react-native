import { View, Text, SafeAreaView, } from 'react-native';
import React from 'react';


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
     
    </View>
  );
};

export default StockScreen;
