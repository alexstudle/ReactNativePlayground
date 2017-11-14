import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import About from './components/About'
import Search from './components/Search'
import { TabNavigator } from 'react-navigation'

const Tabs = TabNavigator({
    Search: {screen: Search},
    About: {screen: About}
}, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
        showIcon: true,
        showLabel: true,
        indicatorStyle: {
            height: 3,
            backgroundColor: '#FFF'
        },
        style: {
            backgroundColor: '#A2273C',
            borderTopWidth: 1,
            borderColor: '#3d111b'
        }
    }
});

export default class App extends Component {
    render () {
        return (
            <View style={{flex: 1, marginTop: 60}}>
                <StatusBar hidden={true} />
                <Tabs />
            </View>
        )
    }
}

