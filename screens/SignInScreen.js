import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Dimensions,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert,
    Button
} from 'react-native';

import {validateEmail} from '../src/utils/validations';
import firebase from '../src/utils/firebase';

import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const SignInScreen = ({navigation}) =>{

    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });



    const textInputChange = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,

            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,

            });
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }
// ESTA ESLA CONFICIONAL PARA VERIFICAR LOS DATOS
    const login = () => {


        //console.log("Holaa");
        //console.log(formData);
        let errors = {};
      if(!formData.email || !formData.password){
        if(!formData.email) errors.email = true;
        if(!formData.password) errors.password = true;
        console.log("ERROR 1")
      } else if(!validateEmail(formData.email)){
        errors.email = true;
        console.log("ERROR 2")
      }else{
//ESTA LINEA ES DONDE YA ESTAN VERIFICADOS
        firebase.auth().signInWithEmailAndPassword(formData.email, formData.password)
        .catch(() => {
          setFormError({
            email: true,
            password: true,
          })
        });
      }

      setFormError(errors);
    };


    const onChange= (e, type) => {
        setFormData({...formData, [type]: e.nativeEvent.text});
    }

    const [formData, setFormData] = useState({
        email:"",
        password:"",
    });

    const [formError, setFormError] = useState({});

    return (
        <View style={styles.container}>
            <View style = {[styles.header, {marginLeft: 35}]}>
                <Text style = {styles.text_header}>¡Ingresa con tus datos!</Text>
            </View>
            <Animatable.View
                style = {styles.footer}
                animation="fadeInUpBig"
            >
                <Text style = {styles.text_footer}>Correo electrónico</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        //color="#05375a"
                        style={[styles.color_origin, formError.email && styles.error]}
                        size={20}
                    />
                    <TextInput
                        placeholder="Tu correo electronico"
                        keyboardType="email-address"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val)=> textInputChange(val)}
                        onChange= {(e) => onChange(e, 'email')}
                    />
                    {data.check_textInputChange ?
                    <Animatable.View
                        animation="bounceIn"
                    >

                        {/*<Feather
                            style={styles.icono1}
                            name="check-circle"
                            color="green"
                            size={20}
                        />*/}
                    </Animatable.View>
                    :null}
                </View>
                <Text style = {[styles.text_footer],{marginTop:35, fontSize:18}}> Contraseña </Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="lock"
                        //color="#05375a"
                        style={[styles.color_origin, formError.password && styles.error]}
                        size={20}
                    />
                    <TextInput
                        placeholder="Tu contraseña     "
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val)=> handlePasswordChange(val)}
                        onChange= {(e) => onChange(e, 'password')}
                    />
                    <TouchableOpacity
                        onPress={updateSecureTextEntry}
                    >
                        {data.secureTextEntry ?
                        <Feather
                            style={styles.icono2}
                            name="eye-off"
                            color="grey"
                            size={20}
                        />
                        :
                        <Feather
                            style={styles.icono3}
                            name="eye"
                            color="grey"
                            size={20}
                        />
                        }
                    </TouchableOpacity>
                </View>
                <View style = {styles.button}>
                    <TouchableOpacity
                        onPress={login}
                        style = {styles.buttonn}
                    >
                        <LinearGradient
                            //colors={['#08d4c4', '#01ab9d']}
                            colors={['#DEC77D', '#D3A412']}
                            style={styles.signIn}
                        >
                            <Text style={[styles.textSign, {
                                color:'#fff',
                            }]}> Iniciar Sesión </Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={() => navigation.navigate('SignUpScreen')}
                    style={[styles.signIn, {
                        //borderColor: '#009387',
                        borderColor: '#D3A412',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        //color: '#009387'
                        color: '#D3A412'
                    }]}>Registrarse</Text>
                </TouchableOpacity>
                </View>
            </Animatable.View>

        </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor: '#009387',
      backgroundColor: '#D7B736',
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        //backgroundColor: '#fff',
        //backgroundColor:  '#F8E9D3',
        backgroundColor: '#F8ECDB',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
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
        marginTop: -5,
        paddingLeft: 25,
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
    icono1:{
        marginTop: 5,
        paddingLeft: 260,
    },
    icono2:{
        marginTop: 5,
        paddingLeft: 185,
    },
    icono3:{
        marginTop: 5,
        paddingLeft: 223,

    },
    buttonn: {
        alignItems: 'center',
        marginTop: 50,
        width: '100%',
        height: 50,

    },
    error: {
        color:'#940c0c',

    },
    color_origin: {
        color:"#05375a",
    },
  });
