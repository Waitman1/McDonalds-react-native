import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../redux/slices/cartSlice';
import { useNavigation } from '@react-navigation/native';

const CartIcon = () => {
  const items = useSelector(selectCartItems);
  const navigation = useNavigation();
  const cartTotal = useSelector(selectCartTotal);

  if (items.length === 0) return null;

  return (
    <View style={{ position: 'absolute', width: '100%', zIndex: 50, bottom: 40 }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Cart')}
        style={{
          justifyContent: 'space-between',
          marginLeft: 20,
          marginRight: 20,
          backgroundColor: '#FFC72C',
          padding: 16,
          borderRadius: 8,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#27251F',
            fontWeight: '700',
            fontSize: 18,
            backgroundColor: '#dbab25',
            paddingTop: 4,
            paddingBottom: 4,
            paddingLeft: 4,
            paddingRight: 4,
          }}>
          {items.length}
        </Text>
        <Text style={{ color: '#27251F', fontWeight: '700', fontSize: 18, alignItems: 'center' }}>
          Корзина
        </Text>
        <Text style={{ fontSize: 18, color: '#27251F', fontWeight: '700' }}>{cartTotal}₽</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartIcon;
