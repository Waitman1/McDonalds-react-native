import { View, StyleSheet, Text, ScrollView,  } from 'react-native';
import React, { useState } from 'react';
import Header from '../components/Header';
import BurgerBlock from '../components/BurgerBlock';

import burger from '../burgers.json';

const HomeScreen = () => {
 

  return (
    <>
      <View style={styles.container}>
        <Header />
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Популярное
        </Text>
        <ScrollView style={{ height: '100%' }} showsVerticalScrollIndicator={false}>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {burger.map((obj) => (
              <BurgerBlock key={obj.id} {...obj} />
            ))}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    padding: 24,
    paddingBottom: 100,
    backgroundColor: '#F8F8FF',
  },
});

export default HomeScreen;
