import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const EbookScreen = (props) => {
  const data = [
    {id: 'b1', title: 'Some title'},
    {id: 'b2', title: 'Some title'},
    {id: 'b3', title: 'Some title'},
    {id: 'b4', title: 'Some title'},
    {id: 'b5', title: 'Some title'},
    {id: 'b6', title: 'Some title'},
    {id: 'b7', title: 'Some title'},
    {id: 'b8', title: 'Some title'},
    {id: 'b9', title: 'Some title'},
    {id: 'b10', title: 'Some title'},
    {id: 'b11', title: 'Some title'},
    {id: 'b12', title: 'Some title'},
    {id: 'b13', title: 'Some title'},
    {id: 'b14', title: 'Some title'},
    {id: 'b15', title: 'Some title'},
    {id: 'b16', title: 'Some title'},
    {id: 'b17', title: 'Some title'},
    {id: 'b18', title: 'Some title'},
    {id: 'b19', title: 'Some title'},
    {id: 'b20', title: 'Some title'},
    {id: 'b21', title: 'Some title'},
    {id: 'b22', title: 'Some title'},
    {id: 'b23', title: 'Some title'},
    {id: 'b24', title: 'Some title'},
    {id: 'b25', title: 'Some title'},
    {id: 'b26', title: 'Some title'},
    {id: 'b27', title: 'Some title'},
    {id: 'b28', title: 'Some title'},
    {id: 'b29', title: 'Some title'},
    {id: 'b30', title: 'Some title'},
  ];
  return (
    <View style={styles.screen}>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({item, index}) => (
          <View
            style={{
              marginTop: index >= 2 && index % 2 === 0 ? -45 : 0,
            }}>
            <View
              style={{
                height: index === 0 && index % 2 === 0 ? 155 : 200,
                width: 150,
                backgroundColor: index % 2 === 0 ? '#ccc' : '#ccc',
                borderColor: index % 2 === 0 ? '#ccc' : '#ccc',
                borderWidth: 1,
                margin: 5,
                borderRadius: 10,
                padding: 10,
                zIndex: index % 2 !== 0 ? 15 : 0,
              }}>
              <View style={{flex: 1}}>
                <Text>{item.title}</Text>
              </View>
            </View>
          </View>
        )}
      />
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
export default EbookScreen;
