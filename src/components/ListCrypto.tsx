import * as React from 'react'
import { TouchableOpacity, View, Alert, ScrollView } from 'react-native'
import { ItemWrapper, Title, TitleWrapper, SubTitle, CryptoImage, LeftWrapper, RightWrapper, WrapperContainer, ArrowView, ArrowImage } from './styles';
import { Coin } from '../../src/interfaces/Coin'
import { RemoveCrypto } from '../storage/storage';
import { CloseButton } from '../components/Button';
import {  Arrow, Arrow2, Bitcoin, Bnb, Close, Ethereum, Usdc, Usdt } from '../assets/index';

type props = {
  data: Coin
}

const ListCrypto = ({ data }: props) => {
  const getImageArrow = () => {
    if (data.percent_change_1h > 0) {
      return (Arrow2)
    }
    else {
      return (Arrow)
    }
  }

  const getImageSymbol = () => {
    switch (data.symbol) {
      case 'BTC':
        return (Bitcoin)
      case 'ETH':
        return (Ethereum)
      case 'USDT':
        return (Usdt)
      case 'BNB':
        return (Bnb)
      case 'USDC':
        return (Usdc)
      default:
        return { uri: "https://picsum.photos/seed/picsum/200/300" }
    }
  }

  const removeHandle = (id: number | string) => {
    Alert.alert(
      'Delete Crypto',
      'Are you sure delete crypto?',
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => RemoveCrypto(id) }
      ]
    );
  }
  return (
    <WrapperContainer>
      <ItemWrapper>
        <LeftWrapper>
          <TouchableOpacity onPress={removeHandle.bind(null, data.id)}>
            <CloseButton source={Close} />
          </TouchableOpacity>
          <CryptoImage source={getImageSymbol()} />
          <TitleWrapper>
            <Title >{data.name}</Title>
            <SubTitle>{data.symbol}</SubTitle>
          </TitleWrapper>
        </LeftWrapper>
        <RightWrapper>
          <Title>${data.price_usd}</Title>
          <ArrowView>
            <ArrowImage source={getImageArrow()} />
            <SubTitle>{data.percent_change_24h}</SubTitle>
          </ArrowView>
        </RightWrapper>
      </ItemWrapper>
    </WrapperContainer>

  )
}

export default ListCrypto
