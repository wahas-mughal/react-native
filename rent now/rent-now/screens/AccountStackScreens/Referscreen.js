import React from 'react';
import { Text, StyleSheet, View, LayoutAnimation, TouchableOpacity } from 'react-native';
import Card from '../../shared/Card';


export default class Refer extends React.Component {
    render() {
        LayoutAnimation.easeInEaseOut();
        return (
            <View style={styles.container}>
                <Card style = {{padding: 20}}>
                    <Text>When someone signs up with link you have shared. You both will receive 20% discount. Referrals will get 20% discount on first booking and you will get it on the next! </Text>
                    <TouchableOpacity style = {styles.link}>
                        <Text style = {{color: "#fff"}}> Copy the link </Text>
                    </TouchableOpacity>
                </Card>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        margin: 20,
        marginTop: 30
    },
    link:{
        backgroundColor: '#03c4ff',
        width: 100,
        height: 30,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    }
})