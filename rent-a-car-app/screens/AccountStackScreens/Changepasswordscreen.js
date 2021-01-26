import React from 'react';
import { Text, StyleSheet, View, LayoutAnimation, TextInput, Button } from 'react-native';
import Card from '../../shared/Card';


export default class Edit extends React.Component {
    render() {
        LayoutAnimation.easeInEaseOut();
        return (
            <View style={styles.container}>
                <Card style={styles.cardSection}>
                    <View style = {styles.containerView}>
                        <TextInput style={styles.input} placeholder="Enter your current password" />
                        <TextInput style={styles.input} placeholder="Enter your new password" />
                        <View style={styles.buttonView}>
                            <Button title="Save Changes" color="#03c4ff" />
                        </View>
                    </View>
                </Card>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        margin: 30
    },
    input: {
        width: 250,
        padding: 10,
        borderBottomColor: "#03c4ff",
        borderBottomWidth: 1,
        marginVertical: 20,
        fontSize: 17
    },
    cardSection: {
        padding: 20
    },
    buttonView: {
        width: 120,
    },
    containerView:{
        alignItems: 'center'
    }

})