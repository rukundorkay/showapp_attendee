import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../constants';
import dimesions from '../../constants/dimesions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: colors.background,
  },
  top: {
    flexDirection: 'row',
    paddingHorizontal: dimesions.Spacing,
    paddingVertical: 30,
  },
  avatarView: {
    width: 119,
    height: 113,
    borderRadius: 7,
    overflow: 'hidden',
  },
  avatarImg: {
    width: '100%',
    height: '100%',
  },
  topRight: {
    flex: 1,
    marginLeft: 23,
  },
  topHeading: {
    flex: 1,
  },
  topTitle: {
    fontFamily: fonts.SemiBold,
    fontSize: 15,
    lineHeight: 21,
    color: colors.darkBlue,
    marginBottom: 6,
  },
  topDate: {
    fontFamily: fonts.Medium,
    fontSize: 12,
    lineHeight: 20,
    color: colors.mutedBlue,
    marginBottom: 7,
  },
  topTime: {
    fontFamily: fonts.Medium,
    fontSize: 12,
    lineHeight: 20,
    color: colors.mutedBlue,
  },
  topCaption: {
    fontFamily: fonts.Medium,
    fontSize: 10,
    lineHeight: 21,
    color: colors.primary,
  },
  row: {
    paddingHorizontal: dimesions.Spacing,
    paddingBottom: 12,
  },
  rowHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 21,
  },
  rowTitle: {
    fontFamily: fonts.SemiBold,
    fontSize: 15,
    lineHeight: 21,
    color: colors.darkBlue,
  },
  addTicket: {
    flexDirection: 'row',
    marginBottom: 13,
  },
  qtyButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 33,
    height: 32,
    borderWidth: 1,
    borderColor: colors.lightBlue,
    borderRadius: 7,
  },
  qty: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 39,
    height: 32,
    backgroundColor: colors.lightBlue,
    borderWidth: 1,
    borderColor: colors.blue,
    borderRadius: 7,
    marginHorizontal: 10,
  },
  qtyText: {
    fontFamily: fonts.Medium,
    fontSize: 15,
    lineHeight: 18,
    color: colors.blue,
    marginBottom: -4,
  },
  ticketType: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 39,
    height: 32,
    backgroundColor: colors.lightBlue,
    borderWidth: 1,
    borderColor: colors.blue,
    borderRadius: 7,
    marginRight: 10,
  },
  ticketTypeText: {
    fontFamily: fonts.Regular,
    fontSize: 15,
    lineHeight: 18,
    color: colors.blue,
    marginBottom: -4,
  },
  holder: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingVertical: 14,
    backgroundColor: `${colors.blue}05`,
    borderRadius: 7,
    marginBottom: 10,
  },
  holderName: {
    fontFamily: fonts.Regular,
    fontSize: 13,
    lineHeight: 18,
    color: colors.darkGray,
  },
  holderType: {
    fontFamily: fonts.Medium,
    fontSize: 11,
    lineHeight: 15,
    color: colors.blue,
  },
  paymentMethods: {
    flexDirection: 'row',
  },
  paymentMethod: {
    width: 75,
    height: 78,
    paddingHorizontal: 13,
    backgroundColor: colors.lightBlue,
    borderRadius: 7,
    marginRight: 13,
  },
  paymentMethodImgView: {
    height: 42,
    marginTop: 6,
    marginBottom: 3,
  },
  paymentMethodImg: {
    width: '100%',
    height: '100%',
  },
  paymentMethodText: {
    fontFamily: fonts.Regular,
    fontSize: 12,
    lineHeight: 14,
    color: colors.blue,
  },
  selectedPayment: {
    position: 'absolute',
    top: -6,
    right: 8,
  },
  footer: {
    paddingHorizontal: dimesions.Spacing,
    paddingBottom: dimesions.Spacing,
    paddingTop: 10,
  },
  total: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 4,
  },
  totalLabel: {
    fontFamily: fonts.SemiBold,
    fontSize: 20,
    lineHeight: 24,
    color: colors.darkBlue,
  },
  totalText: {
    fontFamily: fonts.SemiBold,
    fontSize: 20,
    lineHeight: 24,
    color: colors.primary,
  },
  terms: {
    fontFamily: fonts.Regular,
    fontSize: 10,
    lineHeight: 14,
    color: colors.mutedBlue,
    textAlign: 'center',
    marginHorizontal: 20,
  },
  buttonView: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
});

export default styles;
