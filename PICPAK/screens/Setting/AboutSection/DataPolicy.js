import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'

const DataPolicy = () => {
    return (
        <ScrollView style = {styles.container}>
            <View>
                <Text> Data Plociy </Text>
            </View>
        </ScrollView>
    )
}

export default DataPolicy

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'black'
    }
})
