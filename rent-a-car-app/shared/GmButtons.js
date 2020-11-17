import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { globalstyles } from '../style/global';

export default function GmailButton({ text, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={globalstyles.button} backgroundColor="white" >
                <MaterialCommunityIcons name="gmail" style={globalstyles.gmailIcon}></MaterialCommunityIcons>
                <Text style={globalstyles.gmbuttonText} backgroundColor="black">{text}</Text>
            </View>
        </TouchableOpacity>
    )
};
