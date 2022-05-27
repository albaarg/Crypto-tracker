import React from 'react'
import {Text, TouchableOpacity, FlatList, View, StyleSheet, Image, Alert, ScrollView} from 'react-native'
import { ItemWrapper, Title, TitleWrapper, SubTitle, CryptoImage, LeftWrapper, RightWrapper, ItemPrice,WrapperContainer, ArrowView, ArrowImage } from './styles';
import { Cripto } from '../../src/interfaces/cripto'
import { RemoveCrypto } from '../storage/storage';

 type props = {
   data: Cripto
 }
const ListCrypto = ({data} : props) => {
  const getImageArrow = () => {
    if (data.percent_change_1h > 0) {
      return require('../assets/icons/arrow2.jpeg')
    }
    else {
      return require('../assets/icons/arrow1.jpeg')
    }
   }

   const getImageSymbol = () => {
     switch(data.symbol) {
       case'BTC':
          return require('../assets/icons/bitcoin.png')
       case'ETH':
          return require('../assets/icons/ethereum.jpeg')
       case'USDT':
          return require('../assets/icons/usdt.jpeg')
       case'BNB':
         return require('../assets/icons/bnb.jpeg')
       case'USDC':
         return require('../assets/icons/usdc.jpeg')
         default:
         return {uri: "https://picsum.photos/seed/picsum/200/300"}
     }
   }

   const removeHandle = (id: number | string) => {
    Alert.alert(
      'Eliminar Cripto',
      'Estas seguro de eliminar la cripto?',
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () =>  RemoveCrypto(id)}
      ]
    );
   }
  return (
    <WrapperContainer onPress={() => removeHandle(data.id)}>
    <ItemWrapper>
      <LeftWrapper>
      <CryptoImage source={getImageSymbol()}/>
      <TitleWrapper>
      <Title >{data.name}</Title>
      {"\n"}
      <SubTitle>{data.symbol}</SubTitle>
      </TitleWrapper>
      </LeftWrapper>
      <RightWrapper>
      <Title>${data.price_usd}</Title>
      <ArrowView>
      <ArrowImage source={getImageArrow()}/>
      <SubTitle>{data.percent_change_24h}</SubTitle>
      </ArrowView>
      </RightWrapper>
    </ItemWrapper>
    </WrapperContainer>
  )
}

export default ListCrypto
