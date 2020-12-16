import React, { useState } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Picker } from "@react-native-community/picker";
import { AntDesign } from "@expo/vector-icons";
import { Button, Text, Textarea} from "native-base";

const Report = () => {
  const [pickedValue, setPickedValue] = useState("select");
  const { width } = Dimensions.get("window");

  if(pickedValue === 'select'){
    setPickedValue(null);
  }

  return (
    <View style={styles.container}>
      <View style={{ margin: 20 }}>
        <Text style={styles.mainText}>Report a problem</Text>
        <Picker
          selectedValue={pickedValue}
          style={{
            width: '100%',
            height: 50,
            marginTop: 20,
            backgroundColor: "#fff",
          }}
          onValueChange={(itemValue, itemIndex) => {
            setPickedValue(itemValue);
          }}
        >
          <Picker.Item label="Select" value="select" />
          <Picker.Item label="Spam or Abuse" value="spam" />
          <Picker.Item label="Bug related to app features" value="bug" />
        </Picker>
        <AntDesign
          name="caretdown"
          size={24}
          color="orange"
          style={styles.caretIcon}
        />

        <View style = {{marginVertical: 20}}>
          {pickedValue ? <Textarea rowSpan={5} bordered style = {{backgroundColor: '#fff', borderColor: 'orange', borderWidth:1}} placeholder="Explain your issue" /> : <Text/> }
        </View>

        <View style = {{width: width/1.1, flexDirection:'row', justifyContent: 'flex-end'}}>
        <Button
          block
          style={{borderRadius: 10, backgroundColor: "orange", width: width/3.5,}}
        >
          <Text style = {{color: '#fff'}}> REPORT </Text>
        </Button>
        </View>
      </View>
    </View>
  );
};

export default Report;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  mainText: {
    color: "#fff",
    fontSize: RFPercentage(2.8),
  },
  caretIcon: {
    position: "absolute",
    top: 57,
    left: Dimensions.get('window').width/1.3,
  },
});
