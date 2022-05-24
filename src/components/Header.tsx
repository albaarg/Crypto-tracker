import React from 'react'
import { View, Text, Image } from 'react-native'
import styled from 'styled-components/native';
import {Container, MyText, AvatarImage} from './index'

const Header = () => {
  return (
    <Container>
      <MyText>CryptoTracker Pro</MyText>
      <AvatarImage source={{uri: 'https://picsum.photos/id/237/200/300'}}/>
    </Container>
  )
}

export default Header
