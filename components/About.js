import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Theme from '../Style.js'

const About = () => {
    return (
        <View style={Theme.container}>
            <Text style={Theme.title}> Account config</Text>
        </View>
    )
}

About.navigationOptions = {
     tabBarLabel: 'Account',
     tabBarIcon: ({ color }) => (
       <MaterialCommunityIcons name="account-details" color={color} size={26} />
     ),
}

export default About;