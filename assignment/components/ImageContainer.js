import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const ImageContainer = () => {
  return (
    <View style={imageWrapper}>
      <Image
        style={imageProper}
        source={{ uri: 'https://i.ytimg.com/vi/kWq4XclcYko/hqdefault.jpg' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    height: 300,
    margin: 8
  },
  imageProper: {
    height: '100%'
  }
});

const { imageWrapper, imageProper } = styles;
export default ImageContainer;
