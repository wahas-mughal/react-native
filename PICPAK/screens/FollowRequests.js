import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Image, Dimensions } from "react-native";
import { Button, Text, Icon } from "native-base";
import { RFPercentage } from "react-native-responsive-fontsize";
import { SimpleLineIcons } from '@expo/vector-icons';

const FollowRequests = (props) => {
  const [accepted, setAccepted] = useState(null);

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={{ margin: 30 }}>
          <View style = {{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <SimpleLineIcons name="user-follow" size={28} color="orange" />
          <Text
            style={[
              styles.mainText,
              {
                marginVertical: 15,
                textAlign: "center",
                color: "orange",
                fontSize: RFPercentage(2.8),
                marginLeft: 10,
                fontWeight: "bold",
              },
            ]}
          >
            New Follow Requests
          </Text>
          </View>
          <View style={{ marginVertical: 15 }}>
            <Button
              iconLeft
              light
              style={{ borderRadius: 50, backgroundColor: "orange" }}
              onPress = {() => props.navigation.goBack()}
            >
              <Icon name="arrow-back" style={{ color: "#fff" }} />
              <Text style={{ color: "#fff" }}>Back</Text>
            </Button>
          </View>
          <View style={styles.innerContainer}>
            <Image
              source={{
                uri:
                  "https://www.goodmorningimagesdownload.com/wp-content/uploads/2019/10/Boys-Girls-Profile-Whatsapp-DP-14-1.jpg",
              }}
              style={styles.image}
            />
            <Text style={styles.mainText}> Sheraz sent you a request.</Text>
          </View>
          {accepted ? (
            <View
              style={[
                styles.innerContainer,
                {
                  marginVertical: 10,
                  borderBottomColor: 1,
                  borderBottomColor: "#ccc",
                  borderBottomWidth: 1,
                  paddingBottom: 15,
                  justifyContent: 'flex-end'
                },
              ]}
            >
              <Button
                block
                style={{
                  backgroundColor: "orange",
                  borderWidth: 1,
                  borderColor: "orange",
                  borderRadius: 12,
                  height: 35,
                }}
              >
                <Text style={{color: '#fff'}}>Follow</Text>
              </Button>
            </View>
          ) : (
            <View
              style={[
                styles.innerContainer,
                {
                  marginVertical: 15,
                  borderBottomColor: 1,
                  borderBottomColor: "#ccc",
                  borderBottomWidth: 1,
                  paddingBottom: 15,
                },
              ]}
            >
              <Button
                block
                style={{
                  backgroundColor: "#fff",
                  borderWidth: 1,
                  borderColor: "#888",
                  borderRadius: 12,
                  height: 35,
                }}
              >
                <Text style={styles.text}>Cancel</Text>
              </Button>
              <Button
                block
                style={{
                  marginLeft: 20,
                  backgroundColor: "orange",
                  borderWidth: 1,
                  borderColor: "orange",
                  borderRadius: 12,
                  height: 35,
                }}
                onPress={() => setAccepted(true)}
              >
                <Text style={[styles.text, {color: '#fff'}]}>Accept</Text>
              </Button>
            </View>
          )}

          <View style={styles.innerContainer}>
            <Image
              source={{
                uri:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5gMoz1vKJ3c1xk_ki8R4Ecu4lRWXIXT_HHQ&usqp=CAU",
              }}
              style={styles.image}
            />
            <Text style={styles.mainText}> Sheraz sent you a request.</Text>
          </View>

          {accepted ? (
            <View
              style={[
                styles.innerContainer,
                {
                  marginVertical: 15,
                  borderBottomColor: 1,
                  borderBottomColor: "#ccc",
                  borderBottomWidth: 1,
                  paddingBottom: 15,
                  justifyContent: 'flex-end'
                },
              ]}
            >
              <Button
                block
                style={{
                  backgroundColor: "orange",
                  borderWidth: 1,
                  borderColor: "orange",
                  borderRadius: 12,
                  height: 35,
                }}
              >
                <Text style={{color: '#fff'}}>Follow</Text>
              </Button>
            </View>
          ) : (
            <View
              style={[
                styles.innerContainer,
                {
                  marginVertical: 15,
                  borderBottomColor: 1,
                  borderBottomColor: "#ccc",
                  borderBottomWidth: 1,
                  paddingBottom: 15,
                },
              ]}
            >
              <Button
                block
                style={{
                  backgroundColor: "#fff",
                  borderWidth: 1,
                  borderColor: "#888",
                  borderRadius: 12,
                  height: 35,
                }}
              >
                <Text style={styles.text}>Cancel</Text>
              </Button>
              <Button
                block
                style={{
                  marginLeft: 20,
                  backgroundColor: "orange",
                  borderWidth: 1,
                  borderColor: "orange",
                  borderRadius: 12,
                  height: 35,
                }}
                onPress={() => setAccepted(true)}
              >
                <Text style={[styles.text, {color: '#fff'}]}>Accept</Text>
              </Button>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default FollowRequests;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: 'flex-end',
    width: "100%",
    marginTop: 10,
  },
  image: {
    width: Dimensions.get("window").width / 6,
    height: Dimensions.get("window").width / 6,
    borderRadius: 50,
    borderColor: "orange",
    borderWidth: 2,
  },
  mainText: {
    fontSize: RFPercentage(2.2),
    marginLeft: 10,
  },
  text: {
    color: "#888",
  },
});
