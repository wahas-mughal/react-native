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
import { SimpleLineIcons, MaterialIcons, FontAwesome} from "@expo/vector-icons";

const PostsAndComments = () => {
  return (
    <ScrollView contentContainerStyle = {{flex:1}}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style = {{flexDirection: 'row', alignItems: 'center'}}>
          <FontAwesome name="heart" size={24} color="orange" />
          <Text style={[styles.mainHeadings, {marginLeft: 10}]}> Likes </Text>
          </View>
            <View
              style={[styles.byShareWay, { justifyContent: "space-between" }]}
            >
              <View style={{ flexDirection: "row", marginLeft: 10, alignItems: 'center' }}>
              <MaterialIcons name="highlight-off" size={28} color="#fff" />
                <Text style={styles.mainText}> Turn Off </Text>
              </View>
              <Switch
                trackColor={{ true: "#03b1fc", false: "#fff" }}
                thumbColor="#03b1fc"
              />
            </View>
            <View
              style={[styles.byShareWay, { justifyContent: "space-between" }]}
            >
              <View style={{ flexDirection: "row", marginLeft: 10, alignItems: 'center' }}>
              <SimpleLineIcons name="like" size={28} color="#fff" />
                <Text style={styles.mainText}> Likes From Followers </Text>
              </View>
              <Switch
                trackColor={{ true: "#03b1fc", false: "#fff" }}
                thumbColor="#03b1fc"
              />
            </View>
            <View
              style={[styles.byShareWay, { justifyContent: "space-between", alignItems: 'center' }]}
            >
              <View style={{ flexDirection: "row", marginLeft: 10 }}>
              <MaterialIcons name="public" size={28} color="#fff" />
                <Text style={styles.mainText}> From Everyone </Text>
              </View>
              <Switch
                trackColor={{ true: "#03b1fc", false: "#fff" }}
                thumbColor="#03b1fc"
              />
            </View>
       
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
    fontSize: RFPercentage(3.2),
    marginVertical: 10
  }
});

export default PostsAndComments;
