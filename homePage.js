/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';

const HomePage = props => {
  const handleClick = () => {
    props.handleLogOut();
  };
  return (
    <View>
      <Text style={styles.sectionContainer}>Hello User</Text>
      <Button onPress={handleClick} title="Log out" marginTop={10} />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    fontSize: 26,
    textAlign: 'center',
  },
  logInBtn: {
    marginTop: 52,
    marginLeft: 12,
    marginRight: 12,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  errorMessage: {fontSize: 10, color: 'red', marginLeft: 12},
});

export default HomePage;
