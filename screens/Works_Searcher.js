import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {View, Text,SafeAreaView, StyleSheet, Image, Button, Dimensions} from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

const WorkSearch = ({navigation}) => {
  return (
  <View style={styles.container}>
    <MapView 
    style={styles.map} 
    region={{
      latitude: -33.581150,
      longitude:  -70.801156,
      latitudeDelta: 0.014,
      longitudeDelta: 0.015,
    }}
    >
    
     <Marker
      coordinate={{ latitude : -33.59996464745916 , longitude : -70.78884813887515 }}
      title={"Fundo San Ignacio"}
      description={"Se requieren 2 trabajadores jornada lun-vier de 8:00 a 16:00"}
     />
      <Marker
      coordinate={{ latitude : -33.57751732038726 , longitude : -70.81844857372401 }}
      title={"Fundo EL Descanso"}
      description={"Se requieren 3 operarios tractor jornada lun-vier de 8:00 a 14:00"}
     />
      <Marker
      coordinate={{ latitude : -33.571564 , longitude : -70.786603 }}
      title={"Fundo Padre Hurtado"}
      description={"Se requieren 8 trabajadores jornada lun-vier de 8:00 a 14:00"}
     />
    </MapView>
    
  </View>
  );
};

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

export default WorkSearch;