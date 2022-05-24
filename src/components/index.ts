import React from 'react';
import styled from 'styled-components/native';
import {View, Text, Image} from 'react-native';

//Header
export const Container = styled.View `
background-color: #4D626C
paddingHorizontal: 22px
padding-top: 20px
padding-bottom:20px
flex-direction:row
justify-content:space-between
align-items:center
`
export const MyText = styled.Text `
font-size: 22px
color:white
font-weight: bold
margin: 10px
`
export const AvatarImage = styled.Image`
height:55px
width:55px
border-radius:35px
margin:10px
`

//ListCrypto
export const ItemWrapper = styled.View`
flex-direction:row
align-items:center
justify-content:space-between
margin-top:24px
padding-horizontal: 20px`

export const WrapperLeft = styled.View`
flex-direction:row
align-items:center
`
export const CryptoImage = styled.Image`
width: 70px
height: 70px
`
export const Title = styled.Text`
font-size: 18px
`
export const SubTitle = styled.Text`
font-size:14px
margin-top: 4px
color: blue
`
export const TitleWrapper = styled.Text`
margin-left: 18px
`

export const WrapperRight = styled.View`
align-items: flex-end
`

export const ItemPrice = styled.View`
color: red`

