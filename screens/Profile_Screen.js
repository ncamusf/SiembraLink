import React from 'react';
import { View,SafeAreaView,StyleSheet,ScrollView,Button} from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.userInfoSection}>
          <View style={{flexDirection: 'row', marginTop: 15}}>
            <Avatar.Image 
              source={{
                uri: 'https://cdn-pro.elsalvador.com/wp-content/uploads/2018/04/agricultura.jpg',
              }}
              size={120}
            />
            <View style={{marginLeft: 20, marginTop: 20}}>
              <Title style={[styles.title, {
                marginTop:15,
                marginBottom: 5,
              }]}>Antonio Ramirez</Title>
              <Caption style={styles.caption}>@Aramirez</Caption>
            </View>
          </View>
        </View>

        <View>
          <Title style={{marginLeft: 20}}>Sobre Mi</Title>
          <Text style={{marginLeft: 20,marginBottom:10,marginRight: 20,textAlign: 'justify'}}>He trabajado por 5 años en diferentes fundos, principalmente tengo como preferencia la recoleccion de cerezas, aun asi me siento capacitado para trabajar en cualquier tipo de cultivo.
            Siempre estoy dispuesto a aprender cosas nuevas, es mas, en estos momentos estoy ahorrando, ya que me gustaria estudiar ingenieria agronoma. Espero puedan considerarme para trabajar.
          </Text>
        </View>
        
        <View style={styles.infoBoxWrapper}>
            <View style={[styles.infoBox, {
              borderRightColor: '#dddddd',
              borderRightWidth: 1
            }]}>
              <Title>4.6</Title>
              <Caption>Valoracion</Caption>
            </View>
            <View style={styles.infoBox}>
              <Title>2</Title>
              <Caption>Trabajos</Caption>
            </View>
        </View>
        <View style={styles.infoBoxWrapper}>
            <View style={[styles.infoBox2, {
              borderRightColor: '#dddddd',
              borderRightWidth: 1
            }]} onPress={() => {}}>
                <Title>$631.000</Title>
                <Caption>Ganancia Mensual</Caption>
              </View>
        </View>
        <View style={styles.userInfoSection2}>
          <View style={styles.row}>
            <Icon name="map-marker-radius" color="#777777" size={20}/>
            <Text style={{color:"#777777", marginLeft: 20}}>Chiloe, Chile</Text>
          </View>
          <View style={styles.row}>
            <Icon name="phone" color="#777777" size={20}/>
            <Text style={{color:"#777777", marginLeft: 20}}>+56 988476036</Text>
          </View>
          <View style={styles.row}>
            <Icon name="email" color="#777777" size={20}/>
            <Text style={{color:"#777777", marginLeft: 20}}>Aramirez@gmail.com</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  userInfoSection2: {
    paddingHorizontal: 30,
    marginTop: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoBox2: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});
