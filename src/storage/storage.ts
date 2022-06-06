import asyncstorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { string } from 'yup';
import { Cripto } from '../interfaces/cripto';

export const SetCrypto = async (data: Cripto) => {
  try {
    const AllCriptos = await GetCrypto();
    await asyncstorage.setItem('My-lista-de-cryptos', JSON.stringify([...AllCriptos, data]));
    Alert.alert('Added correctly')
  } catch (error: any) {
    Alert.alert(error.message)
  }
}

export const GetCrypto = async () => {
  try {
    const ResultCrypto = await asyncstorage.getItem('My-lista-de-cryptos')
    return JSON.parse(ResultCrypto || "[]") as Cripto[];
  } catch (error: any) {
    Alert.alert(error.message)
    return []
  }
}

export const RemoveCrypto = async (id: number | string) => {
  try {
    const AllCripto = await GetCrypto().then(value => {
      const filterCripto = value.filter(cripto => cripto.id !== id);
      UpdateListCrypto(filterCripto)
      Alert.alert('Se elimino la cripto correctamente')
    });
  } catch (error: any) {
    Alert.alert(error.message)
    return []
  }
}

export const UpdateListCrypto = async (filterCripto: any) => {
  try {
    await asyncstorage.setItem('My-lista-de-cryptos', JSON.stringify(filterCripto))
  } catch (error: any) {
    Alert.alert(error.message)
    return []
  }
}
