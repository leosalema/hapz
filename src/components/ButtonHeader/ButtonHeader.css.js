/**
 * Nome: Body/Body.css.js
 * Data de criação: 06/06/2019
 * Autor: Leonardo Salema
 * Descrição: Estilo usado no ButtonHeader/index.js
 */

import { StyleSheet} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';

export default styles = StyleSheet.create ({
    buttons: {
      display: 'flex',
      flexDirection: 'row',
      flex: 1,
      width: 377,
      height: 44,
      backgroundColor: 'rgba(181, 181, 181, 0.2)',
      borderWidth: 1,
      borderRadius: 2,
      borderColor: 'rgba(181, 181, 181, 0.2)',
      borderBottomWidth: 0,
    },
    button: {
      width: widthPercentageToDP ('50%'),
      height: 42,
      justifyContent: 'center',
    },
    text: {
      fontFamily: 'Titillium Web',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 14,
      lineHeight: 0,
      display: 'flex',
      alignItems: 'center',
      textTransform: 'uppercase',
      textAlign: 'center',
  
      color: '#F2F2F2',
      textShadowColor: 'rgba(0,0,0,0.25)',
      textShadowOffset: {width: 0, height: 4},
      textShadowRadius: 4,
    },
  });
  