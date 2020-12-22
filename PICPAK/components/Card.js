import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const Card = (props) => {
    return(
        <View style = {{...styles.card, ...props.style}}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
card:{
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 3},
    shadowColor: 'black',
    shadowRadius: 6,
    elevation: 2,
    backgroundColor: '#fff',
    padding: 20,
}
});

export default Card;