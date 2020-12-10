import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

const TermsOfUse = () => {
  return (
    <ScrollView style={styles.container}> 
      <View>
        <Text>TermsOfUse</Text>
      </View>
    </ScrollView>
  );
};

export default TermsOfUse;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
