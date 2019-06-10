/**
 * Nome: CardBody/index.js
 * Data de criação: 06/06/2019
 * Autor: Leonardo Salema
 * Descrição: Componente de montagem dos cartões de promoções do corpo da aplicação
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import styles from './CardBody.css';

export default props => (
  <View style={styles.container}>
    <ImageBackground
      style={styles.imgCupom}
      source={{url: props.image}}
    >
      <TouchableOpacity style={styles.buttonSignIt}>
        <Text style={styles.textSignIt}>Assine</Text>
      </TouchableOpacity>
      <Text style={styles.titleCupom}>{props.name}</Text>
    </ImageBackground>
    <Text style={styles.message1}>{props.description}</Text>
    <Text style={styles.message2}>{props.gain}</Text>
  </View>
);