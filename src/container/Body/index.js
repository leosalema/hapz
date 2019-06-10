/**
 * Nome: Body/index.js
 * Data de criação: 06/06/2019
 * Autor: Leonardo Salema
 * Descrição: Container responsável por montar uma lista com as ofertas recebidas
 *  via API
 */

import React from 'react';
import {FlatList} from 'react-native';
import CardBody from '../../components/CardBody';
import styles from './Body.css';

export default props => (
  <FlatList
    style={styles.container}
    data={props.body}
    numColumns={2}
    keyExtractor={item => item.id}
    renderItem={({item}) => {
      return (
        <CardBody
          style={styles.card}
          image={item.image}
          name={item.name}
          description={item.description}
          gain={item.gain}
        />
      );
    }}
  />
);