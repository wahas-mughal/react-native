import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { globalstyles } from '../style/global';

export default function MyButton({ text, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={globalstyles.button} backgroundColor = "#03c4ff">
                <Text style={globalstyles.buttonText} color='black'>{text}</Text>
            </View>
        </TouchableOpacity>
    )
};
