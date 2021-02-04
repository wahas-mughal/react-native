import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Colors from '../../constants/Color';

const Home = (props) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>WhatsApp Home Screen</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

Home.navigationOptions = {
  headerTitle: 'WhatsApp',
  headerTintColor: Colors.secondary
}

export default Home;
