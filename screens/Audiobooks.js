import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AudiobooksScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Audiobooks!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default AudiobooksScreen;
