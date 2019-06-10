/**
 * Nome: Data/Data.css.js
 * Data de criação: 09/06/2019
 * Autor: Leonardo Salema
 * Descrição: Estilo utilizado no data/index.js
 */

import {StyleSheet} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';

export default (styles = StyleSheet.create ({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    flex: 1,
    width: widthPercentageToDP ('100%'),
    height: 424,
  },
  containerCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    margin: 10,
  },
}));
