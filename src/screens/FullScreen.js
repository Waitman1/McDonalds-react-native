import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  removeFromCart,
  selectCartItems,
  selectCartItemsWithId,
} from '../redux/slices/cartSlice';
import CartIcon from '../components/CartIcon';
import { setBurger } from '../redux/slices/burgerSlice';

const FullScreen = ({ navigation }) => {
  const {
    params: { id, name, price, count, image, discription },
  } = useRoute();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setBurger({
        id,
        name,
        price,
        count,
        image,
      }),
    );
  }, []);

  const items = useSelector((state) => selectCartItemsWithId(state, id));

  const addItemToCart = () => {
    dispatch(addToCart({ id, name, price, count, image, discription }));
  };

  const removeItemFromCart = () => {
    if (!items.length > 0) return;
    dispatch(removeFromCart({ id }));
  };

  return (
    <>
      <CartIcon />
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <AntDesign
          style={{ paddingTop: 60, marginLeft: 20 }}
          onPress={navigation.goBack}
          name="arrowleft"
          size={30}
          color="black"
        />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom:30   }}>
          <Text style={{ fontSize: 30, fontWeight: '700' }}>{name}</Text>
          <Image
            source={{ uri: image }}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: 200,
              height: 200,
              marginTop: 5,
            }}
          />
          <Text style={{ textAlign: 'center', padding: 15, fontSize: 10, fontWeight: '700' }}>
            {discription}
          </Text>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
              width: 160,
              marginTop: 20,
            }}>
            <TouchableOpacity disabled={!items.length} onPress={removeItemFromCart}
               style={{borderRadius: 8, backgroundColor: '#FFC72C', padding:5 }}
				>
              <AntDesign
                name="minus"
                size={30}
                color={items.length > 0 ? 'red' : '#00CCBB'}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
					 fontWeight: "bold",
              }}>
              {items.length}
            </Text>
				<View style={{}}>
            <TouchableOpacity style={{borderRadius: 8, backgroundColor: '#FFC72C', padding:5  }} onPress={addItemToCart}>
              <AntDesign
                name="plus"
                size={30}
                color="red"
              />
            </TouchableOpacity>
				</View>
          </View>
        </View>
      </View>
    </>
  );
};



export default FullScreen;
