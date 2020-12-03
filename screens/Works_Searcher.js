import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {View, Text,SafeAreaView, StyleSheet, Image, Button} from 'react-native';

const WorkSearch = ({navigation}) => {
  return (
    <View style={{flex:1,alignItems:'center', justifyContent:'center'}}>
      <Text>Buscador de trabajos</Text>
    </View>
  );
};

export default WorkSearch;