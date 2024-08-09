import { StyleSheet, Text, View } from "react-native";

export default function App(){
  return(
    <View style={{backgroundColor:"skyblue"}}>
      <Text>Hello World</Text>
      
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fff",
    alignItems:"center",
    justifyContent:"center"

  }
})