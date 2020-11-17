import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  Image,
} from "react-native";
import { useSelector, useDispatch} from "react-redux";
import Colors from '../../constants/Colors';
import * as cartActions from '../../store/actions/cart';

const ProductDetailsScreen = (props) => {
  const productID = props.navigation.getParam("productId");

  const selectedProduct = useSelector((state) =>
    state.products.allAvailableProducts.find(
      (product) => product.id === productID
    )
  );

  const dispatch = useDispatch();

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <Image style={styles.image} source={{ uri: selectedProduct.imageURL }} />
      <View style={styles.button}>
        <Button color = {Colors.primary} title="Add to Cart" onPress = {() => {
          dispatch(cartActions.addToCart(selectedProduct));
        }} />
      </View>
      <View style={styles.details}>
        <Text style={styles.heading}>Description</Text>
        <Text style={styles.description}>{selectedProduct.description}</Text>
        <Text style={styles.heading}>Price</Text>
        <Text style={styles.price}>${selectedProduct.price}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  description: {
    fontSize: 14,
    textAlign: "left",
    marginVertical: 10,
    fontFamily: 'open-sans-regular'
  },
  price: {
    fontSize: 20,
    color: "#888",
    marginBottom: 5,
    fontFamily: 'open-sans-regular'
  },
  button: {
    padding: 20,
    alignItems: "flex-end",
  },
  details: {
    marginHorizontal: 20,
  },
  heading: {
    fontSize: 18,
    color: "black",
    fontFamily: 'open-sans-bold'
  },
});

ProductDetailsScreen.navigationOptions = (NavData) => {
  const title = NavData.navigation.getParam("productTitle");
  return {
    headerTitle: title,
  };
};

export default ProductDetailsScreen;
