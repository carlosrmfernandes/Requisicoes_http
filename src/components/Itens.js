/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,Linking} from 'react-native';


export default class Itens extends Component<Props> {
  render() {
    return (
      <View style={styles.viewitens}>
        <View style={styles.foto}>
          <Image
          style={{width: 100, height: 100}}
          source={{uri: this.props.intens.foto}}
          />
          </View>
        <View style={styles.detalheitens}>
          <Text style={styles.titulo}>{this.props.intens.titulo}</Text>
          <Text style={{color: 'blue'}}
          onPress={() => Linking.openURL('https://www.guiamais.com.br/criciuma-sc/comercio-de-produtos-e-servicos/lojas-de-eletronicos')}>
          Visita a loja
          </Text>
          <Text style={styles.valor}>R$ {this.props.intens.valor}</Text>
          <Text style={styles.local}>Local : {this.props.intens.local_anuncio}</Text>
          <Text style={styles.data}>Data publicação : {this.props.intens.data_publicacao}</Text>
          </View>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  viewitens: {
    borderWidth:1,
    margin:15,
    padding:15,
    flexDirection:'row',
    backgroundColor:'#FFF',
    marginTop:40,
  },
  foto:{
    width:102,
    height:102,
  },
  detalheitens:{
    marginLeft:20,
    flex:1,
  },
  titulo:{
    fontSize:18,
    color:'blue',
  },
  valor:{
    fontSize:16,
    fontWeight:'bold',
  },
  local:{
    fontSize:16,
  },
  data:{
    fontSize:16,
  }
});
