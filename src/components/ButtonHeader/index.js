/**
 * Nome: ButtonHeader/index.js
 * Data de criação: 06/06/2019
 * Autor: Leonardo Salema
 * Descrição: Componente de criação dos botões do cabeçalho
 */

import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './ButtonHeader.css';
export default props => {
  return(
  <View style={styles.buttons}>
    <TouchableOpacity style={styles.button} onPress={() => props.handlePage('Credit')}>
      <Text style={styles.text}>Créditos</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => props.handlePage('Data')}>
      <Text style={styles.text}>Dados</Text>
    </TouchableOpacity>
  </View>
);}
