import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet ,
    Button,
    Platform,
    StatusBar
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import firebase from '../src/utils/firebase';


// <Button title="Cerrar Sesion" onPress={logout} > </Button>

export default function Logout() {

    const logout = () => {
      firebase.auth().signOut();
    }

    return(
        <View style={styles.container}>
        <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View
            style ={styles.header}
            marginTop= {-60}
        >
            <Animatable.Image
                animation="bounceIn"
                duraton="1500"
                source={require('../assets/logo.png')}
                style={styles.logo}
                resizeMode="stretch"
            />
            <Animatable.View
                marginHorizontal={45}
                animation="bounceIn"
                duraton="1500"

            >
            <Text style={styles.text_header}>Usuario Registrado</Text>
            <View marginHorizontal={33}>
            <Text style={styles.text_header}>Exitosamente!</Text>
            </View>
            </Animatable.View>
        </View>
        <Animatable.View
            animation ="fadeInUpBig"
            style ={styles.footer}

        >
            <View marginTop = {30}>
                <Text style={styles.text_footer_bold}> Porfavor confirme su usuario iniciando</Text>
                <View marginHorizontal={5}>
                <Text style={styles.text_footer_bold}>sesión</Text>
                </View>
            </View>


            <View style={styles.button}
            >

                <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={styles.signIn}
                    marginTop= {-10}
                >
                    <TouchableOpacity
                        //onPress={()=> navigation.navigate('SplashScreen')}
                        onPress={logout}
                    >
                    <Text style={[styles.textSign, {
                        color:'#fff',
                    }]}>Proceda a iniciar sesión</Text>
                    </TouchableOpacity>
                </LinearGradient>

            </View>

            <View style={styles.textPrivate}
                        marginTop={13}
                >
                    <Text style={styles.color_textPrivate}>
                    By registering, you confirm that you accept our{' '}
                    </Text>
                    <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
                    <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
                        Terms of service
                    </Text>
                    </TouchableOpacity>
                    <Text style={styles.color_textPrivate}> and </Text>
                    <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
                    Privacy Policy
                    </Text>
                </View>


        </Animatable.View>
    </View>
    )

  }


  const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1CDFC1'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    //Footer fué modificado para esta pestaña "RegisterScreen"
    footer: {
        flex: 0.5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    text_footer_bold: {
        color: '#05375a',
        fontSize: 18,
        fontWeight: 'bold'
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    color_textPrivate: {
      fontSize: 13,
      fontWeight: '400',
      //fontFamily: 'Lato-Regular', //tipografia distinta
      color: 'grey',
    },
    textPrivate: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginVertical: 35,
      justifyContent: 'center',
    },
    logo: {
        width: height_logo,
        height: height_logo,
        marginHorizontal: 60
    }
  });