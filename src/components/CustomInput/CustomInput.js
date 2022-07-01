import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput secvalue={value} onChangeText={setValue} placeholder={placeholder} secureTextEntry={secureTextEntry}/>

    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
    container:{
backgroundColor:'#efefef',
width:'100%',
borderColor:'#d3d3d3',
borderWidth:1,
borderRadius:5,
paddingVertical:5,
paddingHorizontal:10,
marginVertical:10,
    },
    input:{}
})