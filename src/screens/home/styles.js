import {StyleSheet} from 'react-native';
import {hp, wp} from '../../components/utils';
import * as colors from '../../components/colors';

export const LoginStyles = StyleSheet.create({
  login: {
    fontWeight: '800',
    fontSize: hp(17),
    color: colors.magenta,
    alignSelf: 'center',
    marginTop: hp(160),
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  secureContainer: {
    marginTop: hp(21),
  },
  inputContainer: {
    marginTop: hp(20),
  },
  button: {
    marginTop: hp(103),
  },
  forgetpassword: {
    alignSelf: 'center',
    fontSize: hp(12),
    fontWeight: '600',
    lineHeight: hp(17),
    marginTop: hp(10),
    left: '30%',
  },
  signupcontainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: hp(5),
  },

  account: {
    fontSize: hp(12),
    fontWeight: '400',
    lineHeight: hp(20),
  },
  signup: {
    fontSize: hp(12),
    fontWeight: '700',
    lineHeight: hp(20),
    marginLeft: wp(3),
  },
  coolcontainer: {
    marginTop: hp(74),
    alignSelf: 'center',
  },
  coolicon: {
    marginLeft: hp(180),
  },
  spec: {
    fontWeight: '900',
    fontSize: hp(35),
    marginLeft: wp(105),
    color: colors.ash,
  },
  love: {
    fontWeight: '400',
    fontSize: hp(17),
    marginLeft: wp(130),
    fontStyle: 'italic',
  },
});
