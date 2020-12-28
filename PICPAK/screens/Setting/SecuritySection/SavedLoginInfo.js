import React from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';

const SavedLoginInfo = () => {
    return(
        <View style = {styles.container}>
            <View style = {{margin: 20}}>
            <View style = {{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 15}}>
            <Text style= {styles.mainText}>Save Login Info </Text>
            <Switch
                trackColor={{ true: "#03b1fc", false: "#fff" }}
                thumbColor="#03b1fc"
              />
            </View>
            <Text style = {styles.text}>Your login information will be saved, everytime you open the app, login will not be required on this device. </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
container:{
    backgroundColor: 'black',
    flex:1
},
mainText:{
    fontSize: RFPercentage(2.8),
    fontWeight: '700',
    color: '#fff'
},
text:{
    fontSize: RFPercentage(2.2),
    marginBottom: 15,
    color: '#fff'
}
});

export default SavedLoginInfo;