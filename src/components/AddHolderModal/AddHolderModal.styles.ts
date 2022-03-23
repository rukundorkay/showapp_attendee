import {StyleSheet} from 'react-native';

import {colors, fonts} from '../../constants';
import dimesions from '../../constants/dimesions';

const styles = StyleSheet.create({
  backDrop: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  modalView: {
    backgroundColor: colors.background,
    margin: 48,
    borderRadius: 10,
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
