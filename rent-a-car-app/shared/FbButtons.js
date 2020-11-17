import * as React from 'react';
import { View, Text , StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import { globalstyles } from '../style/global';

export default function FbButton({text, onPress}){
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={globalstyles.button}>
                <FontAwesome name="facebook" style={globalstyles.fbIcon}></FontAwesome>
                <Text style={globalstyles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
};
