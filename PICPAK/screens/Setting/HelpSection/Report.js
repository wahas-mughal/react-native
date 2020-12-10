import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const Report = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text>Report</Text>
      </View>
    </ScrollView>
  );
};

export default Report;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
