import React, { useState } from "react";
import { StyleSheet, View, LayoutAnimation, TextInput } from "react-native";
import Card from "../../shared/Card";
import { Button, Text } from "native-base";
import { useSelector } from "react-redux";
import * as firebase from "firebase";
import "@firebase/firestore";
import { Flow } from "react-native-animated-spinkit";
import {useDispatch} from 'react-redux';
import * as actions from '../../store/actions/auth';

export default function Edit({navigation}) {
  LayoutAnimation.easeInEaseOut();
  const user = useSelector((state) => state.auth.userDetails);
  const [fullname, setFullName] = useState(user.fullname);
  const [mobile, setMobile] = useState(user.mobile);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const updateUserData = async () => {
    try {
      console.log("pressed!");
      setIsLoading(true);
      const { uid, email} = firebase.auth().currentUser;
      const db = firebase.firestore();
      const dataSnapshot = await db.collection("users").doc(uid).update({
        fullname: fullname,
        mobile: mobile,
      });
      dispatch(actions.userProfile(fullname, mobile, email));
      console.log(dataSnapshot);
      navigation.goBack();
    } catch (err) {
      throw err;
    }
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Flow size={40} color="#03c4ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Card style={styles.cardSection}>
        <View style={styles.containerView}>
          <TextInput
            style={styles.input}
            placeholder="Edit your full name"
            onChangeText={(text) => setFullName(text)}
            value={fullname}
          />
          <TextInput
            style={styles.input}
            placeholder="Edit your mobile number"
            onChangeText={(text) => setMobile(text)}
            value={mobile}
          />
          <View style={styles.buttonView}>
            <Button
              block
              style={{ backgroundColor: "#03c4ff" }}
              onPress={updateUserData}
            >
              <Text style={{ fontSize: 16, fontWeight: "bold" }}> Save </Text>
            </Button>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    margin: 30,
  },
  input: {
    width: 250,
    borderBottomColor: "#03c4ff",
    borderBottomWidth: 1,
    marginVertical: 20,
    padding: 10,
    fontSize: 17,
  },
  cardSection: {
    padding: 20,
  },
  buttonView: {
    width: 120,
  },
  containerView: {
    alignItems: "center",
  },
});
