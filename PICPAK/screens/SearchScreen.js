import React from "react";
import {Dimensions } from "react-native";
import {
  Container,
  Item,
  Input,
  Icon,
  Button,
  Content,
} from "native-base";

const SearchScreen = () => {

const {width} = Dimensions.get('window');

  return (
    <Container>
      <Content style={{ marginTop: width/11, margin: 30 }}>
        <Item>
          <Icon name="ios-search" style = {{fontSize: 40, color: 'orange'}} />
          <Input placeholder="Search" />
          <Icon name="ios-people" style = {{fontSize: 40, color: 'orange'}} />
        </Item>
        <Button transparent>
        </Button>
      </Content>
    </Container>
  );
};

export default SearchScreen;

