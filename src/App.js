import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import Config from 'react-native-config';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: Config.API_KEY,
      authDomain: 'react-native-ex-manager.firebaseapp.com',
      databaseURL: 'https://react-native-ex-manager.firebaseio.com',
      projectId: 'react-native-ex-manager',
      storageBucket: 'react-native-ex-manager.appspot.com',
      messagingSenderId: Config.MESSAGEING_SENDER_ID
    });
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello World!
          </Text>
        </View>
    </Provider>
    );
  }
}

export default App;
