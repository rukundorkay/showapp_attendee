import {Platform, StyleSheet} from 'react-native';
import {borderRadius, colors, fonts, globalStyles, Spacing, textSize} from '../../constants';

export const styles = StyleSheet.create({
  location: {
    color: colors.primary,
    fontFamily: fonts.Medium,
    fontSize: textSize.M,
    marginRight: Spacing * 0.2,
  },
  locationText: {
    color: colors.error,
  },
  searchLocationScroll: {position: 'relative', marginTop: 85},
  searchLocationTitle: {
    fontWeight: 'bold',
    padding: 10,
    width: '90%',
  },
  searchLocationItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#efefef',
  },
  safeArea: {
    backgroundColor: '#fff',
    flex:1
  },
  body: {
    backgroundColor: colors.background,
    paddingHorizontal: Spacing/1.2,
  },
  header: {
    marginTop: Platform.OS === "ios" ? Spacing/2 : Spacing,
    flexDirection: 'row',
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: borderRadius.SM,
  },
  findEvents: {
    color: colors.blue,
    flex: 1,
    justifyContent: 'center',
  },
  findEventsText: {
    color: colors.blue,
    textAlign: 'center',
    fontFamily: fonts.Medium,
    fontSize: textSize.M,
  },
  findEventsButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: Platform.OS === 'android' ? 'center' : 'flex-end',
  },
  notificationBadge: {
    padding: Spacing / 2.6,
    backgroundColor: '#efefef',
    borderRadius: borderRadius.SM,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryPane: {
    marginVertical: Spacing/2,
  },
  categoryItem: {
    marginRight: Spacing,
  },
  categoryText: {
    fontFamily: fonts.Medium,
    color:colors.mutedText
  },
  eventsWrapper: {
    flex:1,
    padding:10
  },
  searchLocationModal: {
    backgroundColor: '#fff',
    height: 500,
    position: 'absolute',
    bottom: 0,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    width: '100%',
    elevation: 5,
    shadowColor: '#efefef',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 1,
  },
  searchLocationClose: {
    height: 80,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    position: 'absolute',
    top: 0,
    zIndex: 10,
  },
  searchLocationScroll: {position: 'relative', marginTop: 85},
  searchLocationTitle: {
    fontWeight: 'bold',
    padding: 10,
    width: '90%',
  },
  searchLocationBody: {
    backgroundColor: '#00000029',
    width: 60,
    height: 6,
    borderRadius: 6,
  },
  searchLocationItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#efefef',
  },
  // Event card style
  eventCardWrapper: {
    borderRadius: 10,
    marginVertical: Spacing/2,
    width: '47%',
    margin:Spacing*0.15
  },
  eventPoster: {
    height: 150,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  eventInfoContainer: {
    backgroundColor: colors.background,
    elevation:5,
    borderBottomRightRadius:5,
    borderBottomLeftRadius:5,
    shadowColor: 'black',
    shadowRadius: 5,
    shadowOpacity: Platform.OS === 'ios' ? .3 : 1,
    paddingHorizontal:Spacing/2
  },
  eventTitle: {
    color: colors.darkBlue,
    fontSize: Spacing * 0.5,
    fontFamily: fonts.ExtraBold,
  },
  eventStartDate: {
    color: colors.primary,
    fontFamily: fonts.Medium,
    fontSize: Spacing * 0.35,
  },
  iconColor: {
    color: '#000',
  },
});
