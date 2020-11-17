import React, { useEffect, useCallback, useState } from "react";
import {
  FlatList,
  Platform,
  Button,
  Alert,
  View,
  Text,
  ActivityIndicator,
  StyleSheet
} from "react-native";
import { useSelector } from "react-redux";
import ProductItems from "../../components/shop/ProductItems";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/UI/HeaderButton";
import Colors from "../../constants/Colors";
import { useDispatch } from "react-redux";
import * as userActions from "../../store/actions/products";

const UserProductsScreen = (props) => {
  const productsOfUser = useSelector((state) => state.products.userProducts);
  const [isLoading, setIsLoading] = useState(false);
  console.log(productsOfUser);
  const dispatch = useDispatch();

  const removeHandler = (id) => {
    Alert.alert("Are you sure?", "You want to delete this product", [
      { text: "No", style: "default" },
      {
        text: "Yes",
        style: "destructive",
        onPress: () => {
          dispatch(userActions.deleteProduct(id));
        },
      },
    ]);
  };

  //fetch the products filtered w.r.t to the logged in user
  const fetchProducts = useCallback(async () => {
    setIsLoading(true);
    try {
      await dispatch(userActions.setProducts());
    } catch (error) {
      error.message;
    }
    setIsLoading(false);
  }, [dispatch, setIsLoading]);

  // // this effect runs whenver this screen is switch between other screens
  useEffect(() => {
    const willFocus = props.navigation.addListener("willFocus", fetchProducts);
    return () => {
      willFocus.remove();
    };
  }, [fetchProducts]);

  // //this effect will run for the first time app loads
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (productsOfUser.length === 0) {
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text> No product found, please add some! </Text>
    </View>;
  }

  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  return (
    <FlatList
      data={productsOfUser}
      renderItem={(itemData) => (
        <ProductItems
          key = {itemData.item.id}
          image={itemData.item.imageURL}
          title={itemData.item.title}
          price={itemData.item.price}
          onSelect={() => {
            props.navigation.navigate("editProducts", {
              productId: itemData.item.id,
            });
          }}
        >
          <Button
            color={Colors.primary}
            title="Remove"
            onPress={removeHandler.bind(this, itemData.item.id)}
          />
          <Button
            color={Colors.primary}
            title="Edit"
            onPress={() => {
              props.navigation.navigate("editProducts", {
                productId: itemData.item.id,
              });
            }}
          />
        </ProductItems>
      )}
    />
  );
};

const styles = StyleSheet.create({
  center:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
})

UserProductsScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Products",
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
          iconName={Platform.OS === "android" ? "md-create" : "ios-create"}
          onPress={() => {
            navData.navigation.navigate("editProducts");
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default UserProductsScreen;
