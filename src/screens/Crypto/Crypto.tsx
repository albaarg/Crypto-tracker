import React, { useState } from 'react'
import { View, Text, SafeAreaView, TextInput, Image, TouchableOpacity, Alert } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './../../../App';
import { Container, AddCrypto, AddButton, TextAdd, Background, SearchCrypto, ViewInput } from './styles'
import { ArrowButton, IconButton } from '../../components/Button'
import { useDispatch, useSelector } from 'react-redux';
import { getPricings } from '../../store/selectors/crypto';
import { SetCrypto, GetCrypto } from '../../storage/storage';
import ListCrypto from '../../components/ListCrypto';
import { Left } from '../../assets/index';

type SectionScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

type Props = {
  navigation: SectionScreenNavigationProp;
};

const Crypto = ({ navigation }: Props) => {
  const [search, SetSearch] = useState('')
  const cryptos = useSelector(getPricings)

  const SaveCrypto = () => {
    const FindCrypto = cryptos.find(crypto => {
      return crypto.symbol.toString().toLowerCase().includes(search.toString().toLowerCase())
        || crypto.name.toString().toLowerCase().includes(search.toString().toLowerCase());
    })
    if (!FindCrypto) {
      Alert.alert('Coin not found: ' + FindCrypto);
    } else {
      const listCrypto = GetCrypto().then(value => {
        let existCrypto = false
        value.forEach(element => {
          if ((element.symbol.toString().toLowerCase() === search.toString().toLowerCase()) ||
            (element.name.toString().toLowerCase() === search.toString().toLowerCase())) {
            existCrypto = true
          }
        })
        if (existCrypto) {
          Alert.alert('Its already on the list')
          navigation.push('Home')
        } else {
          SetCrypto(FindCrypto).then(() => navigation.push('Home'));
        }
      })
    }
  };

  return (
    <SafeAreaView>
      <Background>
        <ArrowButton onPress={navigation.goBack.bind(null)} >
          <IconButton source={Left} />
        </ArrowButton>
        <Container>
          <AddCrypto> Add a Cryptocurrency </AddCrypto>
          <ViewInput>
            <SearchCrypto placeholder="Use a name or ticker symbol..." onChangeText={value => SetSearch(value)} />
          </ViewInput>
          <AddButton onPress={SaveCrypto}>
            <TextAdd>Add</TextAdd>
          </AddButton>
        </Container>
      </Background>
    </SafeAreaView>
  )
}

export default Crypto
