import { StyleSheet } from 'react-native';

import { COLORS } from './constants';
import AppNavigator from './src/navigation/AppNavigator';

import { Provider } from 'react-redux';
import { store } from './src/redux/store';


export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator style={styles.container}></AppNavigator>
    </Provider>
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
