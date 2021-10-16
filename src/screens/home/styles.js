import {StyleSheet} from 'react-native';
import {hp, wp} from '../../components/utils';
import colors from '../../components/colors';

export const LoginStyles = StyleSheet.create({
  here: {},
  secureContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(21),
  },
  inputContainer: {
    marginTop: hp(250),
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
    marginTop: hp(84),
    alignSelf: 'center',
  },
  coolicon: {
    marginLeft: hp(180),
  },
  spec: {
    fontWeight: '900',
    fontSize: hp(35),
    marginLeft: wp(105),
  },
  love: {
    fontWeight: '400',
    fontSize: hp(17),
    marginLeft: wp(130),
    fontStyle: 'italic',
    width: hp(99),
  },
});
