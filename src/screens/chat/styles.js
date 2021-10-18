import {StyleSheet} from 'react-native';
import {hp, wp} from '../../components/utils';
import * as colors from '../../components/colors';

export const messagesStyles = StyleSheet.create({
  time:{
    
  },
  input: {
    width: wp(321),
    height: hp(48),
    marginTop: hp(12),
    flexDirection: 'row',
    alignItems: 'center',
  },
  chats: {
    fontSize: hp(34),
    fontWeight: '700',
    color: colors.black,
    lineHeight: hp(51),
  },
  overall: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(10),
    marginHorizontal: wp(20),
    alignItems: 'center',
  },
  iconcontainer: {
    width: wp(46),
    height: hp(46),
    borderRadius: hp(20),
    borderWidth: hp(1),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.ash,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(20),
  },
  chat: {
    color: colors.white,
    fontSize: hp(8),
  },
  messages: {
    height: hp(14),
    width: wp(14),
    borderRadius: hp(7),
    backgroundColor: colors.red,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: hp(10),
  },
  chatcontainer: {
    marginLeft: hp(13),
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: wp(48),
    height: hp(48),
  },

  container: {
    flex: 1,
  },

  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: wp(20),
  },
});
