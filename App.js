import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header} >
        <Text style={styles.headerText} >Header</Text>
      </View>
      <View style={styles.main}>
        <Text style={styles.text}>Hola coder!!!</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",

  },
  header: {

    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "indigo"



  },
  headerText: {
    color: "white",
    fontWeight: "bold"


  }

  ,
  main:{
    flex:0.9,
    justifyContent:'center',
    alignItems:"center"


  },

  text: {
    color: "indigo",
  }
});
