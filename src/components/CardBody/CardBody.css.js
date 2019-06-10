/**
 * Nome: Body/CardBody.css.js
 * Data de criação: 09/06/2019
 * Autor: Leonardo Salema
 * Descrição: Estilo usado no CardBody/index.js
 */

import { StyleSheet} from 'react-native';
import {
    widthPercentageToDP,
    heightPercentageToDP,
  } from 'react-native-responsive-screen';
  
export default styles = StyleSheet.create ({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'flex-end',
      justifyContent: 'space-around',
      margin: widthPercentageToDP ('5%'),
      marginBottom: widthPercentageToDP('15%'),
    },
    imgCupom: {
      width: widthPercentageToDP ('40%'),
      height: 119.1,
      shadowOffset: {width: 0, height: 1},
      shadowRadius: 2,
      shadowColor: 'rgba(0,0,0,0.1)',
      borderRadius: 3.855714,
    },
    buttonSignIt: {
      left: widthPercentageToDP ('20%'),
      top: heightPercentageToDP ('1.5%'),
      width: 59.02,
      height: 21.46,
      backgroundColor: '#2F80ED',
      borderRadius: 2.02041,
      justifyContent: 'center',
    },
    textSignIt: {
      color: '#FFF',
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: 10,
      lineHeight: 13,
      textAlign: 'center',
    },
    titleCupom: {
      position: 'absolute',
      top: 84,
      left: 8,
      width: 128.76,
      height: 20.39,
      fontFamily: 'Titillium Web',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 24,
      color: '#FFF',
    },
    message1: {
      position: 'absolute',
      top: 122,
      left: 8,
      width: 125.37,
      height: 20.39,
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: 16,
      lineHeight: 19,
      color: '#000',
    },
    message2: {
      position: 'absolute',
      top: 144,
      left: 8,
      width: 152.37,
      height: 13.39,
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: '300',
      fontSize: 13,
      textTransform: 'uppercase',
      lineHeight: 15,
      color: '#000',
    },
  });
  