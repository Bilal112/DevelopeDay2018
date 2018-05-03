import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'
import { Image, AsyncStorage, } from 'react-native'
import { Icon, Body, ListItem } from 'native-base'
import { connect } from 'react-redux';
import { Container, Header, Form, Item, Label, Input, Content, Right, Left, Button, Text, View } from 'native-base';
import MiddleWare from '../../Store/Middleware/middleware';



class home extends Component {
    render() {

        return (
            <View>
                <Header>
                    <Right>
                        <Button transparent>
                            <Icon name='md-more' />
                        </Button>
                    </Right>
                    <Body>
                        <Title>GoNETS</Title>
                    </Body>
                    <Right />
                </Header>
                <View>
                    <Left>
                        <Text>My Session
                    </Text>
                    </Left>
                </View>
                <View>
                    

      <CardItem>
              <Left>
                <Thumbnail source={{uri: 'Image URL'}} />
                <Body>
                  <Text>NCA GROUND</Text>
                  <Text note>TIME</Text>
                </Body>
              </Left>
              <Right>
                <Body>
                <Icon name='group'/>
                  <Text note>2 going</Text>
                </Body> 
              </Right>
            </CardItem>
            {'\n'}
                {'\n'}
                {'\n'}
                {'\n'}
                {'\n'}
                {'\n'}
                {'\n'}
                {'\n'}

                </View>

              
                
                <View>

<Text> There are some other session are coming soon
    </Text>

                </View>
                <View>
                <CardItem>
              <Left>
                <Thumbnail source={{uri: 'Image URL'}} />
                <Body>
                  <Text>UBL GROUND</Text>
                  <Text note>TIME</Text>
                </Body>
              </Left>
              <Right>
                <Body>
                <Icon name='group'/>
                  <Text note>2 going</Text>
                </Body> 
              </Right>
            </CardItem>
            {'\n'}
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'Image URL'}} />
                <Body>
                  <Text>Rashid Latif Circket Academy</Text>
                  <Text note>TIME</Text>
                </Body>
              </Left>
              <Right>
                <Body>
                <Icon name='group'/>
                  <Text note>2 going</Text>
                </Body> 
              </Right>
            </CardItem>
            {'\n'}
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'Image URL'}} />
                <Body>
                  <Text>Rashid Latif Circket Academy</Text>
                  <Text note>Another Time</Text>
                </Body>
              </Left>
              <Right>
                <Body>
                <Icon name='group'/>
                  <Text note>2 going</Text>
                </Body> 
              </Right>
            </CardItem>
                    </View>

<View>
    <Text style={{alignItems="center"}}> Create a Net Sess </Text> 
    <Icon name="md-checkmark" style={{color:'blue'}}/>
    </View>
            </View>
        )
    }
}