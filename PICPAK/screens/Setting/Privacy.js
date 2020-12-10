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
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.byshareContainer}>
          <View style={styles.byShareWay}>
            <Text style={{ color: "#fff", fontSize: 19 }}>
              Account Privacy{" "}
            </Text>
          </View>
          <TouchableOpacity onPress={() => {}}>
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
          </TouchableOpacity>
          <View style={styles.byShareWay}>
            <Text style={{ color: "#fff", fontSize: 19 }}> Interactions </Text>
          </View>
          <TouchableOpacity onPress={() => {}}>
            <View
              style={[styles.byShareWay, { justifyContent: "space-between" }]}
            >
              <View style={{ flexDirection: "row", marginLeft: 10 }}>
              <Fontisto name="comment" size={28} color="#fff" />
                <Text style={styles.byShareText}> Comments </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View
              style={[styles.byShareWay, { justifyContent: "space-between" }]}
            >
              <View style={{ flexDirection: "row", marginLeft: 10 }}>
              <FontAwesome name="tags" size={28} color="#fff" />
                <Text style={styles.byShareText}> Tags </Text>
              </View>
              <Text style={{ color: "#ccc", fontSize: 17 }}> Everyone </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View
              style={[styles.byShareWay, { justifyContent: "space-between" }]}
            >
              <View style={{ flexDirection: "row", marginLeft: 10 }}>
              <Octicons name="mention" size={28} color="#fff" />
                <Text style={styles.byShareText}> Mentions </Text>
              </View>
              <Text style={{ color: "#ccc", fontSize: 17 }}> Everyone </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.byShareWay}>
            <Text style={{ color: "#fff", fontSize: 19 }}> Connections </Text>
          </View>
          <TouchableOpacity onPress={() => {}}>
            <View
              style={[styles.byShareWay, { justifyContent: "space-between" }]}
            >
              <View style={{ flexDirection: "row", marginLeft: 10 }}>
              <AntDesign name="closecircleo" size={28} color="#fff" />
                <Text style={styles.byShareText}> Blocked Accounts </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View
              style={[styles.byShareWay, { justifyContent: "space-between" }]}
            >
              <View style={{ flexDirection: "row", marginLeft: 10 }}>
                <AntDesign name="exclamationcircleo" size={28} color="#fff" />
                <Text style={styles.byShareText}> Restricted Accounts </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View
              style={[styles.byShareWay, { justifyContent: "space-between" }]}
            >
              <View style={{ flexDirection: "row", marginLeft: 10 }}>
              <FontAwesome name="bell-slash-o" size={28} color="#fff" />
                <Text style={styles.byShareText}> Muted Accounts </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
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
    </ScrollView>
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
