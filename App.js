import React, { Component } from 'react'
import { View } from 'react-native'
import About from './components/About'
import Search from './components/Search'

export default class App extends Component {
    render () {
        return (
            <View style={{margin: 30}}>
                <Search />
            </View>
        )
    }
}

