import React from 'react';
import { Text, Image, View, TouchableHighlight } from 'react-native';

import { COLORS, SIZES } from '../../constants';
import { popular } from '../popular';

const Popular = () => {
  const [active, setActive] = React.useState(null);

  return (
    <View style={{ paddingTop: 2 }}>
      <Text style={{ fontSize: SIZES.h1, fontWeight: 'bold', color: COLORS.white }}>Популярное</Text>

      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}>
        {popular.map((product, idx) => (
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
                backgroundColor: COLORS.gray,
              }}>
              <View style={{ alignItems: 'center' }}>
                <Image source={{ uri: product.image }} style={{ width: 30, height: 30 }} />
                <Text
                  style={{
                    fontSize: SIZES.h5,
                    color: COLORS.white,
                    marginTop: 5,
                    textAlign: 'center',
                  }}>
                  {product.name}
                </Text>
                <Text
                  style={{
                    fontSize: SIZES.h4,
                    color: COLORS.primary,
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

export default Popular;
