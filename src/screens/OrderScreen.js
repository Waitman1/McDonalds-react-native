import { View, Text, SafeAreaView, Button } from 'react-native';
import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { clearItems } from '../redux/slices/cartSlice';

import CartEmpty from '../components/CartEmpty';
import CartItem from '../components/CartItem';

const OrderScreen = () => {
  const dispatch = useDispatch();

  const { totalPrice, items } = useSelector((state) => state.cart);

  const onClickClear = () => {
    dispatch(clearItems());
  };

  if (!totalPrice) {
    return <CartEmpty />;
  }

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
          Корзина
        </Text>
      </SafeAreaView>
      <View
        style={{
          backgroundColor: '#F8F8FF',
          height: '100%',
          alignItems: 'center',
        }}>
        {items.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
        <Text
          style={{
            marginTop: 30,
            color: 'black',
            fontSize: 30,
          }}>
          Сумма заказа: {totalPrice} ₽
        </Text>
        <Button onPress={onClickClear} title="Очистить"></Button>
      </View>
    </>
  );
};

export default OrderScreen;
