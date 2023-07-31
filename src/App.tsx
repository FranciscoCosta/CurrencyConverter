import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {currencyDataCard} from './Constants';
import CurrencyCard from './components/CurrencyCard';
import {fetchData} from './utils/fetchData';

function App(): JSX.Element {
  const [currencyActive, setCurrencyActive] = useState('');
  const [isloading, setIsLoading] = useState(false);
  const [currencyInfo, setCurrencyInfo] = useState<any>({});
  const [currencyValue, setCurrencyValue] = useState(0);

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
      <TextInput
        style={styles.valueInput}
        placeholder="Digite o valor"
        keyboardType="numeric"
        onChangeText={(text: string) => setCurrencyValue(+text)}
      />
      {currencyActive !== '' && (
        <View style={styles.working}>
          <View style={styles.display}>
            <Text style={styles.displayText}>
              1{currencyActive} = {currencyInfo.ask}BRL
            </Text>
          </View>
          <Text style={styles.displayTextValue}>
            {currencyValue} BRL ={' '}
            {(Number(currencyValue) / Number(currencyInfo.ask)).toFixed(2)}{' '}
            {currencyActive}
          </Text>
        </View>
      )}
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
    backgroundColor: '#46237A',
    padding: 10,
  },
  appTitle: {
    fontSize: 40,
    fontWeight: '800',
    color: '#FF495C',
    alignSelf: 'center',
    marginTop: 10,
    letterSpacing: 2,
  },
  containerCards: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: '100%',
    marginTop: 30,
  },
  working: {
    backgroundColor: '#FCFCFC',
    minHeight: 70,
    borderRadius: 10,
    padding: 10,
    marginTop: 30,
  },
  valueInput: {
    backgroundColor: '#FCFCFC',
    height: 50,
    borderRadius: 10,
    padding: 10,
    marginTop: 30,
    color: '#000',
  },
  display: {
    marginBottom: 10,
    width: '100%',
  },
  displayText: {
    color: '#2fc18c',
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'right',
  },
  displayTextValue: {
    color: '#46237A',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default App;
