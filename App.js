import React from 'react';
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {HomeStackScreen} from './screen/Navigator';

const App = () => {
  return (
    <NavigationContainer>
      <HomeStackScreen />
    </NavigationContainer>
  );
};

export default App;
