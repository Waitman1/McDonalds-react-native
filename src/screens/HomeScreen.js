import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Categories from '../components/Categories';
import Popular from '../components/Popular';
import { COLORS } from '../../constants';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Categories />
      <Popular />
    </View>
  );
};


const styles = StyleSheet.create({
	container: {
	  paddingTop: 50,
	  padding: 24,
	  paddingBottom: 100,
	  backgroundColor: COLORS.black,
	},
 });

export default HomeScreen;
