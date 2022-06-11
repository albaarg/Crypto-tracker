import React from 'react';
import styled from 'styled-components/native';
import {View, Text, Image,TouchableOpacity} from 'react-native';
import {Colors} from '../../theme/index';

//HomeScreen
export const ListContainer = styled.View`
display:flex;
width:100%;
height:100%;
`
export const MyButton = styled.TouchableOpacity`
widht: 50%
height:30px
border-radius:10px
align-items: center
justify-content:center
margin:20px
`
export const TextButton = styled.Text`
color:${Colors.primary}
`
export const TitleText = styled.Text`
padding:8px
color:${Colors.primary}
`
export const ContainerTitle = styled.View`
align-items:center`

