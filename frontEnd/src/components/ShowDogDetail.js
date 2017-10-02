import React from 'react';
import { View, Text, Image } from 'react-native';
import ShowCard from './ShowCard';
import ShowCardSection from './ShowCardSection';
import Button from './ShowButton';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';

const ShowDogDetail = ({dog}) => {
  const { name, sex, description, age, size, photo, shelter_id } = dog
  console.log(photo)

  const likeDog = () => {
    axios.post('http://localhost:3000/dogs', dog)
  }

  const noThanks = () => {
    axios.delete('', dog)
  }

  return (
    <ShowCard>
      <ShowCardSection>
        <View style={styles.headContentStyle}>
          <Text>{name}</Text>
          <Text>{age}</Text>
          <Text>{sex}</Text>
          <Text>{description}</Text>
          <Text>{size}</Text>
          <Image style={{width: 100, height: 100}} source={{uri: photo}}/>
          <Button onPress={() => Actions.favorites} />
          <Button onPress={likeDog} />
        </View>
      </ShowCardSection>
    </ShowCard>
  );
};

const styles = {
  headContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  }
};

export default ShowDogDetail;
