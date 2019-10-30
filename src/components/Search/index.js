import React, {Component} from 'react';
import {Platform} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

import {View} from 'react-native';

export default class Search extends Component {
  render() {
    return (
      <GooglePlacesAutocomplete
        placeholder="Para onde voce quer ir?"
        placeholderTextColor="#333"
        onPress={(data, details) => {
          console.log(data);
        }}
        query={{
          key: 'AIzaSyBKY8BY2WMyfv8hRgTz1T5m-25g0y0JEY0',
          language: 'pt',
        }}
        textInputProps={{
          autoCapitalize: 'none',
          autoCorrect: false,
        }}
        fetchDetails
        enablePoweredByContainer="false"
        styles={{
          container: {
            position: 'absolute',
            top: Platform.select({ios: 60, android: 10}),
            width: '100%',
          },
          textInputContainer: {
            flex: 1,
            backgroundColor: 'transparent',
            height: 54,
            borderTopWidth: 0,
            borderBottomWidth: 0,
          },
          textInput: {
            height: 54,
            margin: 0,
            borderRadius: 0,
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 20,
            paddingRight: 20,
            marginTop: 0,
            marginBottom: 0,
            marginLeft: 0,
            marginRight: 0,
            elevation: 5,
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowOffset: {x: 0, y: 0},
            shadowRadius: 15,
            borderWidth: 1,
            borderColor: '#DDD',
            fontSize: 18,
          },
          listView: {
            borderWidth: 1,
            borderColor: '#DDD',
            backgroundColor: '#FFF',
            marginHorizontal: 20,
            elevation: 5,
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowOffset: {x: 0, y: 0},
            shadowRadius: 15,
            marginTop: 10,
          },
          description: {
            fontSize: 16,
            padding: 0,
            height: 58,
          },
          row: {},
        }}
      />
    );
  }
}
