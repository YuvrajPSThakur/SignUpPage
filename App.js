import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import LoginForm from './loginForm';
import HomePage from './homePage';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [loggedIn, setLoggedIn] = React.useState(false);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        {loggedIn ? (
          <HomePage handleLogOut={() => setLoggedIn(false)} />
        ) : (
          <LoginForm handleLogIn={() => setLoggedIn(true)} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
