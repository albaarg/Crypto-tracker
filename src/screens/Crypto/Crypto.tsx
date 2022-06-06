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

type SectionScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

type Props = {
  navigation: SectionScreenNavigationProp;
};

const Crypto = ({ navigation }: Props) => {
  const [search, SetSearch] = useState('')
  const crryptos = useSelector(getPricings)

  const SaveCrypto = () => {
    const FindCrypto = crryptos.find(crypto => {
      return crypto.symbol.toString().toLowerCase().includes(search.toString().toLowerCase())
        || crypto.name.toString().toLowerCase().includes(search.toString().toLowerCase());
    })

    if (!FindCrypto) {
      Alert.alert('Coin not found: ' + FindCrypto);
    } else {
      let listcrypto = GetCrypto().then(value => {
        let ExistCrypto = false
        value.forEach(element => {
          if ((element.symbol.toString().toLowerCase() === search.toString().toLowerCase()) ||
            (element.name.toString().toLowerCase() === search.toString().toLowerCase())) {
            ExistCrypto = true
          }
        })

        if (ExistCrypto) {
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
        <ArrowButton onPress={() => navigation.goBack()} >
          <IconButton source={require('../../assets/icons/left.png')} />
        </ArrowButton>
        <Container>
          <AddCrypto>Add a Cryptocurrency</AddCrypto>
          <ViewInput>
            <SearchCrypto placeholder="Use a name or ticker symbol..." onChangeText={value => SetSearch(value)} />
          </ViewInput>
          <AddButton onPress={SaveCrypto}><TextAdd>Add</TextAdd></AddButton>
        </Container>
      </Background>
    </SafeAreaView>
  )
}

export default Crypto
