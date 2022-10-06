import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, selectCartItems, selectCartTotal } from '../redux/slices/cartSlice';
import { AntDesign } from '@expo/vector-icons';

const CartScreen = () => {
  const navigation = useNavigation();
  const items = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const [groupedItemsInCart, setGroupedItemsInCart] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedItemsInCart(groupedItems);
  }, [items]);

  console.log(groupedItemsInCart);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F8F8FF',  }}>
      <View style={{ position: 'relative', height: '105%' }}>
        <View
          style={{
            borderBottomColor: '#F0F8FF',
            paddingBottom: 20,
            borderBottomWidth: 1.5,
            backgroundColor: 'white',
            paddingTop: 20,
          }}>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 30, fontWeight: '700' }}>Корзина</Text>
          </View>
          <TouchableOpacity
            onPress={navigation.goBack}
            style={{
              backgroundColor: 'white',
              position: 'absolute',
              top: 3,
              right: 15,
              borderRadius: 999,
              paddingTop: 15,
            }}>
            <AntDesign name="closecircleo" size={40} color="black" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
            backgroundColor: 'white',
            padding: 10,
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <Image
            source={{
              uri: 'https://i.pinimg.com/originals/b1/3b/81/b13b81d79fe91e35008feeaf4c5b04d7.jpg',
            }}
            style={{ width: 50, height: 50, borderRadius: 999 }}
          />
          <Text style={{ textAlign: 'center' }}>Доставка в{'\n'} течение 50-70 минут.</Text>
          <TouchableOpacity>
            <Text style={{ color: 'black' }}>Изменить</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={{ borderBottomWidth: 2, borderColor: '#e5e7eb', height: '90%' }}>
          {Object.entries(groupedItemsInCart).map(([key, items]) => (
            <View
              key={key}
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                paddingLeft: 20,
                paddingRight: 20,
                backgroundColor: 'white',
                paddingHorizontal: 2,
                paddingVertical: 5,
              }}>
              <Text style={{ paddingRight: 10, color: 'black' }}>{items.length} x</Text>
              <Image
                source={{
                  uri: items[0]?.image,
                }}
                style={{ height: 40, width: 40, borderRadius: 999 }}
              />
              <Text style={{ flex: 1, paddingLeft: 10 }}>{items[0]?.name}</Text>
              <Text style={{ color: 'grey', paddingRight: 10 }}>{items[0]?.price} ₽</Text>
              <TouchableOpacity>
                <Text
                  style={{ color: 'black' }}
                  onPress={() => dispatch(removeFromCart({ id: key }))}>
                  Удалить
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View
          style={{
            position: 'absolute',
            bottom: 0,
            padding: 5,
            width: '100%',
            backgroundColor: 'white',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
				  paddingVertical:10,
            }}>
            <Text style={{ color: '#9CA3AF' }}>Промежуточный итог</Text>
            <Text style={{ color: '#9CA3AF' }}>{cartTotal} ₽</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
				  paddingVertical:10
            }}>
            <Text style={{ color: '#9CA3AF' }}>Доставка</Text>
            <Text style={{ color: '#9CA3AF' }}>100 ₽</Text>
          </View>
          <View
            style={{
              marginBottom: 5,
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
				  paddingVertical:10
            }}>
            <Text style={{ color: 'black' }}>Весь заказ</Text>
            <Text style={{ color: 'black', fontWeight: '700' }}>{cartTotal + 100} ₽</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('PreparingOrderScreen')}
            style={{
              marginLeft: 20,
              marginRight: 20,
              backgroundColor: '#FFC72C',
              padding: 16,
              borderRadius: 8,
              alignItems: 'center',
				  marginBottom:50
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                alignItems: 'center',
                justifyContent: 'center',
					
              }}>
              Оформить заказ
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;
