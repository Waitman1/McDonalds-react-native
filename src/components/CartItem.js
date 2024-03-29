import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableHighlight, View, Image, Text } from 'react-native';

import { COLORS, SIZES } from '../../constants';

import { AntDesign, Entypo } from '@expo/vector-icons';

const CartItem = ({ id, name, image }) => {
  return (
    <>
      <View
        style={{
          width: '100%',
          marginTop: 20,
          alignItems: 'center',
        }}>
        <TouchableHighlight
          underlayColor={COLORS.secondary}
          style={{
            height: 100,
            width: '90%',
            borderRadius: SIZES.radius,
            backgroundColor: 'white',
            justifyContent: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: 15,
              marginRight: 15,
            }}>
            <Image
              source={{ uri: image }}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 60,
                height: 60,
              }}
            />
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'space-between',
                marginRight: 5,
                width: '30%',
              }}>
              <Text
                style={{
                  fontSize: SIZES.h3,
                  color: 'black',
                  marginTop: 13,
                  textAlign: 'center',
                }}>
                {name}
              </Text>
              <Text
                style={{
                  fontSize: SIZES.h2,
                  color: 'red',

                  textAlign: 'center',
                }}>
                ₽
              </Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <AntDesign name="minus" size={20} color="red" />
              <Text
                style={{
                  fontSize: 20,
                }}></Text>
              <AntDesign style={{}} name="plus" size={20} color="red" />
            </View>
            <Text
              style={{
                marginTop: 20,
                fontSize: 20,
              }}>
              ₽
            </Text>
            <Entypo
              style={{
                marginTop: 15,
              }}
              name="circle-with-cross"
              size={30}
              color="red"
            />
          </View>
        </TouchableHighlight>
      </View>
    </>
  );
};

export default CartItem;
