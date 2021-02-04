import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Platform, TouchableNativeFeedback } from "react-native";
import Colors from "../constants/Color";
import PopUpMenu from './PopUpMenu';
import {Ionicons} from '@expo/vector-icons';


let TouchableNativeOpacity = TouchableOpacity;

if(Platform.OS === 'android' && Platform.Version >= 21){
  TouchableNativeOpacity = TouchableNativeFeedback
}

const Header = (props) => {
  return (
    <View style={styles.container}>
      <View style={{ marginLeft: 15 }}>
        <Text style={styles.mainText}>WhatsApp</Text>
      </View>
      <View style={styles.rightHeader}>
        <Ionicons name="md-search" size={24} color={Colors.secondary} />

        <TouchableNativeOpacity>
        <View >
        <PopUpMenu/>
        </View>
        </TouchableNativeOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: "12%",
    width: "100%",
    backgroundColor: Colors.primary,
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingVertical: 14,
  },
  rightHeader: {
    flexDirection: "row",
    justifyContent: 'space-between',
    width: '20%',
    margin: 3,
  },
  mainText: {
    color: Colors.secondary,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Header;
