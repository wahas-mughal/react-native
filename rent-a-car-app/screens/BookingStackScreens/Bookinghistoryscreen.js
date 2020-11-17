import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { globalstyles } from "../../style/global";

export default class BookingHistory extends React.Component {
  render() {
    return (
      <View style={styles.historyContainer}>
        <View style={globalstyles.card}>
          <Image
            source={require("../../assets/images/suzuki-liana.jpg")}
            style={styles.coverImage}
            resizeMode="cover"
          />

          <Text style = {styles.headingText}> Booking Details </Text>

          <View style={styles.textView}>
            <Text style={styles.text}>
              Car: <Text style={styles.innerText}> Suzuki Liana </Text>{" "}
            </Text>
            <Text style={styles.text}>
              Booking Start: <Text style={styles.innerText}> 26/07/2020 </Text>
            </Text>
            <Text style={styles.text}>
              Booking End: <Text style={styles.innerText}> 29/07/2020 </Text>
            </Text>
            <Text style={styles.text}>
              Status: <Text style={styles.innerText}> On-Going </Text>{" "}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  historyContainer: {
    padding: 20,
  },
  coverImage: {
    width: 320,
    height: 200,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 15,
    marginTop: 3,
  },
  textView: {
    marginTop: 10,
    marginBottom: 10,
  },
  innerText: {
    fontWeight: "normal",
    fontSize: 14,
  },
  headingText:{
      fontSize: 18,
      fontWeight: 'bold',
      marginLeft: 10,
      marginTop: 10
  }
});
