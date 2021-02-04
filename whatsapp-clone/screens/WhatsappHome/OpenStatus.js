import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const OpenStatus = (props) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Calls Log Screen</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default OpenStatus;
