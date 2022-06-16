/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email Address is Required'),
    password: yup
      .string()
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });
  const handleFormSubmit = values => {
    console.log(values);
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={values => handleFormSubmit(values)}
          validationSchema={loginValidationSchema}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
          }) => (
            <View>
              <Text style={styles.sectionContainer}>Log in</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('email')}
                value={values.email}
                placeholder="Enter your email"
              />
              {errors.email && (
                <Text style={styles.errorMessage}>{errors.email}</Text>
              )}
              <TextInput
                style={styles.input}
                onChangeText={handleChange('password')}
                secureTextEntry={true}
                value={values.password}
                placeholder="Enter your password"
              />
              {errors.password && (
                <Text style={styles.errorMessage}>{errors.password}</Text>
              )}
              <View style={styles.logInBtn}>
                <Button
                  title="Submit"
                  onPress={handleSubmit}
                  disabled={!isValid}
                  accessibilityLabel="Learn more about this purple button"
                />
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
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

export default App;
