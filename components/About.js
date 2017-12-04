import React, { Component } from 'react'
import style from '../public/styles'
import { View, Text, StyleSheet, Image, Button } from 'react-native'

export default class About extends Component {

    static navigationOptions = {
        tabBarIcon: () => {
            return <Image source={require('./../img/user.png')} style={{width: 24, height: 24}} />
        }
    }

    search () {
        this.props.navigation.navigate('Search')
    }

    render() {
        return (
            <View style={style.view}>
                <Text style={style.title}>A propos de moi</Text>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusamus, aliquid aperiam atque dolorem eaque eius error eveniet, in magni qui repellendus ullam, vel.
                    Commodi delectus facilis quidem reiciendis unde voluptates!
                </Text>
                <Button onPress={() => this.search()} title="Rechercher" style={style.button.color} />
            </View>
        )
    }
}