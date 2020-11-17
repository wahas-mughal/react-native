import React from 'react';
import {View, Text, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import { globalstyles } from '../../style/global';


    
    
    export default function forgotPassword({navigation}) {
    return(
        <ImageBackground style={globalstyles.container} source={require('../../assets/images/car-rental.jpg')}>
            <View style={globalstyles.header}>
            </View>
            <View style={globalstyles.ForgotContent}>
                <TextInput style={globalstyles.inputBox} placeholder="EMAIL" placeholderTextColor="#fff" />
                <TouchableOpacity>
                    <View style={globalstyles.button}>
                        <Text style={globalstyles.buttonText}>Reset Your Password</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={globalstyles.BackScreen}> Return to Login </Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
    };
    