import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Switch } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const Notifications = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.byshareContainer}>
          <View style={styles.byShareWay}>
            <Text style={styles.byShareText}> Push Notifications </Text>
          </View>
        <TouchableOpacity onPress={() => {}}>
          <View
            style={[styles.byShareWay, { justifyContent: "space-between" }]}
          >
            <Text style={styles.byShareText}> Pause All </Text>
            <Switch
              trackColor={{ true: "#03b1fc", false: "#fff" }}
              thumbColor="#03b1fc"
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('postsandcomments')}>
          <View style={styles.byShareWay}>
            <Text style={styles.byShareText}> Posts and Comments</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('followersandfollowing')}>
          <View style={styles.byShareWay}>
            <Text style={styles.byShareText}> Followers and Following </Text>
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

export default Notifications;
