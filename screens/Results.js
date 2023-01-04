import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { route, Routes } from "react-router-dom";
import React from 'react'
import Title from '../Components/Title';

const Results = ({ navigation, route }) => {
  const { score } = route.params
  console.log({ score });
  return (

      <View style={styles.container}>
        <Title titletext='RESULTS'/>
        <Text style={styles.scoreValue}>{score}</Text>
        <View style={styles.bannerContainer}>
          <Image
            style={styles.banner}
            resizeMode='contain'
            source={{ uri: 'https://cdni.iconscout.com/illustration/premium/thumb/man-celebrating-victory-5627341-4688075.png' }}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}>
        <Text style={styles.buttonText}>Retry</Text>
        </TouchableOpacity>
      </View>
  


  )
}



export default Results

const styles = StyleSheet.create({
  banner: {
    height: 400,
    width: 400,
  },
  bannerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    // flex:1,
  },
  container:{
    paddingTop:10,
    paddingHorizontal:20,
    height:'100%',
  },
  button:{
    width:'50%',
    backgroundColor:'#1E2749',
    padding:16,
    borderRadius:16,
    alignItems:'center',
    marginBottom:35,
    alignSelf:'center'
  },
  buttonText:{
    fontSize:24,
    fontWeight:'600',
    color:'white',
  },
  scoreValue:{
    fontWeight:'800',
    fontSize:24,
    alignSelf:'center',
  }
})