import React, { useRef, useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  StyleSheet,
} from "react-native";
import { captureRef } from "react-native-view-shot";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Body, Button } from "native-base";

function useCapture() {
  const captureViewRef = useRef();
  const [snapShot, setSnapShot] = useState(null);

  function onCapture() {
    captureRef(captureViewRef, {
      format: "jpg",
      quality: 0.9,
    }).then(
      (uri) => setSnapShot(uri),
      (error) => console.log("Oops, snapshot failed", error)
    );
  }

  return {
    captureViewRef,
    onCapture,
    snapShot,
  };
}
export default function FilterScreen({ source }) {
  const { captureViewRef, snapShot, onCapture } = useCapture();

  return (
    <View style={{ width: "100%" }}>
      <View ref={captureViewRef} collapsable={false}>
        <Image
          source={{
            uri: source,
          }}
          style={{
            width: "100%",
            height: Dimensions.get("window").width / 1.43,
            zIndex: -10,
            position: "absolute",
          }}
          resizeMode="contain"
        />
        <View
          style={{
            backgroundColor: "rgba(255, 0, 0, 0.2)",
            height: Dimensions.get("window").width / 1.43,
          }}
        />
      </View>

      <Body>
        {snapShot ? (
          <Image
            source={{
              uri: snapShot,
            }}
            style={{
              width: "100%",
              height: Dimensions.get("window").width / 1.43,
              position: "relative",
            }}
          />
        ) : (
          <View />
        )}
        <ScrollView horizontal style = {{marginVertical: 15}}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <View style={styles.filterTags}>
              <Text style={{ color: "#fff", fontWeight: "bold" }}>
                Filter 1
              </Text>
            </View>
            <View style={styles.filterTags}>
              <Text style={{ color: "#fff", fontWeight: "bold" }}>
                Filter 2
              </Text>
            </View>
            <View style={styles.filterTags}>
              <Text style={{ color: "#fff", fontWeight: "bold" }}>
                Filter 3
              </Text>
            </View>
            <View style={styles.filterTags}>
              <Text style={{ color: "#fff", fontWeight: "bold" }}>
                Filter 4
              </Text>
            </View>
            <View style={styles.filterTags}>
              <Text style={{ color: "#fff", fontWeight: "bold" }}>
                Filter 5
              </Text>
            </View>
            <View style={styles.filterTags}>
              <Text style={{ color: "#fff", fontWeight: "bold" }}>
                Filter 6
              </Text>
            </View>
            <View style={styles.filterTags}>
              <Text style={{ color: "#fff", fontWeight: "bold" }}>
                Filter 7
              </Text>
            </View>
          </View>
        </ScrollView>
        <Button
          block
          style={{
            backgroundColor: "#fff",
            borderColor: "orange",
            borderWidth: 1,
            borderRadius: 5,
            marginVertical: 5,
          }}
          onPress={onCapture}
        >
          <Text
            style={{
              color: "orange",
              fontWeight: "bold",
              fontSize: RFPercentage(2.6),
            }}
          >
            POST
          </Text>
        </Button>
      </Body>
    </View>
  );
}

const styles = StyleSheet.create({
  filterTags: {
    borderColor: "orange",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    padding: 7,
    marginBottom: 10,
    backgroundColor: "orange",
  },
});
