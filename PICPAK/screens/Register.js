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

const Register = (props) => {


  return (
    <ImageBackground
      source={require("../assets/Images/bgImage.jpg")}
      style={styles.bgImage}
    >
      <Card style={styles.inputContainer}>
          <View style = {styles.trademarkView}>
              <Image style = {styles.cameraImg} source = {require('../assets/Images/camera-img.png')}/>
          </View>
          <TextInput placeholder="First Name" style={styles.input} />
          <TextInput placeholder="Last Name" style={styles.input} />
          <TextInput placeholder="Email" style={styles.input} />
          <CustomButton title="SIGN UP" onPress={() => props.navigation.navigate('intro')} style={styles.btn} />
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
    alignItems: "center",
  },
  input: {
    borderBottomWidth: 1.5,
    borderBottomColor: "orange",
    width: 250,
    height: 40,
    textAlign: 'center',
    fontSize: 19,
    padding:8,
    marginVertical: 7
  },
  inputContainer: {
    padding: 20,
    width: 300,
    height: 285,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: Dimensions.get('window').height/5,
    elevation:8,
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 3},
    shadowColor: 'black',
    shadowRadius: 6,
  },
  btn: {
    width: 220,
    height: 40,
    borderRadius: 10,
    position: 'absolute',
    top: 265
  },
  trademarkView:{
      borderColor: '#ff6600',
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
  },
  cameraImg:{
      width:55,
      height:55
  }
});

export default Register;
