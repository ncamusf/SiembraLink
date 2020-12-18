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
import {nuevoPerfil} from './Data/PerfilData'

const ProfileScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.userInfoSection}>
          <View style={{flexDirection: 'row', marginTop: 15}}>
            <Avatar.Image 
              source={{
                uri: nuevoPerfil.foto,
              }}
              size={120}
            />
            <View style={{marginLeft: 20, marginTop: 20}}>
              <Title style={[styles.title, {
                marginTop:15,
                marginBottom: 5,
              }]}> {nuevoPerfil.nombre_completo}</Title>
              <Caption style={styles.caption}>{nuevoPerfil.usuario}</Caption>
            </View>
          </View>
        </View>

        <View>
          <Title style={{marginLeft: 20}}>Sobre Mi</Title>
          <Text style={{marginLeft: 20,marginBottom:10,marginRight: 20,textAlign: 'justify'}}>
          {nuevoPerfil.descripcion}
          </Text>
        </View>
        
        <View style={styles.infoBoxWrapper}>
            <View style={[styles.infoBox, {
              borderRightColor: '#dddddd',
              borderRightWidth: 1
            }]}>
              <Title>{nuevoPerfil.valoracion}</Title>
              <Caption>Valoracion</Caption>
            </View>
            <View style={styles.infoBox}>
          <Title>{nuevoPerfil.numeroTrabajos}</Title>
              <Caption>Trabajos</Caption>
            </View>
        </View>
        <View style={styles.infoBoxWrapper}>
            <View style={[styles.infoBox2, {
              borderRightColor: '#dddddd',
              borderRightWidth: 1
            }]} onPress={() => {}}>
                <Title>${nuevoPerfil.gananciaMensual}</Title>
                <Caption>Ganancia Mensual</Caption>
              </View>
        </View>
        <View style={styles.userInfoSection2}>
          <View style={styles.row}>
            <Icon name="map-marker-radius" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>{nuevoPerfil.ciudad}, {nuevoPerfil.pais}</Text>
          </View>
          <View style={styles.row}>
            <Icon name="phone" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>{nuevoPerfil.numeroTelefonico}</Text>
          </View>
          <View style={styles.row}>
            <Icon name="email" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>{nuevoPerfil.mail}</Text>
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
