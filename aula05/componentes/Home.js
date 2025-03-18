import { SafeAreaView,StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';

export default function Home(props) {
  return (
    <ImageBackground
      style={styles.imgBackground}
      source={require('../assets/1.jpg')}
    >
    <SafeAreaView style={styles.container}>
      

    <View style={styles.principal}>
      <Text style={styles.titulo}>Cantigas do Inferno</Text>
      <Text style={styles.subtitulo}>Veja a HISTÓRIA e a biografia do protagonista</Text>
    </View>


    <View>
      <TouchableOpacity style={styles.button} onPress={()=>{props.navigation.navigate('Pag1')}}>
        <Text style={styles.textbutton}>HISTÓRIA</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={()=>{props.navigation.navigate('Pag2')}}>
        <Text style={styles.textbutton}>protagonista</Text>
      </TouchableOpacity>
    </View>

    </SafeAreaView> 
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize:30,
    color: '#E2AA44'
  },
  subtitulo:{
    fontSize:15,
    color: '#E2AA44'
  },
  button:{
    margin:10,
    padding:5,
    backgroundColor: 'rgba(151, 7, 0, 0.5)',
    borderRadius:5,
    borderColor:'#000',
    alignItems:'center'
  },
  textbutton:{
    fontSize:20,
    color: '#E2AA44'
  },
  principal:{
    alignItems:'center',
    marginBottom: 100,
    borderWidth: 2,
    padding: 10,
    backgroundColor: 'rgba(151, 7, 0, 0.5)',
  },
  img:{
    height:550,
  },
  imgBackground: {
    flex: 1,
    justifyContent: 'center', // Alinha o conteúdo ao centro verticalmente
    alignItems: 'center', // Alinha o conteúdo ao centro horizontalmente
  },
});