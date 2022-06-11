import React from 'react';
import styled from 'styled-components/native';
import {View, Text, Image, TextInput} from 'react-native';
import {Colors} from '../../theme/index';

export const Background = styled.View`
background-color:${Colors.white}
`
export const Container = styled.View`
display:flex
height: 100%
width: 100%
justify-content:center
align-items:center
`
export const AddCrypto = styled.Text`
color:${Colors.black}
font-weight:bold
font-size:25px
margin:5px
padding: 5px
`
export const ViewInput = styled.View`
background-color:${Colors.secondary}
margin:15px
width:70%
border:${Colors.border}
`
export const SearchCrypto = styled.TextInput`
padding-horizontal:10px
padding-vertical:10px
`
export const AddButton = styled.TouchableOpacity`
flex-direction:row
background-color:${Colors.bg}
width: 40%
height:40px
align-items:center
justify-content:center
margin-top:20px
margin:20px
padding:5px
border-radius:5px
`
export const TextAdd = styled.Text`
font-weight: bold
font-size:18px
`
