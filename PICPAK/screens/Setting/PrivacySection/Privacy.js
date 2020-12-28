import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Switch,
  ScrollView,
} from "react-native";
import { SimpleLineIcons, Fontisto, FontAwesome, Octicons, AntDesign, MaterialCommunityIcons} from "@expo/vector-icons";
import { RFPercentage } from "react-native-responsive-fontsize";

const Privacy = (props) => {
  return (
      <View style={styles.container}>
        <View style={styles.byshareContainer}>
          <View style={styles.byShareWay}>
            <Text style={{ color: "#fff", fontSize: 19 }}>
              Account Privacy{" "}
            </Text>
          </View>
            <View
              style={[styles.byShareWay, { justifyContent: "space-between" }]}
            >
              <View style={{ flexDirection: "row", marginLeft: 10 }}>
                <SimpleLineIcons name="lock" size={28} color="#fff" />
                <Text style={styles.byShareText}> Private Account </Text>
              </View>
              <Switch
                trackColor={{ true: "#03b1fc", false: "#fff" }}
                thumbColor="#03b1fc"
              />
            </View>
    
          <View style={styles.byShareWay}>
            <Text style={{ color: "#fff", fontSize: 19 }}> Connections </Text>
          </View>
          <TouchableOpacity onPress={() => props.navigation.navigate('blockedaccounts')}>
            <View
              style={[styles.byShareWay, { justifyContent: "space-between" }]}
            >
              <View style={{ flexDirection: "row", marginLeft: 10 }}>
              <AntDesign name="closecircleo" size={28} color="#fff" />
                <Text style={styles.byShareText}> Blocked Accounts </Text>
              </View>
            </View>
          </TouchableOpacity>
  
          <TouchableOpacity onPress={() => props.navigation.navigate('followedaccounts')}>
            <View
              style={[styles.byShareWay, { justifyContent: "space-between" }]}
            >
              <View style={{ flexDirection: "row", marginLeft: 10 }}>
              <MaterialCommunityIcons name="account-multiple" size={30} color="#fff" />
                <Text style={styles.byShareText}> Accounts You Follow </Text>
              </View>
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
  byShareWay: {
    flexDirection: "row",
    marginVertical: 20,
  },
  byshareContainer: {
    margin: 20,
  },
  byShareText: {
    color: "#fff",
    fontSize: RFPercentage(3),
    marginLeft: 10,
  },
});

export default Privacy;
