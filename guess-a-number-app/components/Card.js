import React from 'react';
import { StyleSheet, View } from 'react-native';


const Card = props => {
    return (
        <View style = {{...styles.card, ...props.style}}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
card:{
    //  These properties don't work on android and only works on iOS
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.26,
    shadowRadius: 6,    
    
    // elevation is used to work on android for shadow effect which is pre-configured
    elevation: 8,
    backgroundColor: 'white',
    padding: 20,
   }
});

export default Card;