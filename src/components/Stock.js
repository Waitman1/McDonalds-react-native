import React from 'react';
import { Text, Image, View, TouchableHighlight } from 'react-native';

import { COLORS, SIZES } from '../../constants';
import { stocks } from '../stocks';

const Stock = () => {
  const [active, setActive] = React.useState(null);

  return (
    <View style={{ paddingTop: 10, alignItems: 'center', marginHorizontal: 20 }}>
      <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#ff4500' }}>Супер акция</Text>

      <View
        style={{
          marginTop: 15,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}>
        {stocks.map((product, idx) => (
          <View
            style={{
              width: '30%',
              height: 100,
              justifyContent: 'center',
              marginBottom: 13,
            }}>
            <TouchableHighlight
              underlayColor={COLORS.secondary}
              onPress={() => setActive(idx)}
              style={{
                height: 100,
                justifyContent: 'center',
                borderRadius: SIZES.radius,
                backgroundColor: '#FFB6C1',
              }}>
              <View style={{ alignItems: 'center' }}>
                <Image source={{ uri: product.image }} style={{ width: 30, height: 30 }} />
                <Text
                  style={{
                    fontSize: SIZES.h5,
                    color: COLORS.black,
                    marginTop: 5,
                    textAlign: 'center',
                  }}>
                  {product.name}
                </Text>
                <Text
                  style={{
                    fontSize: SIZES.h4,
                    color: 'black',
                    marginTop: 5,
                    textAlign: 'center',
                  }}>
                  {product.price}
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Stock;
