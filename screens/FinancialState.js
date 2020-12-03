import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {View, Text, SafeAreaView, StyleSheet, Image, Button} from 'react-native';

const FinancialState = ({navigation}) => {
    return (
      <View style={{flex:1, alignItems:'center', justifyContent:'center' }}>
        <Text>Estado Financiero y proyecciones</Text>
      </View>
    );
};
export default FinancialState;