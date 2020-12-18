import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    Dimensions,
    Image,
    StyleSheet,
    StatusBar,
    Alert,
    Button
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const SplashScreen = ({navigation}) =>{
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Animatable.Image
                    animation={"bounceIn"}
                    delay={1500}
                    source={require("../assets/logo.png")}
                    style={styles.logo}
                    resizeMode='stretch'
                />

            </View>
            <Animatable.View
                style={styles.footer}
                animation = {"fadeInUpBig"}
            >
                <Text style={styles.title}> Bienvenido a SiembraLink! </Text>
                <Text style={styles.text}> Para ser parte, ingresa con tu cuenta! </Text>
                <View style={styles.button}>
                    <TouchableOpacity
                        onPress ={() =>navigation.navigate('SignInScreen')}
                    >
                        <LinearGradient
                            //colors={['#08d4c4', '#01ab9d']}
                            colors={['#DEC77D', '#D3A412']}
                            style={styles.signIn}
                        >
                            <Text style={styles.textSign}> Comenzar </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D7B736'
    //backgroundColor: '#01ab9d'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      //backgroundColor: '#fff',
      //backgroundColor:  '#F8E9D3',
      backgroundColor: '#F8ECDB',

      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:30,
      fontSize: 17,
      marginLeft: 25,


  },
  button: {
      alignItems: 'flex-end',
      marginTop: 60,
      justifyContent: 'center',
      alignItems: 'center',
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 18,
  }
});