import React from "react";
import { Container, Content, Item, Input, Icon, Text } from "native-base";
import {RFPercentage} from 'react-native-responsive-fontsize';

const PersonalInformation = () => {
  return (
      <Container style = {{ backgroundColor: 'black'}} >
        <Content style = {{margin: 20}}>
          <Item style = {{marginTop: 20}}>
            <Input placeholder="Full Name" style = {{color: '#fff'}} />
          </Item>
          <Item disabled style = {{marginTop: 20}}>
            <Input disabled placeholder="Email" />
            <Icon name="information-circle" style = {{color: '#fff'}} />
          </Item>
          <Item disabled style = {{marginTop: 20}}>
            <Input disabled placeholder="Phone" />
            <Icon name="information-circle" style = {{color: '#fff'}} />
          </Item>
          <Text style = {{color: '#fff', fontSize: RFPercentage(2.2),marginTop: 20 }}>The following information you have provided will not be public, your followers won't see it </Text>
        </Content>
      </Container>

  );
};

export default PersonalInformation;

