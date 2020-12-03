import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import MainTabScreen from './screens/Main_Tab_Screen.js'

import Icon from 'react-native-vector-icons/Ionicons'
import { IconButton } from 'react-native-paper';

import { DrawerContent} from './screens/DrawerContent.js'


const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();


const App = () => {
  return(
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
        <Drawer.Screen name="PerfilDrawer" component={MainTabScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default App;