import React from 'react';
import styled from 'styled-components/native';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Colors} from '../theme/index'

//Header
export const Container = styled.View `
background-color:${Colors.container}
paddingHorizontal:22px
padding-top:20px
padding-bottom:20px
flex-direction:row
justify-content:space-between
align-items:center
`
export const MyText = styled.Text `
font-size:22px
color:${Colors.white}
font-weight:bold
margin:10px
`
export const AvatarImage = styled.Image`
height:55px
width:55px
border-radius:35px
margin:10px
`
//ListCrypto

export const WrapperContainer= styled.View`
display:flex
`
export const ItemWrapper = styled.View`
flex-direction:row
align-items:center
justify-content:space-between
margin-top:35px
padding-horizontal:18px
`
export const LeftWrapper = styled.View`
flex-direction:row
align-items:center
`
export const CryptoImage = styled.Image`
width:50px
height:50px
`
export const Title = styled.Text`
width:100%
font-size:18px
font-weight:bold
color:${Colors.black}
`
export const SubTitle = styled.Text`
font-size:14px
margin-top:4px
color:${Colors.gray}
`
export const TitleWrapper = styled.View`
margin-left:15px
`
export const RightWrapper = styled.View`
align-items:flex-end
`
export const ArrowView = styled.View`
flex-direction:row
align-items:center
flex:1
`
export const ArrowImage = styled.Image`
width: 12px
height:10px
`

