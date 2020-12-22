import React from "react";
import { View, StyleSheet } from "react-native";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Icon
} from "native-base";

const ResetPassword = () => {
  return (
    <Container style = {{backgroundColor: 'black'}}>
      <Content style = {{margin: 20}}>
        <Form>
          <Item floatingLabel last  style = {{paddingBottom: 10}} >
            <Label style = {{color: '#fff'}} >Reset Password</Label>
            <Input style = {{color: '#fff'}}/>
          </Item>
          <Button block style = {{marginTop: 20, borderRadius: 10, backgroundColor: 'orange'}}>
            <Text>RESET</Text>
          </Button>
          <Text style = {{color: '#fff', marginTop: 20}}>You will receive an email to reset your password. Please check your email after requesting.</Text>
        </Form>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({});

export default ResetPassword;
