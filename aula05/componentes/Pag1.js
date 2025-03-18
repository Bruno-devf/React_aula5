import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function Pag1() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.TITULO}>HISTÓRIA</Text>
      <View style={styles.border}>
        <Image style={styles.img} source={require('../assets/2.jpg')} />
        <Text style={styles.Mplaca}>
        Hellsing segue a história de Sir Integra Hellsing, líder da organização Hellsing, que combate ameaças sobrenaturais, principalmente vampiros. Seu maior aliado é Alucard, um vampiro poderoso que trabalha para ela. Juntos, enfrentam o Exército Romano de Vampiros, a organização nazista Millennium, e outras forças sobrenaturais, enquanto a lealdade e o controle sobre Alucard são testados. A trama mistura ação, mistério e violência, abordando temas como a luta entre o bem e o mal, e a imortalidade de Alucard.
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    fontFamily: 'Impact',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TITULO: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#e2aa44',
    marginBottom: 5
  },
  Mplaca: {
    padding: 40,
    fontSize:15,
    color: '#fff',
  },
  border: {
    borderWidth: 2,
    borderColor: '#fff', 
    padding: 20,
    backgroundColor:'#7b0000'
  },
  img:{
    width:350,
    height:250
  }
});
