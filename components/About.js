import React, { Component } from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'

export default class About extends Component {
    render() {
        return (
            <View style={style.view}>
                <Text style={style.title}>A propos de moi</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusamus, aliquid aperiam atque dolorem eaque eius error eveniet, in magni qui repellendus ullam, vel.
                    Commodi delectus facilis quidem reiciendis unde voluptates!
                </Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    view: {
        margin: 20
    },
    title: {
        fontSize: 22,
        marginBottom: 25
    }
});