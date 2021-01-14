import React, { useRef, useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
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
  const [selectedFilter, setSelectedFilter] = useState(
    styles.defaultFilterOverlay
  );
  const [filterBtn1, setFilterBtn1] = useState(false);
  const [filterBtn2, setFilterBtn2] = useState(false);
  const [filterBtn3, setFilterBtn3] = useState(false);
  const [filterBtn4, setFilterBtn4] = useState(false);
  const [filterBtn5, setFilterBtn5] = useState(false);
  const [filterBtn6, setFilterBtn6] = useState(false);
  const [filterBtn7, setFilterBtn7] = useState(false);

  return (
    <View>
      <View
        ref={captureViewRef}
        collapsable={false}
        style={{
          height: Dimensions.get("window").width / 1.1,
          // width: Dimensions.get("window").width / 1.2,
        }}
      >
        <Image
          source={{
            uri: source,
          }}
          style={styles.filterImage}
          resizeMode="cover"
        />
        <View style={selectedFilter} />
      </View>

      <Body>
        {snapShot ? (
          <Image
            source={{
              uri: snapShot,
            }}
            style={{
              width: "100%",
              height: Dimensions.get("window").width / 1.1,
              position: "relative",
            }}
          />
        ) : (
          <View />
        )}
        <ScrollView horizontal style={{ marginVertical: 7 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={filterBtn1 ? styles.filterTagsEffect : styles.filterTags}
              onPress={() => {
                setSelectedFilter(styles.filterOverlay1)
                setFilterBtn1(true)
                setFilterBtn2(false)
                setFilterBtn3(false)
                setFilterBtn4(false)
                setFilterBtn5(false)
                setFilterBtn6(false)
                setFilterBtn7(false)
              }}
            >
              <Text style={{ color: "#fff", fontWeight: "bold" }}>Bright</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={filterBtn2 ? styles.filterTagsEffect : styles.filterTags}
              onPress={() => {
                setSelectedFilter(styles.filterOverlay6)
                setFilterBtn1(false)
                setFilterBtn2(true)
                setFilterBtn3(false)
                setFilterBtn4(false)
                setFilterBtn5(false)
                setFilterBtn6(false)
                setFilterBtn7(false)
              }}
            >
              <Text style={{ color: "#fff", fontWeight: "bold" }}>
                Bright 2
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={filterBtn3 ? styles.filterTagsEffect : styles.filterTags}
              onPress={() => {
                setSelectedFilter(styles.filterOverlay7)
                setFilterBtn1(false)
                setFilterBtn2(false)
                setFilterBtn3(true)
                setFilterBtn4(false)
                setFilterBtn5(false)
                setFilterBtn6(false)
                setFilterBtn7(false)
              }}
            >
              <Text style={{ color: "#fff", fontWeight: "bold" }}>
                Bright 3
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={filterBtn4 ? styles.filterTagsEffect : styles.filterTags}
              onPress={() => {
                setSelectedFilter(styles.filterOverlay2)
                setFilterBtn1(false)
                setFilterBtn2(false)
                setFilterBtn3(false)
                setFilterBtn4(true)
                setFilterBtn5(false)
                setFilterBtn6(false)
                setFilterBtn7(false)
              }}
            >
              <Text style={{ color: "#fff", fontWeight: "bold" }}>Blueish</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={filterBtn5 ? styles.filterTagsEffect : styles.filterTags}
              onPress={() => {
                setSelectedFilter(styles.filterOverlay3)
                setFilterBtn1(false)
                setFilterBtn2(false)
                setFilterBtn3(false)
                setFilterBtn4(false)
                setFilterBtn5(true)
                setFilterBtn6(false)
                setFilterBtn7(false)
              }}
            >
              <Text style={{ color: "#fff", fontWeight: "bold" }}>Reddish</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={filterBtn6 ? styles.filterTagsEffect : styles.filterTags}
              onPress={() => {
                setSelectedFilter(styles.filterOverlay4)
                setFilterBtn1(false)
                setFilterBtn2(false)
                setFilterBtn3(false)
                setFilterBtn4(false)
                setFilterBtn5(false)
                setFilterBtn6(true)
                setFilterBtn7(false)
              }}
            >
              <Text style={{ color: "#fff", fontWeight: "bold" }}>
                Dark Tense
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={filterBtn7 ? styles.filterTagsEffect : styles.filterTags}
              onPress={() => {
                setSelectedFilter(styles.filterOverlay5)
                setFilterBtn1(false)
                setFilterBtn2(false)
                setFilterBtn3(false)
                setFilterBtn4(false)
                setFilterBtn5(false)
                setFilterBtn6(false)
                setFilterBtn7(true)
              }}
            >
              <Text style={{ color: "#fff", fontWeight: "bold" }}>
                Greenish
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <Button
          block
          style={{
            backgroundColor: "#fff",
            borderColor: "orange",
            borderWidth: 1,
            marginBottom: 10,
            marginHorizontal: 7,
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
    borderRadius: 30,
  },
  filterTagsEffect: {
    borderColor: "#888",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    padding: 7,
    marginBottom: 10,
    backgroundColor: "#888",
    borderRadius: 30,
  },
  filterImage: {
    width: "100%",
    height: "100%",
    zIndex: -10,
    position: "absolute",
  },
  defaultFilterOverlay: {
    height: Dimensions.get("window").width / 1.1,
  },
  filterOverlay1: {
    height: Dimensions.get("window").width / 1.1,
    backgroundColor: "rgba(193, 194, 190, 0.1)",
  },
  filterOverlay2: {
    height: Dimensions.get("window").width / 1.1,
    backgroundColor: "rgba(0, 0, 255, 0.1)",
  },
  filterOverlay3: {
    height: Dimensions.get("window").width / 1.1,
    backgroundColor: "rgba(252, 5, 5, 0.1)",
  },
  filterOverlay4: {
    height: Dimensions.get("window").width / 1.1,
    backgroundColor: "rgba(33, 33, 32, 0.3)",
  },
  filterOverlay5: {
    height: Dimensions.get("window").width / 1.1,
    backgroundColor: "rgba(0, 225, 0, 0.1)",
  },
  filterOverlay6: {
    height: Dimensions.get("window").width / 1.1,
    backgroundColor: "rgba(252, 252, 250, 0.2)",
  },
  filterOverlay7: {
    height: Dimensions.get("window").width / 1.1,
    backgroundColor: "rgba(252, 252, 250, 0.3)",
  },
});
