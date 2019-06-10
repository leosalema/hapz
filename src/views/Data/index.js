/**
 * Nome: Data/index.js
 * Data de criação: 06/06/2019
 * Autor: Leonardo Salema
 * Descrição: Tela de apresentação da opção de dados os dados são recebidos
 * via API e enviados via enventos para os componentes usados na construção da tela
 */

import React, {Component} from 'react';
import {
  ScrollView,
  View,
  ImageBackground
} from 'react-native';
import axios from 'axios';
import styles from './Data.css';
import Title from '../../components/Title';
import ButtonHeader from '../../components/ButtonHeader';
import CardHeader from '../../components/CardHeader'
import Body from '../../container/Body';

export default class Credit extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor (props) {
    super (props);

    this.state = {data: [], body: []};
  }

  componentDidMount () {
    axios
      .get ('https://tidal-hearing.glitch.me/dados')
      .then (res => this.setState ({...this.state, data: res.data}));
    axios.get('https://tidal-hearing.glitch.me/sva')
        .then(res => this.setState({...this.state, body: res.data}))
  }

  render () {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <ImageBackground
          style={styles.header}
          source={require ('../../../images/homem-telefone.jpg')}
        >
          <Title />
          <View style={styles.containerCard}>
            {this.state.data.map (item => (
              <CardHeader
                key={item.id}
                value={`${item.gb_amount}GB`}
                messageCard={`Redes sociais ilimitadas`}
                handleHire={value => console.log (value)}
              />
            ))}
          </View>
          <ButtonHeader
            handlePage={option => navigate (option)}
          />
        </ImageBackground>
        <Body body={this.state.body}/>
      </ScrollView>
    );
  }
}