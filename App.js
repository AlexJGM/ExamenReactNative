import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native';
import Botones from './componentes/Botones';
import { Component } from 'react';
import Pantalla from './componentes/Pantalla';
import { StatusBar } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      texto: "",
    }
  }

  escribir = (numeros) => {
    const num = this.state.texto + numeros;
    this.setState({ texto: num });
  };

  sumar = () => {
    const texto = this.state.texto;
    var conv = texto.match(/\d+/g);
    var total = 0;
    for (var i = 0; i < conv.length; i++) {
      total += parseInt(conv[i]);
    }
    console.log(total);
    this.setState({ texto: total.toString() });
  }

  resta = () => {
    const texto = this.state.texto;
    var conv = texto.match(/\d+/g);
    let total = parseInt(conv[0]);
    for (let i = 1; i < conv.length; i++) {
      total -= parseInt(conv[i]);
    }
    console.log(texto);
    console.log(total);
    this.setState({ texto: total.toString() });
  }

  multiplicacion = () => {
    const texto = this.state.texto;
    var conv = texto.match(/\d+/g);
    let total = 1;

    for (let i = 0; i < conv.length; i++) {
      total *= parseInt(conv[i]);
    }
    console.log(texto);
    console.log(total);
    this.setState({ texto: total.toString() });
  }

  dividir = () => {
    const texto = this.state.texto;
    var conv = texto.match(/\d+/g);
    let total = parseInt(conv[0]);

    for (let i = 1; i < conv.length; i++) {
      total /= parseInt(conv[i]);
    }
    console.log(texto);
    console.log(total);
    this.setState({ texto: total.toString() });
  }

  limpiar = () => {
    const texto = this.state;
    this.setState({ texto: "" });
  }

  igual = () => {
    const texto = this.state.texto;
    if (texto.includes('+')) {
      this.sumar();
    }
    if (texto.includes('-')) {
      this.resta();
    }
    if (texto.includes('X')) {
      this.multiplicacion();
    }
    if (texto.includes('/')) {
      this.dividir();
    }
  }

  render() {
    const { texto } = this.state;
    return (
      <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor="#141414" barStyle="light-content" />

        <Pantalla texto={texto} />
        <View style={styles.contenedor2}>
          <Botones texto={7} escribir={this.escribir} />
          <Botones texto={8} escribir={this.escribir} />
          <Botones texto={9} escribir={this.escribir} />
        </View>
        <View style={styles.contenedor2}>
          <Botones texto={4} escribir={this.escribir} />
          <Botones texto={5} escribir={this.escribir} />
          <Botones texto={6} escribir={this.escribir} />
        </View>
        <View style={styles.contenedor2}>
          <Botones texto={1} escribir={this.escribir} />
          <Botones texto={2} escribir={this.escribir} />
          <Botones texto={3} escribir={this.escribir} />
        </View>
        <View style={styles.contenedor2}>
          <Botones texto={"-"} escribir={this.escribir} />
          <Botones texto={0} escribir={this.escribir} />
          <Botones texto={"+"} escribir={this.escribir} />
        </View>
        <View style={styles.contenedor2}>
          <Botones texto={"X"} escribir={this.escribir} />
          <Botones texto={"/"} escribir={this.escribir} />
          <Botones texto={"C"} escribir={this.limpiar} />
        </View>
          <Botones texto={"="} escribir={this.igual} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262626',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contenedor2: {
    flexDirection: 'row',
  },
  boton: {
    backgroundColor: 'white',
    width: 100,
    height: 90,
    justifyContent: 'center',
    borderColor: "black",
    borderWidth: 2,
    marginBottom: 20,
  },
  texto: {
    textAlign: "center",
    fontSize: 20,
  }
});
