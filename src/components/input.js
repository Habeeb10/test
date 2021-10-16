import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import * as colors from './colors';
import {hp, wp} from './utils';

export const Input = ({placeholder, style, onchange, value, icon}) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor={colors.deepgray}
        onChangeText={onchange}
        value={value}
      />
      <View style={{width: 30}}>{icon}</View>
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
    left: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInput: {
    fontSize: hp(13),
    color: colors.grey,
  },
});
