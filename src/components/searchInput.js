import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import * as colors from './colors';
import {hp, wp} from './utils';

export const Searchinput = ({placeholder, icon, style}) => {
  return (
    <View style={[styles.container, style]}>
      <View>{icon}</View>

      <TextInput style={styles.textInput} placeholder={placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    borderRadius: hp(17),
    height: hp(54),
    width: wp(325),
    left: 30,
  },
  textInput: {
    fontSize: hp(13),
    color: colors.grey,
    marginLeft: hp(13),
  },
});
