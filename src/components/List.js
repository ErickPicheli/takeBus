import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text } from './Text';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: colors.white,
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  titleText: {
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
  },
  col1: {
    position: 'left',
    top: 20,
    left: 25,
    width: 200,
    height: 0,
  },
  col2: {
    position: 'left',
    top: 5,
    left: 95,
    width: 250,
    height: 45,
  },
  col3: {
    position: 'left',
    top: -20,
    left: 380,
    width: 100,
    height: 35,
  },
  boxSearch: {
    position: 'center',
    width: 50,
    height: 200,
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

export const ListItem = ({ pontoLocal, pontoRota, pontoHora, onPress = () => null }) => {
  const rowStyles = [styles.row];
  const wrapperStyles = [styles.wrapper];

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={rowStyles}>
        <View style={styles.col1}>
          <Image
            style={styles.tinyLogo}
            source={require('../../assets/place.png')}
          />
        </View>
        <View style={styles.col2}>
          <Text style={styles.titleText}>{pontoLocal}</Text>
          <Text>{pontoRota}</Text>
          <Text style={styles.titleText}>{pontoHora}</Text>
        </View>
        <View style={styles.col3}>
          <Image source={require('../../assets/arrow.png')} style={styles.tinyLogo}/>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const ListSeparator = () => <View style={styles.separator} />;
