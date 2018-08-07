/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ListView,ScrollView} from 'react-native';

import Itens from './Itens';
import axios from 'axios';
export default class ListaItens extends Component<Props> {

  /**
  Metodo Busca Facil
  fetch('http://faus.com.br/recursos/c/dmairr/api/itens.html').then((response)=>response.json()).then((responseJson)=>{
  console.log(responseJson);
  });
  fetch('http://faus.com.br/recursos/c/dmairr/api/itens.html').then((response)=>response.json()).then((responseJson)=>{
    this.setState({
      listaitens:responseJson
    });
  });
  Api
  https://jsonplaceholder.typicode.com/todos/
  */
  constructor(props){
    super(props);

    this.state={
      listaitens:[]
    };
  }

  componentWillMount(){
  axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
  .then(response=>{
    this.setState({
      listaitens:response.data
    });
  })
  .catch(()=>{alert("erro");});
  }
  render() {
    return (
      <View style={styles.principal}>

      <ScrollView>
        <View style={styles.fundo}>
          {this.state.listaitens.map((item)=>{
            return(
              <Itens key={item.titulo} intens={item}> </Itens>
            );
          })}
        </View>
        </ScrollView>
        </View>
    );
  }

}
const styles = StyleSheet.create({
fundo:{
  backgroundColor:'#DDD',
},
principal:{
  marginTop:35,
}

});
