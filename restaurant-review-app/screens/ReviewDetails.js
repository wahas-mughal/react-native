import React from 'react'
import {Image, TouchableOpacity} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const ReviewDetails = () => {
    return (
        <Container>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text style = {{textAlign: 'center', fontSize: 21, color: '#0065ff', fontWeight: 'bold'}}>Habib Restaurant</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{
                  uri:
                    "https://media-cdn.tripadvisor.com/media/photo-s/11/9e/75/70/sala-a-restaurant.jpg",
                }}
                style={{ height: 200, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon style = {{color: '#0065ff', fontSize: 20}} name="md-pencil-sharp" />
                  <Text style = {{color: '#0065ff', fontSize: 15, fontWeight: 'bold'}} >Reviews(20)</Text>
                </Button>
              </Left>
              <Right>
                <Button transparent>
                  <Icon name="star" style = {{color: '#0065ff', fontSize: 20}}/>
                  <Text style = {{color: '#0065ff', fontSize: 15, fontWeight: 'bold'}} >Rating 4.4</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
          <Card>
          <CardItem>
              <Left>
                <Body>
                <Text style = {{fontSize: 18, fontWeight: 'bold', color: '#0065ff'}}>Bilal Khan</Text>
                  <Text>Habib Restaurant is fantastic and food is delicious too</Text>
                </Body>
              </Left>
              <Right>
              <Button transparent>
                  <Text style = {{color: '#0065ff', fontSize: 14, fontWeight: 'bold'}}>Rated 4 Points</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
          <Card>
          <CardItem>
              <Left>
                <Body>
                <Text style = {{fontSize: 18, fontWeight: 'bold', color: '#0065ff'}}>Bilal Khan</Text>
                  <Text>Habib Restaurant is fantastic and food is delicious too</Text>
                </Body>
              </Left>
              <Right>
              <Button transparent>
                  <Text style = {{color: '#0065ff', fontSize: 14, fontWeight: 'bold'}}>Rated 4 Points</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
}

ReviewDetails.navigationOptions = (navData) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress = {() => navData.navigation.navigate('postReview')}>
        <Text style = {{color: '#0065ff', marginRight: 15, fontSize: 17, fontWeight: 'bold'}}> Post Review </Text>
      </TouchableOpacity>
    ),
  };
};

export default ReviewDetails
