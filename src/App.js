import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import Config from 'react-native-config';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

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
    const store = createStore(
      reducers,
      { /* initial state */},
      applyMiddleware(ReduxThunk)
    );

    return (
      <Provider store={store}>
        <LoginForm />
    </Provider>
    );
  }
}

export default App;
