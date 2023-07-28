import React from 'react';
import 'react-native-gesture-handler'
import SheeTInformationAbout from './components/LandingInformation';
import { Provider } from 'react-redux';
import store from './Redux/Store/index.js'

export default function App() {
  return (
    <Provider store={store}>
      <SheeTInformationAbout/>
    </Provider>
  );
}

