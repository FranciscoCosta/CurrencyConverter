import axios from 'axios';

export const fetchData = async (currency: string) => {
  const response = await axios.get(
    ` https://economia.awesomeapi.com.br/last/${currency}-BRL`,
  );
  const result = response.data;
  const data = Object.values(result)[0];
  return data;
};
