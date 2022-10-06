import { SafeAreaView, Text } from 'react-native';
import React, { useEffect } from 'react';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Delivery');
    }, 3000);
  }, []);

  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animatable.Image
        source={require('../../assets/loader.gif')}
        animation="slideInUp"
        iterationCount={1}
        style={{ height: 400, width: 400 }}
      />

      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        style={{
          color: 'black',
          fontSize: 20,
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: 20,
        }}>
        Ожидайте, пока ресторан примет ваш заказ!
      </Animatable.Text>

      <Progress.Circle size={60} indeterminate={true} color="#FFC72C" fill="white" />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
