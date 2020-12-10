import React from "react";
import { StyleSheet, Text, View, Switch } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RFPercentage } from "react-native-responsive-fontsize";

const Theme = (props) => {
  return (
    <View style={styles.container}>
      <View style={{ margin: 30 }}>
        <TouchableOpacity>
          <View style = {styles.themeContainer}>
            <Text style={styles.mainText}> Light </Text>
            <Switch
              trackColor={{ true: "#03b1fc", false: "#fff" }}
              thumbColor="#03b1fc"
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style = {styles.themeContainer}>
            <Text style={styles.mainText}> Dark </Text>
            <Switch
              trackColor={{ true: "#03b1fc", false: "#fff" }}
              thumbColor="#03b1fc"
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style = {styles.themeContainer}>
            <Text style={styles.mainText}> Dark with blue </Text>
            <Switch
              trackColor={{ true: "#03b1fc", false: "#fff" }}
              thumbColor="#03b1fc"
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style = {styles.themeContainer}>
            <Text style={styles.mainText}> Dark with pink </Text>
            <Switch
              trackColor={{ true: "#03b1fc", false: "#fff" }}
              thumbColor="#03b1fc"
            />
          </View>
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  mainText: {
    color: "#fff",
    fontSize: RFPercentage(3),
  },
  themeContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 35
  }
});

export default Theme;
