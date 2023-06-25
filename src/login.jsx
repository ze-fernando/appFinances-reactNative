import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from "@expo/vector-icons";
import { Picker } from '@react-native-picker/picker';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
  KeyboardAvoidingView,
  Button,
  Image,
} from 'react-native';
import Logo from '../assets/Logo.png'
import Main from './index'
import * as LocalAuthentication from 'expo-local-authentication';



export default Login = () =>{


    const [isLog, setIsLog] = useState(false)

    async function verifyAuth(){
        const compaible = await LocalAuthentication.hasHardwareAsync()
        const type = await LocalAuthentication.supportedAuthenticationTypesAsync()
    }
    
    async function isBiometricEnrolled(){
        const isBiometric = await LocalAuthentication.isEnrolledAsync()

    
        const auth = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Insira sua biometria',
            fallbackLabel: 'Biometria não reconhecida'
        });

        setIsLog(auth.success)

    }
    

    if (isLog === false){
        isBiometricEnrolled();
        return(
            <View style={styles.container}>
                <View></View>
                <Image
                style={{width: 250, height: 250}}
                source={Logo}
                />

                <TouchableOpacity style={styles.button} onPress={isBiometricEnrolled}>
                    <Text style={{color: '#22262b'}}>Entrar</Text>
                </TouchableOpacity>
            </View>
        )

    }

    else{
        return(
            <Main />
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        backgroundColor: '#040d25',
        height: 1018,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#FFF',
        padding: 25,
        width: 400,
        marginVertical: 30,
        borderRadius: 105,
      },
      
})