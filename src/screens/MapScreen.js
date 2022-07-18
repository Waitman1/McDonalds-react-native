import * as React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 55.7679987,
          longitude: 37.575644,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider="google">
        <Marker
          coordinate={{
            latitude: 55.8292092,
            longitude: 37.3058277,
          }}
          pinColor="red"></Marker>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
