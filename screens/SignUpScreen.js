import React, {useEffect, useState} from 'react';

//import firebase from '..src/utils/firebase';
import {validateEmail} from '../src/utils/validations';
//import {validateEmail} from '../src/utils/validations';
import firebase from '../src/utils/firebase';

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

import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
//import { firebase } from 'fire';

const SignInScreen = ({navigation}) =>{

    const [formData, setFormData] = useState({
        email:"",
        password:"",
        repeatpassword:"",
    })

    const [formError, setFormError] = useState({});

// ESTA ES LA FUNCION *****
    const register = () => {

        const logout = () => {
            firebase.auth().signOut();
          }
        /* guardamos los errores de manera temporal antes de actualizar el estado */
        let errors = {};
        /* si alguno de las respuestas del formulario estan vacias (null, o false)*/
        if(!formData.email || !formData.password|| !formData.repeatpassword){
          if(!formData.email) errors.email = true;
          if(!formData.password) errors.password = true;
          if(!formData.repeatpassword) errors.repeatpassword = true;
        } else if(!validateEmail(formData.email)){
            errors.email = true;
        } else if (formData.password !== formData.repeatpassword){
            errors.password = true;
            errors.repeatpassword = true;
        } else if (formData.password.length <6){
            errors.password = true;
            errors.repeatpassword = true;
        } else{

//ACAYA SEVALIDARON LOS DATOS
            firebase
        .auth()
        .createUserWithEmailAndPassword(formData.email, formData.password)
        .then(()=> {
          console.log("Cuenta creada")
        }).catch(() =>{ //esta sirve para el caso de que encuentre un error
          setFormError({
            email: true,
            password: true,
            repeatpassword: true,
          });
        });

    }



        setFormError(errors);
        console.log(errors)
      };




    const [data, setData] = React.useState({
        email: '',
        password: '',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
        //isValidUser: true,
        //isValidPassword: true,
    });

    const textInputChange = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                //isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                //isValidUser: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }



    return (
        <View style={styles.container}>
            <View style = {styles.header}>
                <Text style = {[styles.text_header, {marginLeft:70}]}>¡Regístrate ahora!</Text>
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
                        //color="#940c0c"
                        style={[styles.color_origin, formError.email && styles.error]}
                        size={20}
//ACA ES
                    />
                    <TextInput
                        placeholder="Tu correo electronico"
                        keyboardType="email-address"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val)=> textInputChange(val)}
                        onChange={(e)=> setFormData({...formData, email: e.nativeEvent.text})}
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
                        placeholder="Tu contraseña    "
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val)=> handlePasswordChange(val)}
                        onChange={(e)=> setFormData({...formData, password: e.nativeEvent.text})}
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

                <Text style = {[styles.text_footer],{marginTop:35, fontSize:18}}> Confirmar Contraseña         </Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="lock"
                        //color="#05375a"
                        style={[styles.color_origin, formError.repeatpassword && styles.error]}
                        size={20}
                    />
                    <TextInput
                        placeholder="Conf. contraseña"
                        secureTextEntry={data.confirm_secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val)=> handleConfirmPasswordChange(val)}
                        onChange={(e)=> setFormData({...formData, repeatpassword: e.nativeEvent.text})}
                    />
                    <TouchableOpacity
                        onPress={updateConfirmSecureTextEntry}
                    >
                        {data.confirm_secureTextEntry ?
                        <Feather
                            style={styles.icono4}
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

                <View style={styles.textPrivate}
                        marginTop={30}
                >
                    <Text style={styles.color_textPrivate}>
                    Al registrarse, confirma que acepta nuestros{' '}
                    </Text>
                    <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
                    <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
                        Terminos de servicio
                    </Text>
                    </TouchableOpacity>
                    <Text style={styles.color_textPrivate}> y </Text>
                    <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
                    Politica de privacidad
                    </Text>

                </View>

{/*BOTON DE SING UP*/}
                <View style = {[styles.button, styles.extra]}>
                    <TouchableOpacity
                        onPress={register}
                        style = {styles.buttonn}
                    >
                        <LinearGradient
                            //colors={['#08d4c4', '#01ab9d']}
                            colors={['#DEC77D', '#D3A412']}
                            style={styles.signIn}
                        >
                            <Text style={[styles.textSign, {
                                color:'#fff',
                            }]}> Registrarse </Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={() => navigation.navigate('SignInScreen')}
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
                    }]}>Volver</Text>
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
      backgroundColor: '#D7B736'
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
    buttonn: {
        alignItems: 'center',
        marginTop: 50,
        width: '100%',
        height: 50,

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
    icono4:{
        marginTop: 5,
        paddingLeft: 203,

    },
    error: {
        color:'#940c0c',

    },
    color_origin: {
        color:"#05375a",
    },

    color_lock: {
        color:"green",
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
      extra: {
        marginTop:-50,
      }


  });
