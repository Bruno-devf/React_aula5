import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function Pag1() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.TITULO}>Protagonista</Text>
      <View style={styles.border}>
        <Image style={styles.img} source={require('../assets/3.jpg')} />
        <Text style={styles.Mplaca}>
        Alucard é o protagonista da série Hellsing, um vampiro imortal e extremamente poderoso que serve à família Hellsing, uma organização responsável por proteger a Inglaterra de ameaças sobrenaturais. Originalmente conhecido como Dracula, Alucard foi transformado em vampiro durante a Idade Média e se tornou uma das criaturas mais temíveis do mundo. Após ser derrotado por Abraham Van Helsing, ele se tornou um servo da família Hellsing, trabalhando principalmente sob a liderança de Sir Integra Hellsing.

Apesar de sua crueldade e desejo por combate, Alucard desenvolve uma relação de respeito e lealdade com Integra, além de transformar a policial Seras Victoria em vampira e se tornar sua figura de mentor. Seu principal objetivo é encontrar um desafio digno de sua força e, ao longo da série, ele enfrenta vampiros, organizações secretas e outras ameaças. Com habilidades como regeneração rápida, força sobre-humana e a capacidade de se transformar em várias formas, Alucard é uma figura sombria, atormentada pela imortalidade e pelo desejo de morte, o que o torna um dos personagens mais complexos da história de Hellsing.
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
