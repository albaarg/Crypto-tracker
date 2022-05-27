import React from 'react';
import styled from 'styled-components/native';
import {View, Text, Image, TextInput} from 'react-native';

export const Background = styled.View`
background-color:white
`
export const Container = styled.View`
display:flex
height: 100%
width: 100%
justify-content:center
align-items:center
`
export const AddCrypto = styled.Text`
color:black
font-weight:bold
font-size:25px
margin:5px
padding: 5px
`
export const ViewInput = styled.View`
background-color:#f9fafb
margin:15px
width:70%
border:#e2e8f0
`
export const SearchCrypto = styled.TextInput`
border-color:red
padding-horizontal:10px
padding-vertical:10px
`
export const AddButton = styled.TouchableOpacity`
flex-direction:row
background-color:#fcd34d
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
