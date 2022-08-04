import React from 'react';
import { Text, Image, View, TouchableHighlight, TouchableOpacity } from 'react-native';

import { COLORS, SIZES } from '../../constants';

import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/slices/cartSlice';

function BurgerBlock({ id, name, price, image }) {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.items.find((obj) => obj.id === id));

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item = {
      id,
      name,
      price,
      image,
    };
    dispatch(addItem(item));
  };

  return (
    <>
      <View
        style={{
          width: '45%',
          justifyContent: 'space-between',
          marginTop: 20,
          marginLeft: 10,
        }}>
        <TouchableHighlight
          style={{
            width: '100%',
            height: 150,
            borderRadius: SIZES.radius,
            backgroundColor: 'white',
            justifyContent: 'center',
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
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={{ uri: image }}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 60,
                height: 60,
                marginTop: 5,
              }}
            />
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: SIZES.h4,
                  color: 'black',
                  marginTop: 5,
                  textAlign: 'center',
                }}>
                {name}
              </Text>
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  marginLeft: 20,
                }}>
                <Text
                  style={{
                    fontSize: SIZES.h3,
                    color: 'red',
                    marginTop: 15,
                    marginRight: 15,
                  }}>
                  {price} ₽
                </Text>
                <TouchableOpacity onPress={onClickAdd}>
                  <Image
                    source={{
                      uri: 'https://cdn-icons-png.flaticon.com/512/34/34627.png',
                    }}
                    style={{
                      width: 20,
                      height: 20,
                      marginTop: 15,
                      marginRight: 10,
                      opacity: 0.5,
                    }}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    marginTop: 15,
                    marginRight: 20,
                    fontSize: 18,
                  }}>
                  {addedCount}
                </Text>
              </View>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    </>
  );
}

export default BurgerBlock;
