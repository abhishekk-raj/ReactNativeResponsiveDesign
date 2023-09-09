/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Routes from './src/Navigation/Routes';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Routes />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
