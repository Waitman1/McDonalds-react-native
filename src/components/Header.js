import React from 'react';
import { Image, Linking, View, TouchableNativeFeedback } from 'react-native';

const Header = () => {
  return (
    <View
      style={{
			flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <TouchableNativeFeedback onPress={() => Linking.openURL('https://www.google.com/')}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/800px-McDonald%27s_Golden_Arches.svg.png',
          }}
          style={{
            width: 51,
            height: 45,
          }}
        />
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={() => Linking.openURL('https://www.google.com/')}>
        <Image
          source={{
            uri: 'https://icon-library.com/images/white-shopping-cart-icon-png/white-shopping-cart-icon-png-17.jpg',
          }}
			 
          style={{
            width: 35,
            height: 35,
          }} 
        />
      </TouchableNativeFeedback>
    </View>
  );
};

export default Header;
