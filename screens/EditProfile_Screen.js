import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {View, Text,ScrollView,SafeAreaView, StyleSheet, Image, Button, ImageBackground,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {nuevoPerfil} from './Data/PerfilData'
import { TextInput } from 'react-native-paper';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';



const EditProfileScreen = ({navigation}) => {

  const renderContent = () => (
    <View style={{
      backgroundColor: '#F5F4E6',
      padding: 16,
      height: 250,}}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>
      <TouchableOpacity style={styles.panelButton} onPress={() => {}}>
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton} onPress={() => {}}>
        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
    </View>
  );
  const sheetRef = React.useRef(null);


  return (
    <View style={styles.container}>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[250, 250, 0]}
        borderRadius={10}
        renderContent={renderContent}
        initialSnap={0}
      />
      <View  style={{margin: 20}}>
        <View style={{alignItems: 'center'}}>
              <TouchableOpacity onPress={() => sheetRef.current.snapTo(0)}>
                <View
                  style={{
                    height: 100,
                    width: 100,
                    borderRadius: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <ImageBackground
                    source={{
                      uri: nuevoPerfil.foto,
                    }}
                    style={{height: 100, width: 100}}
                    imageStyle={{borderRadius: 15}}>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Icon
                        name="camera"
                        size={35}
                        color="#fff"
                        style={{
                          opacity: 0.7,
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderWidth: 1,
                          borderColor: '#fff',
                          borderRadius: 10,
                        }}
                      />
                    </View>
                  </ImageBackground>
                </View>
              </TouchableOpacity>
                      <Text style={{marginTop: 10,fontSize: 18,fontWeight: 'bold'}}> {nuevoPerfil.nombre_completo}</Text>
            </View>
            <View style={styles.first_action}>
              <FontAwesome name="user-o" size={20} style={{marginTop: 8, marginLeft:10}}/>
              <TextInput
                    placeholder="Nombre"
                    placeholderTextcolor="#666666"
                    autoCorrect={false}
                    style={[styles.textInput,{marginLeft: 17}]}
                />
            </View>
            <View style={styles.action}>
              <FontAwesome name="user-o" size={20} style={{marginTop: 8, marginLeft:10}}/>
              <TextInput
                    placeholder="Apellido"
                    placeholderTextcolor="#666666"
                    autoCorrect={false}
                    style={[styles.textInput,{marginLeft: 16}]}
                />
            </View>
            <View style={styles.action}>
              <Icon name="map-marker-outline" size={20} style={{marginTop: 8, marginLeft:10}}/>
              <TextInput
                    placeholder="Ciudad"
                    placeholderTextcolor="#666666"
                    autoCorrect={false}
                    style={[styles.textInput,{marginLeft: 12}]}
                />
            </View>
            <View style={styles.action}>
              <FontAwesome name="globe" size={20} style={{marginTop: 8, marginLeft:10}}/>
              <TextInput
                    placeholder="Pais"
                    placeholderTextcolor="#666666"
                    autoCorrect={false}
                    style={[styles.textInput,{marginLeft: 15}]}
                />
            </View>
            <View style={styles.action}>
              <FontAwesome name="phone" size={20} style={{marginTop: 8, marginLeft:10}}/>
              <TextInput
                    placeholder="Numero"
                    placeholderTextcolor="#666666"
                    autoCorrect={false}
                    style={[styles.textInput,{marginLeft: 15}]}
                />
            </View>
            <View style={styles.action}>
              <FontAwesome name="envelope-o" size={20} style={{marginTop: 8, marginLeft:10}}/>
              <TextInput
                    placeholder="Mail"
                    placeholderTextcolor="#666666"
                    autoCorrect={false}
                    style={[styles.textInput,{marginLeft: 10}]}
                />
            </View>
            <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
              <Text style={styles.panelButtonTitle}>Submit</Text>
            </TouchableOpacity>
        </View>
      </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#CB9F39',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 40,
    marginRight: 40
  },
  panel: {
    padding: 20,
    backgroundColor: '#F5F4E6',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#CB9F39',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#CB9F39',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 10,
    marginRight:20,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
    height: 40
  },
  first_action: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 10,
    marginRight:20,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
    height: 40
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: '#05375a',
    height: 30
  },
});