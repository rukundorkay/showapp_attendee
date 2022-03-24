import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../constants';
import dimesions from '../../constants/dimesions';

const styles = StyleSheet.create({
  card: {
    width: dimesions.width * 0.7,
    backgroundColor: colors.background,
    borderRadius: 10,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.29,
    shadowRadius: 6,
    elevation: 3,
  },
  imgContainer: {
    height: 160,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  cardContent: {
    paddingTop: 16,
  },
  cardHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
    marginBottom: 19,
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: fonts.SemiBold,
    fontSize: 13,
    lineHeight: 21,
    color: colors.darkBlue,
  },
  ticket: {
    fontFamily: fonts.Medium,
    fontSize: 11,
    lineHeight: 13,
    color: colors.primary,
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  cardRowLeft: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 37,
    height: 37,
    backgroundColor: `${colors.blue}15`,
    borderRadius: 7,
  },
  cardRowRight: {
    flex: 1,
    marginLeft: 15,
  },
  cardRowText: {
    fontFamily: fonts.Medium,
    fontSize: 12,
    lineHeight: 20,
    color: colors.mutedBlue,
  },
  organization: {
    fontFamily: fonts.Regular,
    fontSize: 10,
    lineHeight: 21,
    color: colors.darkBlue,
    textAlign: 'center',
    marginTop: 10,
  },
  cardDivider: {
    flexDirection: 'row',
    alignItems: 'center',
    // paddingHorizontal: 10,
  },
  arc: {
    width: 37,
    height: 37,
    borderRadius: 37 / 2,
    zIndex: 10,
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: '#00000010',
  },
  arcLeft: {
    left: -4,
    transform: [{rotate: '180deg'}],
  },
  arcRight: {
    right: -4,
  },
  dashedBorder: {
    flex: 1,
    height: 1,
    borderWidth: 1,
    borderColor: colors.mutedBlue,
    borderStyle: 'dashed',
  },
  cardFooter: {
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  footerTitle: {
    fontFamily: fonts.SemiBold,
    fontSize: 13,
    lineHeight: 21,
    color: colors.darkBlue,
    textAlign: 'center',
    marginBottom: 14,
  },
  footerCaption: {
    fontFamily: fonts.Regular,
    fontSize: 10,
    lineHeight: 20,
    color: colors.mutedBlue,
    textAlign: 'center',
    marginTop: 14,
  },
  barcodeImg:{
    width: '100%',
    height: 48,
  }
});

export default styles;
