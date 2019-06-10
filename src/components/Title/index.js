/**
 * Nome: Title/index.js
 * Data de criação: 06/06/2019
 * Autor: Leonardo Salema
 * Descrição: Componente de criação dos titulos 
 */

import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './Title.css';

export default props => (
  <View style={styles.container}>
    <Image style={styles.logo} source={require ('../../../images/raio-01.png')} />
    <Text style={styles.title}>HAPZ</Text>
    <Text style={styles.messege1Header}>Você está sem saldo</Text>
    <Text style={styles.messege2Header}>Recaregue Agora</Text>
  </View>
);
