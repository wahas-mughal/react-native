import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const Camera = (props) => {
  return (
      <View style={styles.container}>
        <Text>Camera Screen</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Camera;
