import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const OpenChat = (props) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Open Chat Screen</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default OpenChat;
