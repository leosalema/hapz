/**
 * Nome: CardHeader/index.js
 * Data de criação: 06/06/2019
 * Autor: Leonardo Salema
 * Descrição: Componente de montagem dos cartões usados no cabeçalho
 */

import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './CardHeader.css';

export default props => {
  console.log (props);
  return (
    <View style={styles.container}>
      <Text style={styles.valueCard}>{props.value}</Text>
      <Text style={styles.messageCard}>{props.messageCard}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.handleHire(props.value)}
      >
        <Text style={styles.messageButton}>Contratar</Text>
      </TouchableOpacity>
    </View>
  );
};