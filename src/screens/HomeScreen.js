import { View, StyleSheet, Text, ScrollView } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import BurgerBlock from '../components/BurgerBlock';

import burger from '../burgers.json';

import HistoryScreen from '../components/HistoryScreen';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <Header />
        <HistoryScreen />
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Популярное
        </Text>
        <ScrollView style={{ height: '79%' }} showsVerticalScrollIndicator={false}>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 20 }}>
            {burger.map((obj) => (
              <BurgerBlock
                key={obj.id}
                {...obj}
                onPress={() => navigation.navigate('FullScreen', { ...obj })}
              />
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
