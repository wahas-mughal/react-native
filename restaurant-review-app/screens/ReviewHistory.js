import React from "react";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Left,
  Icon,
  Right,
  Badge,
} from "native-base";
import { TouchableOpacity, View } from "react-native";
const ReviewHistory = (props) => {
  return (
    <Container>
      <Header style={{ backgroundColor: "#0065ff" }}>
        <Left>
          <Icon
            name="ios-menu"
            style={{ fontSize: 28, color: "#fff" }}
            onPress={() => props.navigation.openDrawer()}
          />
        </Left>
        <Body>
          <View style={{ width: 200,alignItems: "center" }}>
            <Text style={{ color: "#fff", fontSize: 18, marginLeft: 15 }}>
              Reviews History
            </Text>
          </View>
        </Body>
        <Right />
      </Header>
      <Content padder>
        <TouchableOpacity onPress={() => {}}>
          <Card>
            <CardItem header bordered>
              <Text
                style={{ fontWeight: "bold", color: "#0065ff", fontSize: 17 }}
              >
                Habib Restaurant
              </Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  Habib Restaurant is fantastic and food is delicious too
                </Text>
              </Body>
            </CardItem>
            <CardItem header bordered>
              <Text style={{ color: "#0065ff", fontWeight: "bold" }}>
                You Rated:{" "}
              </Text>
            </CardItem>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginVertical: 15,
                alignItems: "center",
              }}
            >
              <TouchableOpacity onPress={() => {}}>
                <Badge
                  primary
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 40,
                    backgroundColor: "#0065ff",
                  }}
                >
                  <Text> 4 </Text>
                </Badge>
              </TouchableOpacity>
              <Text style={{ marginLeft: 5 }}> Points</Text>
            </View>
          </Card>
        </TouchableOpacity>
      </Content>
    </Container>
  );
};

export default ReviewHistory;
