import axios from 'axios';

export const fetchData = async (currency: string) => {
  const response = await axios.get(
    ` https://economia.awesomeapi.com.br/last/${currency}-BRL`,
  );
  const data = response.data;
  return data;
};
