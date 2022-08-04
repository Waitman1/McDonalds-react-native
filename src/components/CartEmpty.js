import { View, Text } from 'react-native';
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
        <Text style={{ color: 'black', fontSize: 30 }}>Корзина пуста</Text>
        <Text
          style={{
            color: 'black',
            fontSize: 18,
            textAlign: 'center',
            marginTop: 20,
            width: '90%',
          }}>
          Вероятней всего, вы не заказывали еще бургеров. Для того, чтобы заказать бургеры,
          перейдите на главную страницу.
        </Text>
      </View>
    </View>
  );
};

export default CartEmpty;
