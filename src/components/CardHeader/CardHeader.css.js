/**
 * Nome: CardHeader/CaerdHeader.css.js
 * Data de criação: 06/06/2019
 * Autor: Leonardo Salema
 * Descrição: Estilo usado no CardHeader/index.js
 */

import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create ({
    container: {
      flex: 5,
      display: 'flex',
      width: 159,
      height: 114,
      backgroundColor: '#F2F2F2',
      borderRadius: 8,
      shadowColor: 'rgba(0,0,0,0.25)',
      shadowOffset: {width: 0, height: 4},
      shadowRadius: 34,
      margin: 10,
    },
    valueCard: {
      flex: 2,
      fontFamily: 'Titillium Web',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 36,
      lineHeight: 55,
      textAlign: 'center',
      textTransform: 'uppercase',
      color: '#2E7CE6',
    },
    messageCard: {
      flex: 1,
      fontFamily: 'Titillium Web',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 10,
      lineHeight: 15,
      textAlign: 'center',
      color: '#828282',
    },
    button: {
      flex: 1,
      backgroundColor: '#F2994A',
      borderBottomEndRadius: 8,
      borderBottomLeftRadius: 8,
    },
    messageButton: {
      flex: 1,
      fontFamily: 'Titillium Web',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 14,
      lineHeight: 0,
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      textTransform: 'uppercase',
      color: '#55361A',
      paddingTop: 5,
    },
  });
  