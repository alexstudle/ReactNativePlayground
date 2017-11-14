import React, { Component } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

export default class Search extends Component {

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

    render () {
        return (
            <View>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    value={this.state.city}
                    onChangeText={(text) => this.setCity(text)}
                />
            </View>
        )
    }

}

const style = StyleSheet.create({

});