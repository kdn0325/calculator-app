import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import Caculator from './src/screens/Caculator';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Caculator />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
