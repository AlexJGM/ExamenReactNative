import React, { Component } from "react";
import { TouchableOpacity, Text } from "react-native";
import { StyleSheet } from "react-native";

export default class Botones extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { texto } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={() => this.props.escribir(texto)} >
        <Text style={styles.texto}>{texto}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: 90,
    height: 93,
    justifyContent: 'center',
    borderColor: "black",
    borderWidth: 2,
  },
  texto: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: 'bold',
  },
});
