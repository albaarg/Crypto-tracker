import React, {useState} from 'react'
import { View, Text, SafeAreaView, TextInput, Image, TouchableOpacity, Alert} from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './../../../App';
import {Container, AddCrypto, AddButton, TextAdd, Background, SearchCrypto, ViewInput} from './styles'
import {ArrowButton, IconButton} from '../../components/Button'
import { useDispatch, useSelector } from 'react-redux';
import { getPricings } from '../../store/selectors/crypto';
import {SetCrypto} from '../../storage/storage';

type SectionScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

type Props = {
  navigation: SectionScreenNavigationProp;
};

const Crypto = ({navigation}: Props) => {
  const [search, SetSearch] = useState('')
  const crryptos = useSelector(getPricings)

  const SaveCrypto = () => {
    const FindCrypto = crryptos.find(crypto => crypto.symbol.toUpperCase() === search.toUpperCase());
    
    if (!FindCrypto) {
      Alert.alert('No se encontro alguna cripto con: ' + FindCrypto);
    } else {
      SetCrypto(FindCrypto).then(() => navigation.push('Home'));
    }
  }
  return (
    <SafeAreaView>
      <Background>
      <ArrowButton onPress={() =>navigation.goBack()} >
        <IconButton source={require('../../assets/icons/left.png')}/>
        </ArrowButton>
      <Container>
      <AddCrypto>Add a Cryptocurrency</AddCrypto>
      <ViewInput>
      <SearchCrypto placeholder="Use a name or ticker symbol..." onChangeText={value => SetSearch(value)}/>
      </ViewInput>
      <AddButton onPress={SaveCrypto}><TextAdd>Add</TextAdd></AddButton>
    </Container>
    </Background>
    </SafeAreaView>
  )
}

export default Crypto
