import React from 'react';
import { Text, Image, View, TouchableHighlight } from 'react-native';

import { COLORS, SIZES } from '../../constants';
import { categories } from '../categories';

const Categories = () => {
  const [active, setActive] = React.useState(null);

  return (
    <View style={{ paddingTop: 30 }}>
      <Text style={{ fontSize: SIZES.h1, fontWeight: 'bold', color: COLORS.white }}>Эй,</Text>
      <Text style={{ fontSize: SIZES.h1, color: COLORS.white }}>как жизнь?</Text>

      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}>
        {categories.map((cat, idx) => (
          <View
            style={{
              width: '30%',
              height: 100,
              justifyContent: 'center',
              marginBottom: 15,
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
                <Image source={{ uri: cat.image }} style={{ width: 40, height: 40 }} />
                <Text
                  style={{
                    fontSize: SIZES.h4,
                    color: COLORS.white,
                    marginTop: 10,
                    textAlign: 'center',
                  }}>
                  {cat.name}
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Categories;
