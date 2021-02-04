import * as React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Card(prop) {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {prop.children}
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    card: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 5,
        marginHorizontal: 4,
        marginVertical: 6,
        height: 320,
        
    },
    cardContent: {
        alignItems: "center",      
        marginHorizontal: 18,
        marginVertical: 10,
        marginBottom: 30,
    },
})