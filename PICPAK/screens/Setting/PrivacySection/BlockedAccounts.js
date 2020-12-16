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

const BlockedAccounts = () => {
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
                  BLOCK
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
              <Text style={styles.text}> Ali Murtaza </Text>
              <Image
                source={{
                  uri:
                    "https://i.pinimg.com/736x/af/a5/0f/afa50f0316595dfe74ab0b1acb3db37a.jpg",
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
});

export default BlockedAccounts;
