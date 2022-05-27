import React from 'react'
import { SafeAreaView } from 'react-native'
import styled from 'styled-components/native';
import {Container, MyText, AvatarImage} from './styles'

const Header = () => {
  return (
    <SafeAreaView>
    <Container>
      <MyText>CryptoTracker Pro</MyText>
      <AvatarImage source={{uri: 'https://picsum.photos/id/237/200/300'}}/>
    </Container>
    </SafeAreaView>
  )
}

export default Header
