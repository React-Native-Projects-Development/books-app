import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, Image} from 'react-native';

const EbookScreen = (props) => {
  const API_KEY = 'AIzaSyAl2L0iYk5z4SNjcFGFIBkQvk4ixiSxXM8';

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=lord+of+the+rings&key=${API_KEY}`,
    )
      .then((response) => response.json())
      .then((result) => {
        setBooks(result.items);
      });
  }, []);

  return (
    <View style={styles.screen}>
      <FlatList
        data={books}
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
                overflow: 'hidden',
              }}>
              <View style={{flex: 1}}>
                <Image
                  source={{uri: item.volumeInfo.imageLinks?.thumbnail}}
                  style={{width: '100%', height: '100%'}}
                />
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
