import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {
  SimpleLineIcons,
  MaterialCommunityIcons,
  MaterialIcons,
  Feather,
  FontAwesome5,
  Octicons,
  FontAwesome,
  Entypo,
} from "@expo/vector-icons";
import {RFPercentage} from 'react-native-responsive-fontsize';
import * as firebase from 'firebase';

const Settings = (props) => {

const logout = () => {
  firebase.auth().signOut();
  props.navigation.navigate('login');
  console.log("pressed");
}

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ margin: 20, paddingBottom: 20 }}
      >
        <View
          style={[
            styles.rows,
            { borderBottomColor: "#ccc", borderBottomWidth: 0.5 },
          ]}
        >
          <FontAwesome name="search" size={24} color="#fff" />
          <View style={{ width: "80%", padding: 10, marginLeft: 10 }}>
            <TextInput
              placeholder="Search"
              placeholderTextColor="#888"
              style={{ fontSize: 19 }}
            />
          </View>
        </View>
        <TouchableOpacity onPress={() => props.navigation.navigate("follow")}>
          <View style={styles.rows}>
            <SimpleLineIcons name="user-follow" size={28} color="#fff" />
            <Text style={styles.text}> Follow and Invite Friends</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => props.navigation.navigate('notifications')}>
          <View style={styles.rows}>
            <Feather name="bell" size={28} color="#fff" />
            <Text style={styles.text}> Notifications </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => props.navigation.navigate('privacy')}>
          <View style={styles.rows}>
            <SimpleLineIcons name="lock" size={28} color="#fff" />
            <Text style={styles.text}> Privacy </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => props.navigation.navigate('security')}>
          <View style={styles.rows}>
            <MaterialCommunityIcons name="security" size={28} color="#fff" />
            <Text style={styles.text}> Security </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => props.navigation.navigate('account')}>
          <View style={styles.rows}>
            <MaterialIcons name="account-circle" size={28} color="#fff" />
            <Text style={styles.text}> Account </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => props.navigation.navigate('help')}>
          <View style={styles.rows}>
            <Feather name="help-circle" size={28} color="#fff" />
            <Text style={styles.text}> Help </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => props.navigation.navigate('about')}>
          <View style={styles.rows}>
            <Octicons name="stop" size={28} color="#fff" />
            <Text style={styles.text}> About </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => props.navigation.navigate('theme')}>
          <View style={styles.rows}>
            <FontAwesome5 name="brush" size={28} color="#fff" />
            <Text style={styles.text}> Theme </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress = {logout}>
          <View style={styles.rows}>
            <Entypo name="log-out" size={28} color="#03b1fc" />
            <Text style={[styles.text, { color: "#03b1fc"}]}>Log Out </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  rows: {
    flexDirection: "row",
    marginLeft: 5,
    marginVertical: 19,
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: RFPercentage(3),
    marginLeft: 10,
  },
});

export default Settings;
