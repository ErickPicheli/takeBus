import React from 'react';
import { StyleSheet, View, Alert, Image, TouchableOpacity } from 'react-native';

import colors from '../constants/colors';
import { Text } from '../components/Text';
import { Button } from '../components/Button';
import { ButtonOutline } from '../components/ButtonOutline';
import { TextInput } from '../components/Form';
import { useLogin } from '../util/auth';

const styles = StyleSheet.create({
  topRow: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: colors.white,
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  titleText: {
    fontWeight: 'bold',
  },
  timeText: {
    fontWeight: 'lighter',
    fontSize: 77.5,
  },
  minuteText: {
    fontWeight: 'lighter',
    fontSize: 40,
  },
  container: {
    flex: 1,
  },
  col1: {
    position: 'left',
    width: 150,
    height: 25,
  },
  col2: {
    position: 'left',
    top: 0,
    left: 150,
    width: 250,
    height: 60,
  },
  col3: {
    position: 'left',
    left: 380,
    width: 100,
    height: 60,
  },
  Center: {
    alignItems: 'center',
    alignContent: 'center',
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    // backgroundColor: colors.border,
  },
  tinyLogo: {
    width: '2rem',
    height: '2rem',
  },

});

export const Desembarque = ({ navigation }) => (
  <View style={styles.topRow}>
    <Text style={styles.titleText}>Tempo estimado de chegada no ponto mais próximo:</Text>
    <View style={styles.col1}>
      <div type="col">
      <Text style={styles.timeText}>15</Text>
      <Text style={styles.minuteText}>min</Text>
      </div>
    </View>
    <View style={styles.col2}>
      <Text style={styles.titleText}>Eng. Edmundo C. Qd. 02. Impar</Text>
      <Text>Unesp / CTI</Text>
      <Text style={styles.titleText}>3240</Text>
    </View>
    <br />
    <View style={styles.Center}>
      <Button onPress={() => navigation.push('Rotas')}>
        DESEMBARQUE
      </Button>
    </View>
    
  </View>
);
