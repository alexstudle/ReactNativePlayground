import React, { Component } from 'react'
import style from '../public/styles'
import { View, TextInput, StyleSheet, Image, Button } from 'react-native'

export default class Search extends Component {

    static navigationOptions = {
        tabBarIcon: () => {
            return <Image source={require('./../img/home.png')} style={{width: 24, height: 24}} />
        }
    }

    constructor (props) {
        super(props);
        this.state = {
            city: 'Strasbourg'
        }
    }

    setCity (city) {
        this.setState({
            city: city
        })
    }

    submit () {
        console.log();
    }

    render () {
        return (
            <View>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    value={this.state.city}
                    onChangeText={(text) => this.setCity(text)}
                />
                <Button onPress={() => this.submit()} title="Rechercher un ville" style={style.button.color} />
            </View>
        )
    }

}