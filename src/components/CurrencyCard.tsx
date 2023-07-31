import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function CurrencyCard({currency, setCurrencyActive}: any) {
  const {name, code, flag, symbol} = currency;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setCurrencyActive(code)}>
        <View style={styles.containerCard}>
          <Text style={styles.textFlag}>{flag}</Text>
          <Text style={styles.textCard}>{name}</Text>
          <Text style={styles.textCard}>{symbol}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.8)',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    width: 160,
    height: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
  containerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textFlag: {
    fontSize: 30,
    marginRight: 5,
    color: '#000',
  },
  textCard: {
    margin: 1,
    fontSize: 14,
    color: '#000',
    fontWeight: '700',
  },
});
