import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BodyText = props => <Text style = {{...styles.bodyText, ...props.style}}>{props.children}</Text>;

const styles = StyleSheet.create({
bodyText:{
    fontFamily: 'open-sans-regular'
}
});

export default BodyText;