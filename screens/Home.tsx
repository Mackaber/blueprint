import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import * as firebase from 'firebase';

const newFirebaseRecord = () => {
  firebase
  .database()
  .ref('records/' + 1)
  .set({
    record: "LOL Ima record"
  });
}

const Home = ({navigation}) => {

  mRecord = new BehaviorSubject('')
  const record = useObservableState(mRecord)
  
  firebase.database().ref('records/' + 1).on('value', (snapshot) => {
    mRecord.next(snapshot.val().record)
  });
  
  return(
    <View>
      <Text>Hello World!</Text>

      <Text>Record:</Text>
      <Text>{{record}}</Text>


      <Button onPress={ () => newFirebaseRecord() }>
        <Text>Magic!</Text>
      </Button>
    </View>
  );
}

export default Home;