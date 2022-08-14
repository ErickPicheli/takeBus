import React from 'react';
import { StyleSheet, View, Alert, Image, TouchableOpacity } from 'react-native';
import colors from '../constants/colors';
import { Text } from '../components/Text';
import { Button } from '../components/Button';
import { ButtonOutline } from '../components/ButtonOutline';
import { TextInput } from '../components/Form';
import { Desembarque } from './Desembarque';
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
  container: {
    flex: 1,
  },
  col1: {
    position: 'left',
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
  map: {
    width: '26rem',
    height: '22rem',
  },

});

export const Embarque = ({ navigation }) => (
  <View style={styles.topRow}>
    <Text style={styles.titleText}>Horário aproximado de chegada:</Text>
    <View style={styles.col1}>
      <Text style={styles.timeText}>9:30</Text>
    </View>
    <View style={styles.col2}>
      <Text style={styles.titleText}>Nações Unidas Qd.23 Par</Text>
      <Text>Unesp / CTI</Text>
      <Text style={styles.titleText}>3240</Text>
    </View>
    <br />
    <View style={styles.Center}>
      <Button onPress={() => navigation.push('Desembarque')}>
        EMBARQUE
      </Button>
      <br />
      <Image
            style={styles.map}
            source={require('../../assets/MapEx.png')}
          />
      <br />
      <ButtonOutline type="outline" onPress={() => Alert.alert('you pressed the default button')}>
        INFORMAÇÕES EXTRAS
      </ButtonOutline>
    </View>
    
  </View>
);
