import React, {useState} from 'react';

import {Container, Segment, Content} from 'native-base';
import {Button} from 'react-native-paper';
import Colors from '../constants/Colors';
import EbookScreen from './Ebook';
import AudiobooksScreen from './Audiobooks';
import {View} from 'react-native';

const Home = (props) => {
  const [ebookSelected, setEbookSelected] = useState(true);
  const [audiobookSelected, setAudiobookSelected] = useState(false);

  return (
    <Container>
      <Segment
        style={{
          backgroundColor: '#f2f3f7',
          marginHorizontal: 10,
          padding: 5,
          marginVertical: 10,
          borderRadius: 5,
        }}>
        <Button
          mode={ebookSelected ? 'contained' : 'outlined'}
          style={{
            borderColor: 'transparent',
            flex: 1,
            justifyContent: 'center',
            height: '100%',
          }}
          labelStyle={{
            color: Colors.text,
            textAlign: 'center',
            fontSize: 14,
            textTransform: 'capitalize',
          }}
          color="#fff"
          onPress={() => {
            if (audiobookSelected) {
              setAudiobookSelected(false);
            }

            setEbookSelected(true);
          }}>
          Ebooks
        </Button>

        <Button
          mode={audiobookSelected ? 'contained' : 'outlined'}
          style={{
            borderColor: 'transparent',
            flex: 1,
            justifyContent: 'center',
          }}
          labelStyle={{
            color: Colors.text,
            textAlign: 'center',
            fontSize: 14,
            textTransform: 'capitalize',
          }}
          color="#fff"
          onPress={() => {
            if (ebookSelected) {
              setEbookSelected(false);
            }
            setAudiobookSelected(true);
          }}>
          Audiobooks
        </Button>
      </Segment>

      <View style={{flex: 1}}>
        {ebookSelected ? <EbookScreen /> : <AudiobooksScreen />}
      </View>
    </Container>
  );
};

export default Home;
