import React from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Button,
  Icon,
  Right,
} from 'native-base';
import { Link } from 'react-router-native';
import { connect } from 'react-redux';

class Home extends React.Component {

  render() {
    return(
      <Container>
        <Header>
          <Right>
            <Button iconRight transparent onPress={}>
              <Text>Guest</Text>
              <Icon name='ios-arrow-forward' />
            </Button>
          </Right>
        </Header>
        <Content scrollEnabled={false}>
          <View>
            <Text>710 Tips and Equations</Text>
          </View>
        </Content>
      </Container>
    )
  }
}

export default Home;
