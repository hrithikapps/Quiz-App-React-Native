import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Title from '../Components/Title'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title titletext='QuizX' />
      <View style={styles.bannerContainer}>
        <Image
          style={styles.banner}
          resizeMode='contain'
          source={{ uri: 'https://cdni.iconscout.com/illustration/premium/thumb/online-quiz-5718736-4779390.png' }}
        />
      </View>
      <TouchableOpacity 
      style={styles.button}
      onPress={()=>{navigation.navigate("Quiz")}}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  banner: {
    height: 400,
    width: 400,
  },
  bannerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex:1,
  },
  container:{
    paddingTop:30,
    paddingHorizontal:20,
    height:'100%',
  },
  button:{
    width:'100%',
    backgroundColor:'#1E2749',
    padding:20,
    borderRadius:16,
    alignItems:'center',
    marginBottom:35,
  },
  buttonText:{
    fontSize:24,
    fontWeight:'600',
    color:'white',
  }
})