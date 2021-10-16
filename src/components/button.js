import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import * as colors from './colors';
import {hp, wp} from './utils';

export const Button = ({title, onPress, style, titleStyle}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={[styles.container, style]}>
      <Text style={[styles.button, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp(325),
    height: hp(50),
    borderRadius: hp(10),
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: colors.red,
  },
  button: {
    fontSize: hp(15),
    fontWeight: '500',
    color: colors.white,
  },
});
