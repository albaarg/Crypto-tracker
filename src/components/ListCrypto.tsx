import React from 'react'
import {Text, TouchableOpacity } from 'react-native'
import { ItemWrapper, TitleWrapper, Title, SubTitle, CryptoImage, WrapperLeft, WrapperRight, ItemPrice } from './index';


const ListCrypto = () => {
  return (
    <TouchableOpacity>
      <ItemWrapper>
        <WrapperLeft>
          <CryptoImage source={{ uri: 'https://picsum.photos/200/300?grayscale' }} />
          <TitleWrapper>
            <Title><Text>Ethereum</Text></Title>
            <SubTitle><Text>ETS</Text></SubTitle>
          </TitleWrapper>
        </WrapperLeft>
        <WrapperRight>
          <Title><Text>Ethereum</Text></Title>
          <ItemPrice><Text>ETH</Text></ItemPrice>
        </WrapperRight>
      </ItemWrapper>
    </TouchableOpacity>
  )
}

export default ListCrypto
