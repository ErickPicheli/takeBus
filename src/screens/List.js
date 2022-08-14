import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import colors from '../constants/colors';
import { ListItem, ListSeparator } from '../components/List';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
});

const screens = [
  {
    pontoLocal: 'Nações Unidas Qd. 23 Par',
    pontoRota: 'Unesp/CTI',
    pontoHora: '9:30',
    target: 'Embarque',
  },
  {
    pontoLocal: 'Nações Unidas Qd. 23 Impar',
    pontoRota: 'Unesp/CTI',
    pontoHora: '9:36',
    target: 'Embarque',
  },
  {
    pontoLocal: 'Nações Unidas Qd. 26 Par',
    pontoRota: 'Tecnológica',
    pontoHora: '9:32',
    target: 'Embarque',
  },
  {
    pontoLocal: 'Albino Tambara Qd. 03 Par',
    pontoRota: 'Cidade Universitária via Distrito III',
    pontoHora: '9:35',
    target: 'Embarque',
  },
];

export const List = ({ navigation }) => {
  return (
    <FlatList
      style={styles.container}
      data={screens}
      keyExtractor={item => item.pontoLocal}
      renderItem={({ item }) => (
        <ListItem
          pontoLocal={item.pontoLocal}
          pontoRota={item.pontoRota}
          pontoHora={item.pontoHora}
          onPress={() => navigation.push(item.target)}
        />
      )}
      ItemSeparatorComponent={ListSeparator}
      ListHeaderComponent={ListSeparator}
      ListFooterComponent={ListSeparator}
    />
  );
};
