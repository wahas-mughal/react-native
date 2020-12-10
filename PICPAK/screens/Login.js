import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  Image,
  Dimensions
} from "react-native";
import CustomButton from "../components/CustomButton";
import Card from "../components/Card";

const Login = (props) => {

  // const screenWidth = Dimensions.get('window').width;
  // const screenHeight = Dimensions.get('window').height;

  return (
    <ImageBackground
      source={require("../assets/Images/bgImage.jpg")}
      style={styles.bgImage}
    >
      <Card style={styles.inputContainer}>
          <View style = {styles.trademarkView}>
              <Text style = {styles.trademarkText}> PIC </Text>
              <Text style = {styles.trademarkText}> PAK </Text>
          </View>
          <TextInput placeholder="Mobile Number" style={styles.input} />
          <CustomButton title="SIGN IN" onPress={() => props.navigation.navigate('register')} style={styles.btn} />
      </Card>
      <View style = {styles.fbTextContainer}>
          <Text style = {styles.mainText}> Try Signing With: </Text>
          <Image source = {require('../assets/Images/facebook-512.png')} style = {styles.fbImage}/>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bgImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderBottomWidth: 1.5,
    borderBottomColor: "orange",
    width: 250,
    height: 40,
    textAlign: 'center',
    fontSize: 19,
    padding:8
  },
  inputContainer: {
    padding: 20,
    width: 300,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  btn: {
    width: 220,
    height: 40,
    borderRadius: 10,
    position: 'absolute',
    top: 180
  },
  trademarkView:{
      borderColor: 'orange',
      borderWidth:4,
      borderRadius: 100,
      backgroundColor: '#fff',
      height: 100,
      width: 100,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 2,
      position: 'absolute',
      top: -50
  },
  trademarkText:{
      fontSize: 18,
      fontWeight: 'bold',
  },
  fbImage:{
      width: 40,
      height:40
  },
  fbTextContainer:{
      justifyContent:'center',
      alignItems:'center',
      position:'absolute',
      bottom: Dimensions.get('window').height/15
  },
  mainText:{
      marginBottom:30,
      color:'#fff',
      fontSize: 18
  }
});

export default Login;
