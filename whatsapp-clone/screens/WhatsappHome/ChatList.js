import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { useSelector } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../../constants/Color";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ChatList = (props) => {
  const chatList = useSelector((state) => state.main.chats);

  console.log(chatList);
  console.log(props);

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {chatList.map((elements) => (
          <View style={styles.container} key={elements.chatId}>
            <View style={styles.outerView}>
              <View style={styles.imageView}>
                <Image
                  style={styles.image}
                  source={{ uri: elements.chatImage }}
                  resizeMode="center"
                />
              </View>
              <View style={styles.innerView}>
                <View style={styles.nameTimeView}>
                  <Text style={styles.name}>{elements.chatName} </Text>
                  <Text style={styles.time}> {elements.msgTime} </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  {elements.chatName === "Chopper" ? (
                    <MaterialCommunityIcons
                      name="check-all"
                      size={20}
                      color="#a3a0a0"
                    />
                  ) : (
                    <MaterialCommunityIcons
                      name="check-all"
                      size={19}
                      color="#34B7F1"
                    />
                  )}
                  <Text style={styles.message} numberOfLines={1}>
                    {elements.chatMsgs}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.contact} useForeground>
        <MaterialCommunityIcons
          name="android-messages"
          size={24}
          color={Colors.secondary}
        />
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
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 50,
  },
  imageView: {
    borderRadius: 50,
    borderColor: "#ccc",
    borderWidth: 0.5,
    overflow: "hidden",
  },
  nameTimeView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    color: "#363232",
    fontSize: 17,
    fontWeight: "bold",
  },
  message: {
    color: "#888",
    fontSize: 15,
    marginLeft: 5,
  },
  time: {
    color: "#25D366",
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
    elevation: 4
  },
});

export default ChatList;
