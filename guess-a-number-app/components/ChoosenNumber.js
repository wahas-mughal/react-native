import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Colors from '../constants/Color';

const ChoosenNumber = props => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.number}> {props.children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
container:{
    borderWidth: 2,
    borderColor: Colors.primary,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
},
number:{
    fontSize: 22,
    color: Colors.accent,
    paddingRight: 5
}
});


export default ChoosenNumber;