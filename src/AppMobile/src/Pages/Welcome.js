import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
 
import * as  Animatable from 'react-native-animatable'
import {useNavigation, NavigationActions} from '@react-navigation/native'

export default function Welcome() {
  const navigation = useNavigation();
  setTimeout(()=>{navigation.navigate('LoginPage')}, 3000 );

  return (
    <View style={styles.container} >
      <View style={styles.containerLogo}>
        <Animatable.Image
        animation="flipInY"
        source={require('../../assets/chatter.png')}
        style={{width:"70%"}}
        resizeMode="contain"/>
      </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#F74F43'
  },
  containerLogo:{
    flex: 2,
    backgroundColor:'#A0CFD3',
    justifyContent:'center',
    alignItems:'center'
    
  },
  containerForm:{
  flex:1,
  backgroundColor:'#A0CFD3',
  borderTopLeftRadius:25,
  borderTopRightRadius:25,
  paddingStart:'5%',
  paddingEnd:'5%',
  },
  title:{
    fontSize:24,
    fontWeight:'bold',
    marginTop:28,
    marginBottom:12,
  },
  text:{
  color:'#a1a1a1a1'
  },
  button:{
    position:'absolute',
    backgroundColor:'#F74F43',
    borderRadius: 50,
    paddingVertical: 8,
    width:'60%',
    alignSelf:'center',
    bottom:'15%',
    alignItems:'center',
    justifyContent:'center'
  },
  buttonText:{
    fontSize:18,
    color:'#FFF',
    fontWeight: 'bold'

  }

})