import { View, Text, StyleSheet, SafeAreaView, TouchableHighlight } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../../constants';

const MoreScreen = () => {
  return (
    <View
      style={{
        height: '100%',
        backgroundColor: '#F8F8FF',
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
          Еще
        </Text>
      </SafeAreaView>
      <View style={{ alignItems: 'center', marginTop: 50,}}>
        <TouchableHighlight
          underlayColor={COLORS.secondary}
          style={{
            height: 70,
            width: '70%',
            justifyContent: 'center',
            borderRadius: 10,
            backgroundColor: '#FFC72C',
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}>
          <Text
            style={{
              fontSize: 17,
              color: '#27251F',
              fontWeight: '500',
            }}>
            Мои данные
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={COLORS.secondary}
          style={{
            height: 70,
            width: '70%',
            justifyContent: 'center',
				borderRadius: 10,
            backgroundColor: '#FFC72C',
            marginTop: 20,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}>
          <Text
            style={{
              fontSize: 17,
              color: '#27251F',
              fontWeight: '500',
            }}>
            Город
          </Text>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor={COLORS.secondary}
          style={{
            height: 70,
            width: '70%',
            justifyContent: 'center',
				borderRadius: 10,
            backgroundColor: '#FFC72C',
            marginTop: 20,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}>
          <Text
            style={{
              fontSize: 17,
              color: '#27251F',
              fontWeight: '500',
            }}>
            Старые заказы
          </Text>
        </TouchableHighlight>
      
        <TouchableHighlight
          underlayColor={COLORS.secondary}
          style={{
            height: 70,
            width: '70%',
            justifyContent: 'center',
            borderRadius: 10,
            backgroundColor: '#FFC72C',
            marginTop: 20,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}>
          <Text
            style={{
              fontSize: 17,
              color: '#27251F',
              fontWeight: '500',
            }}>
            О приложении
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default MoreScreen;
