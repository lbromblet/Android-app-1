import * as React from 'react';
import { View, StatusBar } from 'react-native'
import About from './components/About'
import Search from './components/Search'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator  } from '@react-navigation/material-top-tabs';

const Tabs = createMaterialTopTabNavigator();

export default function App() {
  return (
    <View style={{flex: 1}}>
        <StatusBar hidden={true}/>
        <NavigationContainer>
              <Tabs.Navigator
                //https://reactnavigation.org/docs/material-bottom-tab-navigator/
                tabBarPosition="bottom"
                tabBarOptions = {{
                    showIcon: true,
                    showLabel: false,
                    indicatorStyle: {
                        height: 2,
                        backgroundColor: '#FFF'
                    },
                    style: {
                        backgroundColor: '#BBABA7',
                        borderColor: '#A99591',
                        borderTopWidth: 1
                    }
                }}
              >
                    <Tabs.Screen
                        name="Search"
                        component={Search}
                        options={Search.navigationOptions}
                    />
                    <Tabs.Screen
                        name="About"
                        component={About}
                        options={About.navigationOptions}
                    />
              </Tabs.Navigator>
        </NavigationContainer>
    </View>
  );
}

