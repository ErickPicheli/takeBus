import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { Text } from './Text';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  row: {
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
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.border,
  },
  tinyLogo: {
    width: '2rem',
    height: '2rem',
  },
});

export const ListItem = ({ title, subtitle, onPress = () => null }) => {
  const rowStyles = [styles.row];

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={rowStyles}>
        <View style={styles.wrapper}>
          <Image
            style={styles.tinyLogo}
            source={require('../../assets/favicon.png')}
          />
          <Text style={styles.titleText}>{title}</Text>
          <Text>{subtitle}</Text>
          <div>
            <button type="submit">{'>'}</button>
          </div>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const ListSeparator = () => <View style={styles.separator} />;
