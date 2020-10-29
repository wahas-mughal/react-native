import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';


const Input = props => {
    return  <TextInput {...props} style = {{...styles.input, ...props.style}}/> 

}

const styles = StyleSheet.create({
    input: {
        height: 30,
        marginVertical: 20,
        borderBottomColor: "black",
        borderBottomWidth: 1
    }

});

export default Input;