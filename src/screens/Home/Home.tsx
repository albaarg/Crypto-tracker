import React, { useEffect, useState } from 'react'
import { ScrollView, View, Text } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './../../../App';
import Header from '../../components/Header';
import Crypto from '../../screens/Crypto/Crypto';
import ListCrypto from '../../components/ListCrypto'
import styled from 'styled-components/native';
import { MyButton, TextButton, ListContainer, TitleText, ContainerTitle } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_PRICING } from '../../types';
import { getPricings } from '../../store/selectors/crypto';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { GetCrypto } from '../../storage/storage'
import { Coin } from '../../interfaces/Coin';
import asyncstorage from '@react-native-async-storage/async-storage';

type SectionScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Crypto'
>;

type Props = {
  navigation: SectionScreenNavigationProp;
};

const Home = ({ navigation }: Props) => {
  const dispatch = useDispatch()
  const [cryptos, SetCryptos] = useState<Coin[]>([])
  const [priceRefresh, setPriceRefresh] = useState(false)

  const getPricing = async ({start, limit}: { start?: number; limit: number }) => {
    
    try {
      const response = await fetch(`https://api.coinlore.net/api/tickers?start=${start || 0}&limit=${limit}`);
      const result = await response.json();

      dispatch({
        payload: result.data,
        type: LOAD_PRICING
      });

      SetCryptos(result.data)

      if (response) {
        setTimeout(() => {
          setPriceRefresh(!priceRefresh)
        }, 2000)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    GetCrypto().then(value =>
      SetCryptos(value)
    );
  }, [])

  useEffect(() => {
    getPricing({ limit: 5 })
  }, [priceRefresh])

  return (
    <ScrollView>
      <Header />
      <ContainerTitle>
        <TitleText>{cryptos.length > 0 ? "My List" : "No coins added yet"}</TitleText>
      </ContainerTitle>
        <ListContainer>
          {cryptos && cryptos.map(item => <ListCrypto key={item.id} data={item} />)}
          <MyButton onPress={() => navigation.navigate.bind(null)("Crypto")}>
            <TextButton>+ Add a cryptocurrency</TextButton>
          </MyButton>
        </ListContainer>
    </ScrollView>
  )
}

export default Home
