import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { useSelector } from "react-redux";
import Colors from "../../constants/Color";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome,
  FontAwesome5,
} from "@expo/vector-icons";

const CallsLog = (props) => {
  const callLogList = useSelector((state) => state.main.calls);
  console.log(callLogList);

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {callLogList.map((elements) => (
          <View style={styles.container} key = {elements.callId}>
            <View style={styles.outerView}>
              <View style={styles.imageView}>
                <Image
                  style={styles.image}
                  source={{
                    uri: elements.caller,
                  }}
                  resizeMode="center"
                />
              </View>

              <View style={styles.innerView}>
                <View style={styles.nameTimeView}>
                  <Text style={styles.name}> {elements.callerName} </Text>
                  <View style={{ flexDirection: "row" }}>
                    {elements.callerName === "Arthur" ? (
                      <MaterialIcons
                        name="call-received"
                        size={17}
                        color="red"
                      />
                    ) : (
                      <MaterialIcons
                        name="call-received"
                        size={17}
                        color="#25D366"
                      />
                    )}
                    <Text style={styles.time}> {elements.callTime}</Text>
                  </View>
                </View>
                <View>
                  <MaterialIcons name="call" size={24} color="#075E54" />
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.writeStatus} useForeground>
      <MaterialIcons name="videocam" size={24} color="#075E54" />
      </View>

      <View style={styles.contact} useForeground>
      <MaterialCommunityIcons name="phone-plus" size={24} color={Colors.secondary} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 13,
  },
  outerView: {
    flexDirection: "row",
    alignItems: "center",
    height: 55,
  },
  innerView: {
    width: "82%",
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderBottomColor: "#ccc",
    borderBottomWidth: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 2,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 55,
  },
  imageView: {
    borderRadius: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    overflow: "hidden",
  },
  nameTimeView: {
    flexDirection: "column",
  },
  name: {
    color: "#363232",
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 3,
  },
  message: {
    color: "#888",
    fontSize: 15,
    marginLeft: 5,
  },
  time: {
    color: "#888",
  },
  contact: {
    width: 55,
    height: 55,
    borderRadius: 55,
    backgroundColor: "#25D366",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 285,
    top: 440,
    elevation: 4,
  },
  updateBar: {
    width: "100%",
    padding: 7,
    backgroundColor: "#e8e6e6",
    borderTopColor: "#ccc",
    borderTopWidth: 0.5,
  },
  updateBarText: {
    color: "#696464",
    fontSize: 14,
  },
  overlayContainer: {
    height: 60,
    width: 60,
    borderRadius: 60,
    borderColor: "#b0b0b0",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  writeStatus: {
    width: 45,
    height: 45,
    borderRadius: 45,
    backgroundColor: "#d6d6d6",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 288,
    top: 375,
    elevation: 4,
  },
});

export default CallsLog;
