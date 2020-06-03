import React , { useState, useEffect } from 'react'
import { Text, TextInput, View, FlatList, SafeAreaView, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Theme from '../Style.js'

const DATA = [
  {
    id: '1',
    title: 'First Item',
  },
  {
    id: '2',
    title: 'Second Item',
  },
  {
    id: '3',
    title: 'Third Item',
  },
];

function Item({ id, title, selected, onSelect }) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}
      style={[
        Theme.item,
        { backgroundColor: selected ? '#6e3b6e' : '#f9c2ff' },
      ]}
    >
      <Text style={Theme.titleList}>{title}</Text>
    </TouchableOpacity>
  );
}


const Home = () => {

    const [selected, setSelected] = React.useState(new Map());
    const [searchTerm, setSearchTerm] = React.useState('');
    const [searchResults, setSearchResults] = React.useState([]);

    const handleChangeText = text => {
        setSearchTerm(text)
        console.log(text)
    }

     React.useEffect(() => {
        const results = DATA.filter(DATA =>
           DATA.id.toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
     }, [searchTerm]);

    const onSelect = React.useCallback(
        id => {
          const newSelected = new Map(selected);
          newSelected.set(id, !selected.get(id));
          setSelected(newSelected);
        },
        [selected],
    );

    return (
        <SafeAreaView style={Theme.container}>
            <TextInput
                underlineColorAndroid='transparent'
                onChangeText={(text) => handleChangeText(text)}
                style={Theme.input}
                value={searchTerm}
            />
            <FlatList
                data={searchResults}
                renderItem={({ item }) =>
                    <Item
                        id = {item.id}
                        title={item.title}
                        selected={!!selected.get(item.id)}
                        onSelect={onSelect}
                    />
                }
                keyExtractor={item => item.id}
                extraData={selected}
            />
        </SafeAreaView>
    )
}

Home.navigationOptions = {
     tabBarLabel: 'List',
     tabBarIcon: ({ color }) => (
       <MaterialCommunityIcons name="playlist-edit" color={color} size={26} />
     ),
};

export default Home;