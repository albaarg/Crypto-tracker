import asyncstorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { string } from 'yup';
import { Coin } from '../interfaces/Coin';

export const SetCrypto = async (data: Coin) => {
  try {
    const AllCryptos = await GetCrypto();
    await asyncstorage.setItem('My-lista-de-cryptos', JSON.stringify([...AllCryptos, data]));
    Alert.alert('Added correctly')
  } catch (error) {
    console.error(error)
  }
}

export const GetCrypto = async () => {
  try {
    const ResultCrypto = await asyncstorage.getItem('My-lista-de-cryptos')
    return JSON.parse(ResultCrypto || "[]") as Coin[];
  } catch (error) {
    console.log(error)
    return []
  }
}

export const RemoveCrypto = async (id: number | string) => {
  try {
    const AllCripto = await GetCrypto().then(value => {
      const filterCoin = value.filter(Coin => Coin.id !== id);
      UpdateListCrypto(filterCoin)
      Alert.alert('Was deleted correctly')
    });
  } catch (error) {
    console.log(error)
    return []
  }
}

export const UpdateListCrypto = async (filterCripto: any) => {
  try {
    await asyncstorage.setItem('My-lista-de-cryptos', JSON.stringify(filterCripto))
  } catch (error) {
    console.log(error)
    return []
  }
}
