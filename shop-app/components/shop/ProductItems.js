import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import Card from '../UI/Card';


const ProductItems = (props) => {
  let TouchableNativeOpacity = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableNativeOpacity = TouchableNativeFeedback;
  }

  return (
    <Card style={styles.productView}>
        <TouchableNativeOpacity onPress={props.onSelect} useForeground>
          <View>
            {/* <View style = {styles.imageView}> */}
            <Image style={styles.image} source={{ uri: props.image }} />
            {/* </View> */}
            <View style={styles.details}>
              <Text style={styles.title}>{props.title} </Text>
              <Text style={styles.price}>${props.price.toFixed(2)} </Text>
            </View>
            <View style={styles.actions}>
              {props.children}
            </View>
          </View>
        </TouchableNativeOpacity>
    </Card>
  );
};

const styles = StyleSheet.create({
  productView: {
    borderRadius: 10,
    margin: 20,
    height: 300,
    overflow: 'hidden',
  },
  image: {
    width: "100%",
    height: "60%",
  },
  details: {
    marginLeft: 20,
    height: '15%',
  },
  title: {
    fontSize: 18,
    paddingVertical: 3,
    fontFamily: 'open-sans-bold'
  },
  price: {
    fontSize: 14,
    color: "#888",
    fontFamily: 'open-sans-regular'
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    height: '25%'
  },
  // touchable: {
  //   overflow: "hidden",
  //   borderRadius: 10
  // },
  // imageView:{
  //   width: "100%",
  //   height: "60%",
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
    // overflow: 'hidden'
  // }
});

export default ProductItems;
