import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
// import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';
import Crypto from '../Crypto'
import ListCrypto from '../../components/ListCrypto'
import styled from 'styled-components/native';

const MyButton = styled.TouchableOpacity`
widht: 50%
height: 30px
border-radius: 10px
align-items: center
justify-content:center`

const LineView = styled.View`
background-color: #A9ABB1
flex:6
align-items:center
justify-content:center
text-align:center`

const DividerLine = styled.View`
flex-direction:row
justify-content:center
align-items:center`

const Home = () => {
  // const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View>
      <Header/>
      <ListCrypto/>
      <View>
      </View>
      {/* <MyButton><Text>+ Add a cryptocurrency</Text></MyButton> */}
    </View>
    </SafeAreaView>
  
  )
}

export default Home
