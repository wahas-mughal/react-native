import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const FollowedAccounts = () => {
  const [searchValue, setSearchValue] = useState();

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor="#fff"
          onChangeText={(text) => setSearchValue(text)}
        />
        <ScrollView contentContainerStyle={{ margin: 20 }}>
        <Text style = {styles.mainHeading}>People Who Follow You</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TouchableOpacity>
              <View>
                <Text
                  style={[styles.text, { color: "orange", fontWeight: "bold" }]}
                >
                  DELETE
                </Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={styles.text}> John Lee </Text>
              <Image
                source={{
                  uri:
                    "https://www.imagediamond.com/blog/wp-content/uploads/2019/11/attratve-Boy-DP10.jpg",
                }}
                style={styles.image}
              />
            </View>
          </View>
        </ScrollView>
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
  input: {
    borderColor: "orange",
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    fontSize: 19,
    textAlign: "center",
    color: "#fff",
    backgroundColor: "orange",
  },
  image: {
    width: Dimensions.get('window').width/6,
    height: Dimensions.get('window').width/6,
    borderRadius: 50,
  },
  text: {
    color: "#fff",
    fontSize: RFPercentage(2.8),
    marginRight: 10,
  },
  mainHeading:{
    color: '#fff',
    fontSize: RFPercentage(2.8),
    marginTop: 10,
    marginBottom: 15,
    borderBottomColor: 'orange',
    borderBottomWidth: 0.7,
    paddingBottom: 8
  }
});

export default FollowedAccounts;
