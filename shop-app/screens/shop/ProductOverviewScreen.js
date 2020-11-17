import React, { useEffect, useState, useCallback } from "react";
import {
  FlatList,
  Platform,
  Button,
  ActivityIndicator,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ProductItems from "../../components/shop/ProductItems";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/UI/HeaderButton";
import Colors from "../../constants/Colors";

import * as cartActions from "../../store/actions/cart";
import * as productAction from "../../store/actions/products";

const ProductOverviewScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRefeshing, setIsRefreshing] = useState(false);
  const [errors, setErrors] = useState();
  const products = useSelector((state) => state.products.allAvailableProducts);

  const selectedButtonHandler = (id, title) => {
    props.navigation.navigate("productDetails", {
      productId: id,
      productTitle: title,
    });
  };

  const dataLoaded = useCallback(async () => {
    setErrors(null);
    setIsRefreshing(true);
    try {
      await dispatch(productAction.setProducts());
    } catch (error) {
      setErrors(error.message);
    }
    setIsRefreshing(false);
  }, [dispatch, setIsLoading, setErrors]);

  const dispatch = useDispatch();

  // this effect will re-run when entering again the screen to fetch the latest update
  useEffect(() => {
    const willFocus = props.navigation.addListener("willFocus", dataLoaded);
    return () => {
      willFocus.remove();
    };
  }, [dataLoaded]);

 // this same effect runs initially to fetch the data
  useEffect(() => {
    setIsLoading(true);
    dataLoaded();
    setIsLoading(false);
  }, [dispatch, dataLoaded]);

  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  if (!isLoading && products.length === 0) {
    return (
      <View style={styles.center}>
        <Text> No Product Found! Please add some.</Text>
      </View>
    );
  }

  if (errors) {
    return (
      <View style={styles.center}>
        <Text> {errors} </Text>
        <Button title="Try again" color={Colors.primary} onPress={dataLoaded} />
      </View>
    );
  }

  return (
    <FlatList
      onRefresh = {dataLoaded}
      refreshing = {isRefeshing}
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItems
          title={itemData.item.title}
          price={itemData.item.price}
          image={itemData.item.imageURL}
          onSelect={() => {
            selectedButtonHandler(itemData.item.id, itemData.item.title);
          }}
        >
          <Button
            color={Colors.primary}
            title="View Details"
            onPress={() => {
              selectedButtonHandler(itemData.item.id, itemData.item.title);
            }}
          />
          <Button
            color={Colors.primary}
            title="Add to Cart"
            onPress={() => {
              dispatch(cartActions.addToCart(itemData.item));
            }}
          />
        </ProductItems>
      )}
    />
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

ProductOverviewScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "All Products",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Cart"
          iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Cart"
          iconName={Platform.OS === "android" ? "md-cart" : "ios-cart"}
          onPress={() => {
            navData.navigation.navigate("Cart");
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default ProductOverviewScreen;
