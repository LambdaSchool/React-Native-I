import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
const narwhal = require('./images/narwhal.jpeg');

export default class App extends React.Component {
  render() {
    return (
      <View style={container}>
        <Text style={headerText}>Some Random Header</Text>
        <Image style={bannerImage} source={narwhal} />
        <View style = {options}>
          <Text style={optionsItem}>Like</Text>
          <Text style={optionsItem}>Share</Text>
          <Text style={optionsItem}>Comment</Text>
        </View>
        <Text style={textBox}>Mom: Cute!</Text>
        <Text style={textBox}>Hairstylist: What is that?!?!?!?</Text>
        <Text style={textBox}>Rando: FAKE!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerImage: {
    flex: 4,
    height: 100,
    width: 800,
  },
  headerText: {
    flex: 1,
    fontSize: 24,
    paddingTop: 60,
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionsItem: {
    marginTop: 10,
    marginBottom: 10,
    padding: 5,
    borderColor: 'black',
    borderWidth: 0.5,
  },
  textBox: {
    margin: 5,
    padding: 5,
    width: 350,
    justifyContent: 'flex-start',
    fontSize: 16,
    borderColor: 'black',
    borderWidth: 0.5,
  }
});

const { container, bannerImage, headerText, options, optionsItem, textBox } = styles;
