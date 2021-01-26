import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { globalstyles } from '../style/global';

export default function MyButton({ text, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={globalstyles.button} backgroundColor = "#fff">
                <Text style={{color: '#03c4ff', fontWeight:'bold', textTransform: 'uppercase', fontSize: 17}}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
};
