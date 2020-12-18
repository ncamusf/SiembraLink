import React, {useEffect, useState} from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet ,
  Button
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import MainTabScreen from './screens/Main_Tab_Screen.js';

import Icon from 'react-native-vector-icons/Ionicons';
import { IconButton } from 'react-native-paper';

import { DrawerContent} from './screens/DrawerContent.js';
import RootStackScreen from './screens/RootStackScreen';

//Firebase
import firebase from './src/utils/firebase';
import 'firebase/auth';

//import {navegacion_App} from './screens/IncialScreen';

import CreateAccountScreen from './screens/CreateAccountScreen';

const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();


const App = () => {

  const [user, setUser] = useState(undefined);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((response) => {
      setUser(response);
    });


  });

  return(

    <NavigationContainer>
    {user ? <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
        <Drawer.Screen name="PerfilDrawer" component={MainTabScreen}/>
  </Drawer.Navigator>: <RootStackScreen> </RootStackScreen>}
    {/*<RootStackScreen> </RootStackScreen>*/}
      {/*<Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
        <Drawer.Screen name="PerfilDrawer" component={MainTabScreen}/>
  </Drawer.Navigator>*/}
    </NavigationContainer>
  );
};

export default App;
