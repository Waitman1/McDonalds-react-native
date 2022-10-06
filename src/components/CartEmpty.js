import { View, Text, Image } from 'react-native';
import { SIZES } from '../../constants';

const CartEmpty = () => {
  return (
    <View
      style={{
        backgroundColor: '#F8F8FF',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          backgroundColor: '#E0FFFF',
          height: '50%',
          width: '90%',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: SIZES.radius,
        }}>
        <Image
          source={{
            uri: 'https://cdn.onlinewebfonts.com/svg/download_76755.png',
          }}
          style={{ width: 200, height: 200, marginRight: 50, marginBottom: 40 }}
        />
        <Text style={{ color: 'black', fontSize: 30 }}>Корзина пуста</Text>
      </View>
    </View>
  );
};

export default CartEmpty;
