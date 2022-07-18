import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import Categories from './src/components/Categories';
import Popular from './src/components/Popular';
import { COLORS } from './constants';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <AppNavigator style={styles.container}>
      
    </AppNavigator>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    padding: 24,
    paddingBottom: 100,
    backgroundColor: COLORS.black,
  },
});
