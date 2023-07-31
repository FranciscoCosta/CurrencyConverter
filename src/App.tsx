import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {currencyDataCard} from './Constants';
import CurrencyCard from './components/CurrencyCard';
import {fetchData} from './utils/fetchData';

function App(): JSX.Element {
  const [currencyActive, setCurrencyActive] = useState('');
  const [isloading, setIsLoading] = useState(false);
  const [currencyInfo, setCurrencyInfo] = useState([]);

  const getCurrencyInfo = async () => {
    const currencyInfoData = await fetchData(currencyActive);
    setCurrencyInfo(currencyInfoData);
    setIsLoading(false);
  };

  useEffect(() => {
    getCurrencyInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currencyActive]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.appTitle}>Conversão BRL</Text>
      <View style={styles.containerCards}>
        {!isloading &&
          currencyDataCard.map((currency: any) => (
            <CurrencyCard
              key={currency.name}
              currency={currency}
              setCurrencyActive={setCurrencyActive}
            />
          ))}
      </View>
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
  containerCards: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: '100%',
  },
});

export default App;
