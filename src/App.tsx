import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';

function App(): JSX.Element {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.appTitle}>Conversão BRL</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#092a4a',
    padding: 10,
  },
  appTitle: {
    fontSize: 40,
    fontWeight: '800',
    color: '#ff5500',
    alignSelf: 'center',
    marginTop: 10,
    letterSpacing: 2,
  },
});

export default App;
