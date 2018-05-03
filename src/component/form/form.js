import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'
import { Image, AsyncStorage, } from 'react-native'
import { Icon, Body, ListItem } from 'native-base'
import { connect } from 'react-redux';
import { Container, Header, Form, Item, Label, Input, Content, Button, Text, View } from 'native-base';
import MiddleWare from '../../Store/Middleware/middleware';


class Form extends Component {
    constructor() {
        super()
        this.state = {
            check='false'
        }
    }
    render() {
        return (
            <View>
                <View>
                    <View style={{ display='flex', flexDirection="row" }}>
                        <Icon name="arrow-dropright"></Icon>
                        <Text>Choose the screen Name </Text>
                    </View>
                    <Input type="text " placeholder="Enter a screen name" />



                </View>
                <View>
                    <View style={{ display='flex', flexDirection="row" }}>
                        <Icon name="arrow-dropright"></Icon>
                        <Text>Choose your skills(s) </Text>
                    </View>
                    <Input type="text " placeholder="Enter a screen name" />



                </View>
                <View>
                    <View style={{ display='flex', flexDirection="row" }}>
                        <Icon name="arrow-dropright"></Icon>
                        <Text>Choose your favorite nets </Text>
                        <Icon name="md-add" style={{ color='green' }}></Icon>

                    </View>
                    <View style={{display:'flex',flexDirection:'row'}}>

                        <ListItem>
                            <CheckBox onpress={() => {
                                this.state.check
                            }} check={this.state.check} />
                            <Body>
                                <Text>Discussion with Client</Text>
                            </Body>
                        </ListItem>

                    </View>
                    <View>
                        <Icon name="checkmark" ></Icon>

                    </View>

                </View>


            </View>



        )
    }
}