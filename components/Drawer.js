import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Drawer = (props) => {
  return (
    <View style={styles.screen}>
      <Text>A text</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: '60%',
    height: 500,
    zIndex: 10000,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
});
export default Drawer;
