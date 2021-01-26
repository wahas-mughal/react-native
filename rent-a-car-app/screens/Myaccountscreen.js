import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Card from "../shared/Card";
import {
  EvilIcons,
  SimpleLineIcons,
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import * as firebase from "firebase";

export default function MyAccount({ navigation }) {

  // sign out the current session of the user
  const userSignOut = () => {
    firebase
      .auth()
      .signOut()
      .catch((error) => {
        Alert.alert(error.message);
      })
      .then(() => {
        navigation.navigate("Login");
      });
  };

  return (
    <View style={styles.screen}>
      <ScrollView>
        <View
          style={{
            paddingHorizontal: 10,
            marginVertical: 15,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 20, color: "#03c4ff", fontWeight: "bold" }}>
            Profile
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate({ routeName: "Edit" })}
          >
            <View style={{ flexDirection: "row" }}>
              <Feather name="edit" size={22} />
              <Text style={styles.editProfile}> Edit </Text>
            </View>
          </TouchableOpacity>
        </View>
        <Card style={styles.cardExtended}>
          <View style={styles.boxSetting}>
            <EvilIcons
              name="user"
              size={30}
              color="black"
              style={{ marginTop: 10 }}
            />
            <View style={{ paddingLeft: 25 }}>
              <Text style={{ fontSize: 17 }}>Name </Text>
              <Text style={{ fontSize: 17, color: "gray" }}>Fardin Khan </Text>
            </View>
          </View>
        </Card>
        <Card style={styles.cardExtended}>
          <View style={styles.boxSetting}>
            <FontAwesome5
              name="mobile-alt"
              size={24}
              color="black"
              style={{ marginTop: 10, paddingLeft: 8 }}
            />
            <View style={{ paddingLeft: 31 }}>
              <Text style={{ fontSize: 17 }}>Mobile Number </Text>
              <Text style={{ fontSize: 17, color: "gray" }}>+923310000000</Text>
            </View>
          </View>
        </Card>
        <Card style={styles.cardExtended}>
          <View style={styles.boxSetting}>
            <MaterialCommunityIcons
              name="gmail"
              size={24}
              color="black"
              style={{ paddingTop: 10, paddingLeft: 4 }}
            />
            <View style={{ paddingLeft: 26 }}>
              <Text style={{ fontSize: 17 }}>Email</Text>
              <Text style={{ fontSize: 17, color: "gray" }}>
                m.fkkhan09@gmail.com
              </Text>
            </View>
          </View>
        </Card>
        <Card style={styles.cardExtended}>
          <TouchableOpacity
            onPress={() => navigation.navigate({ routeName: "ChangePassword" })}
          >
            <View style={styles.boxSetting}>
              <EvilIcons name="lock" size={34} color="black" />

              <View style={{ paddingLeft: 20, fontWeight: "bold" }}>
                <Text style={{ fontSize: 17 }}>Change Password</Text>
              </View>
            </View>
          </TouchableOpacity>
        </Card>

        <Card style={styles.cardExtended}>
          <TouchableOpacity
            onPress={() => navigation.navigate({ routeName: "BankDetails" })}
          >
            <View style={styles.boxSetting}>
              <EvilIcons name="lock" size={34} color="black" />

              <View style={{ paddingLeft: 20, fontWeight: "bold" }}>
                <Text style={{ fontSize: 17 }}>Add/Remove Debit Card</Text>
              </View>
            </View>
          </TouchableOpacity>
        </Card>

        <View style={{ paddingTop: 20 }}>
          <Text
            style={{ width: "100%", borderColor: "#ccc", borderTopWidth: 1 }}
          ></Text>
        </View>
        <View style={{ paddingLeft: 10, paddingTop: 10 }}>
          <Text style={{ fontSize: 20, color: "#03c4ff", fontWeight: "bold" }}>
            General
          </Text>
        </View>

        <Card style={styles.cardExtended}>
          <TouchableOpacity onPress={userSignOut}>
            <View style={styles.boxSetting}>
              <SimpleLineIcons
                name="logout"
                size={24}
                color="black"
                style={{ marginTop: 10, paddingLeft: 6 }}
              />
              <View
                style={{ paddingLeft: 32, paddingTop: 10, fontWeight: "bold" }}
              >
                <Text style={{ fontSize: 17 }}>Sign Out</Text>
              </View>
            </View>
          </TouchableOpacity>
        </Card>
        <View style={styles.footerSetting}>
          <Text>Terms and Conditions</Text>
          <View style={{ flexDirection: "row", paddingTop: 10 }}>
            <AntDesign name="copyright" size={18} color="black" />
            <Text style={{ paddingLeft: 10 }}>Copy rights 2020</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    marginTop: 5,
  },
  Header1: {
    width: "100%",
    height: 80,
    backgroundColor: "#03c4ff",
    alignItems: "center",
    justifyContent: "center",
  },
  boxSetting: {
    flexDirection: "row",
  },
  footerSetting: {
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  editProfile: {
    fontSize: 16,
  },
  cardExtended: {
    elevation: 1,
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 25,
    backgroundColor: "whitesmoke",
  },
});
