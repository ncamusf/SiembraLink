import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MainTabScreen from './screens/Main_Tab_Screen.js'

import { DrawerContent} from './screens/DrawerContent.js'


const Drawer = createDrawerNavigator();


export default function navegacion_App() {

  const logout = () => {
    firebase.auth().signOut();
  }
  return(
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
        <Drawer.Screen name="PerfilDrawer" component={MainTabScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
