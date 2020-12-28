import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  ScrollView,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { SimpleLineIcons, MaterialIcons, MaterialCommunityIcons} from "@expo/vector-icons";

const FollowersAndFollowing = () => {
  return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.mainHeadings}>
            Your Requests To Follow
          </Text>
          <TouchableOpacity onPress={() => {}}>
            <View
              style={[styles.byShareWay, { justifyContent: "space-between" }]}
            >
              <View style={{ flexDirection: "row", marginLeft: 10 }}>
              <MaterialIcons name="highlight-off" size={28} color="#fff" />
                <Text style={styles.mainText}> Turn Off </Text>
              </View>
              <Switch
                trackColor={{ true: "#03b1fc", false: "#fff" }}
                thumbColor="#03b1fc"
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View
              style={[styles.byShareWay, { justifyContent: "space-between" }]}
            >
              <View style={{ flexDirection: "row", marginLeft: 10 }}>
              <MaterialCommunityIcons name="check-circle-outline" size={28} color="#fff" />
                <Text style={styles.mainText}> Turn On </Text>
              </View>
              <Switch
                trackColor={{ true: "#03b1fc", false: "#fff" }}
                thumbColor="#03b1fc"

              />
            </View>
          </TouchableOpacity>
          <Text
            style={{
              borderBottomColor: "#fff",
              borderBottomWidth: 0.7,
              width: "100%",
            }}
          ></Text>

          <Text style={styles.mainHeadings}>
            Sent Requests Accepted
          </Text>
          <TouchableOpacity onPress={() => {}}>
            <View
              style={[styles.byShareWay, { justifyContent: "space-between" }]}
            >
              <View style={{ flexDirection: "row", marginLeft: 10 }}>
              <MaterialIcons name="highlight-off" size={28} color="#fff" />
                <Text style={styles.mainText}> Turn Off </Text>
              </View>
              <Switch
                trackColor={{ true: "#03b1fc", false: "#fff" }}
                thumbColor="#03b1fc"
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View
              style={[styles.byShareWay, { justifyContent: "space-between" }]}
            >
              <View style={{ flexDirection: "row", marginLeft: 10 }}>
              <MaterialCommunityIcons name="check-circle-outline" size={28} color="#fff" />
                <Text style={styles.mainText}> Turn On </Text>
              </View>
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
  innerContainer: {
    margin: 20,
  },
  mainText: {
    color: "#fff",
    fontSize: RFPercentage(3),
    marginLeft: 10
  },
  byShareWay: {
    flexDirection: "row",
    marginVertical: 20,
  },
  mainHeadings:{
    color: "#fff",
    fontSize: RFPercentage(3.0),
    marginVertical: 10
  }
});

export default FollowersAndFollowing;
