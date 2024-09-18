import { Text, View } from "react-native";

export default function Index() {
  return (
    
    <View style= {styles.container}>
    
    <View style={styles.containerLogo}>
        <Image style={styles.logo} source={require('../assets/images/nubank-logo-branco.png')} />
      </View>
      <View style = {styles.cliente}>
        <Text>Olá, felipe</Text>
        
      </View> 
      <View style = {styles.cartao}>
      <Text>Cartao de credito</Text>
    </View>
    <View>
      <Text style = {styles.conta}>Conta</Text>
    </View>
</View> 
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8B03BB',
    
  },
  containerLogo: {
    marginBottom: 30,
    paddingTop: 60,
    height: 100,
   
  }
  })