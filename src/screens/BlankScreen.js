import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';

export default function BlankScreen() {
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
