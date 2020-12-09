import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FinancialState from './FinancialState.js'
import ProfileScreen from './Profile_Screen.js'
import WorkSearch from './Works_Searcher.js'
import MyJobsScreen from './Works_Screens.js'
import EditProfileScreen from './EditProfile_Screen.js'
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const FinancialStack = createStackNavigator();
const PerfilStack = createStackNavigator();
const SearcherStack = createStackNavigator();
const MyJobsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="PerfilScreen"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Profile"
        component={PerfilScreenStack}
        options={{
          tabBarLabel: 'Perfil',
          tabBarColor: '#9EC637',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Finanzas"
        component={FinancialScreenStack}
        options={{
          tabBarLabel: 'Finanzas',
          tabBarColor: '#CBB839',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-cash" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="MyJobs"
        component={MyJobsScreenStack}
        options={{
          tabBarLabel: 'Trabajos',
          tabBarColor: '#CB9F39',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchJobs"
        component={WorkSearcherScreenStack}
        options={{
          tabBarLabel: 'Buscar',
          tabBarColor: '#BA8026',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-aperture" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;

const FinancialScreenStack = ({navigation}) => (
    <FinancialStack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#CBB839',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
        <FinancialStack.Screen name="Home" component={FinancialState} options={{
          title:"Mi Estado Financiero",
          headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#CBB839" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
        }}/>
    </FinancialStack.Navigator>
  );
  
const PerfilScreenStack = ({navigation}) => (
    <PerfilStack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#9EC637',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
    <PerfilStack.Screen name="Profile" component={ProfileScreen} options={{
          title:"Perfil",
          headerLeft: () => (
            <Icon.Button
             name="ios-menu"
             size={25} 
             backgroundColor="#9EC637" 
             onPress={() => navigation.openDrawer()}>
             </Icon.Button>
          ),
          headerRight: () => (
            <MaterialCommunityIcons.Button
             name="account-edit"
             size={25} 
             backgroundColor="#9EC637" 
             onPress={() => navigation.navigate('EditProfile')}>
             </MaterialCommunityIcons.Button>
          ),          
        }}/>
    <PerfilStack.Screen name="EditProfile" component={EditProfileScreen} options={{
          title:"Editar Perfil",  
        }}/>
    </PerfilStack.Navigator>
  );
  
const WorkSearcherScreenStack = ({navigation}) => (
    <SearcherStack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#BA8026',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
    <SearcherStack.Screen name="Works" component={WorkSearch} options={{
          title:"Buscador de Trabajos",
          headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#BA8026" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
        }}/>
    </SearcherStack.Navigator>
  );

const MyJobsScreenStack = ({navigation}) => (
    <MyJobsStack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#CB9F39',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
        <MyJobsStack.Screen name="Home" component={MyJobsScreen} options={{
          title:"Mis Trabajos",
          headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#CB9F39" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
        }}/>
    </MyJobsStack.Navigator>
);