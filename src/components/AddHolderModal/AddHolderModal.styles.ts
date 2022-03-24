import {StyleSheet} from 'react-native';

import {colors, fonts} from '../../constants';
import dimesions from '../../constants/dimesions';

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  backDrop: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    backgroundColor: colors.background,
    margin: 48,
    borderRadius: 10,
    shadowColor: colors.blue,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 18,
  },
  headerText: {
    fontFamily: fonts.SemiBold,
    fontSize: 12,
    lineHeight: 21,
    color: colors.darkBlue,
  },
  closeButton: {
    position: 'absolute',
    top: 18,
    right: 18,
  },
  content: {
    paddingHorizontal: 18,
    marginBottom: 32,
  },
  item: {
    alignContent: 'center',
  },
  inputView: {
    justifyContent: 'center',
    height: 31,
    width: dimesions.width * 0.7,
    backgroundColor: `${colors.blue}05`,
    paddingHorizontal: 13,
    borderRadius: 5,
  },
  input: {
    height: 31,
    color: colors.darkGray,
    fontFamily: fonts.Regular,
    fontSize: 11,
    lineHeight: 17,
    textDecorationColor: 'transparent',
    textShadowColor: 'transparent',
    paddingVertical: 0,
  },
  label: {
    fontFamily: fonts.Medium,
    fontSize: 11,
    color: colors.blue,
    marginBottom: 10,
  },
  buttonView: {
    alignItems: 'center',
    paddingBottom: 39,
  },
  button: {
    width: 110,
  },
  cardItem: {
    padding: 8,
  },
  marginTop: {
    marginTop: 8,
  },
  marginBottom: {
    marginBottom: 8,
  },
});

export default styles;
