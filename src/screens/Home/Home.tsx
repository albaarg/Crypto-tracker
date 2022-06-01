import React, { useEffect, useState } from 'react'
import { ActivityIndicator, ScrollView, View, Text, FlatList } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './../../../App';
import Header from '../../components/Header';
import Crypto from '../../screens/Crypto/Crypto';
import ListCrypto from '../../components/ListCrypto'
import styled from 'styled-components/native';
import { MyButton, TextButton, ListContainer } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_PRICING } from '../../types';
import { getPricings } from '../../store/selectors/crypto';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { GetCrypto } from '../../storage/storage'
import { Cripto } from '../../interfaces/cripto';
import asyncstorage from '@react-native-async-storage/async-storage';

type SectionScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Crypto'
>;

type Props = {
  navigation: SectionScreenNavigationProp;
};

const Home = ({ navigation }: Props) => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const [crryptos, SetCrryptos] = useState<Cripto[]>([])

  const getPricing = async (options: { start?: number; limit: number }) => {
    const { start, limit } = options;
    setLoading(true);

    try {
      const response = await fetch(`https://api.coinlore.net/api/tickers?start=${start || 0}&limit=${limit}`);
      const result = await response.json();

      dispatch({
        payload: result.data,
        type: LOAD_PRICING
      });
      setLoading(false)
    } catch (error: any) {
      setLoading(false)
      console.log(error.message)
    }
  }

  useEffect(() => {
    getPricing({ limit: 5 });
    GetCrypto().then(value => SetCrryptos(value));
  }, [])


  return (
    <ScrollView>
      <Header />
      {loading ? <ActivityIndicator size='large' /> : (
        <ListContainer>
          {crryptos && crryptos.map((crypto, index) => <ListCrypto key={index} data={crypto} />)}
          <MyButton onPress={() => { navigation.navigate("Crypto") }}>
            <TextButton>+ Add a cryptocurrency</TextButton>
          </MyButton>
        </ListContainer>
      )}
    </ScrollView>

  )
}

export default Home
