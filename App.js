import React from 'react';
import {StatusBar} from 'react-native';

import Main from './src/pages/Main';

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor= "#F25C05"
        barStyle = "light-content"
      />
      <Main />

    </>
  );
}


