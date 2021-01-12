import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Modal,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import * as Contacts from "expo-contacts";
import {
  CardItem,
  Content,
  ListItem,
  Left,
  Right,
  Card,
  Container,
} from "native-base";

const Demo = () => {
  const [contacts, setContacts] = useState([]);
  console.log("CONTACTS SET IN STATE", contacts);
  const [isModalTrue, setIsModalTrue] = useState(null);
  const [selectedContact, setSelectedContact] = useState();

  const getMyContacts = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === "granted") {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.PhoneNumbers, Contacts.Fields.Image],
      });

      if (data.length > 0) {
        const contact = data;
        setContacts(contact);
        console.log(contact);
      }
      if (data.length < 0) {
        console.log("No Contacts");
      }
    }
    setIsModalTrue(true);
  };

  const selectContactHandler = (name) => {
    setSelectedContact(name);
    setIsModalTrue(false);
  };

  return (
    <View style={styles.container}>
      <Modal animationType="fade" transparent={true} visible={isModalTrue}>
        <Container>
          <Content style={{ margin: 10 }}>
            <FlatList
              data={contacts}
              initialNumToRender= {20}
              renderItem={(resData) => (
                // <TouchableOpacity onPress={() => {}}>
                //   <View>
                <Card>
                  <ListItem
                    onPress={selectContactHandler.bind(
                      this,
                      resData.item.hasOwnProperty("phoneNumbers")
                        ? resData.item.phoneNumbers[0].number
                        : ""
                    )}
                  >
                    <Left>
                      <View style={{ width: 150 }}>
                        <Text style = {{fontSize: 16, color: 'blue'}}>Contact </Text>
                        <Text>{resData.item.name}</Text>
                      </View>
                    </Left>
                    <Right>
                      <View style={{ width: 110 }}>
                      <Text style = {{fontSize: 16, color: 'blue'}}>Contact Details </Text>
                        <Text>
                          {resData.item.hasOwnProperty("phoneNumbers")
                            ? resData.item.phoneNumbers[0].number
                            : ""}
                        </Text>
                      </View>
                    </Right>
                  </ListItem>
                </Card>
                /* </View>
                 </TouchableOpacity> */
              )}
            />
          </Content>
        </Container>
      </Modal>
      <TextInput
        style={styles.input}
        value={selectedContact}
        onChangeText={(text) => setSelectedContact(text)}
      />
      <Button color="blue" title="My Contacts" onPress={getMyContacts} />
    </View>
  );
};

export default Demo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 20,
    padding: 10,
    width: "90%",
    marginBottom: 15,
  },
});
