import {Platform, StyleSheet} from 'react-native';
import {borderRadius, colors, fonts, Spacing, textSize} from '../../constants';

export const styles = StyleSheet.create({
  location:{
    color: colors.primary, 
    fontFamily:fonts.Medium , 
    fontSize: textSize.M, 
    marginRight:Spacing*0.2
  },
  locationText: {
    color: colors.error,
  },
  safeArea: {
    backgroundColor: '#fff',
  },
  body: {
    borderBottomWidth: 2,
    borderBottomColor: '#efefef',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    marginTop: Spacing,
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
    fontSize: textSize.M
  },
  findEventsButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: Platform.OS === 'android' ? 'center' : "flex-end" ,
  },
  notificationBadge: {
    padding:Spacing/2.6,
    backgroundColor: '#efefef',
    borderRadius: borderRadius.SM,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryPane: {
    marginTop: 20,
  },
  categoryItem: {
    margin: 10,
    marginBottom: 20,
  },
  categoryText: {},
  eventsWrapper: {
    padding: 10,
    marginBottom: 151,
  },
  eventsContainer: {
    marginBottom: 200,
  },
  searchLocationModal: {
    backgroundColor: 'green',
    height: 500,
    position: 'absolute',
    bottom: 0,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width: '100%',
  },
  searchLocationClose: {
    flex: 1,
    alignItems: 'center',
  },
  searchLocationBody: {
    backgroundColor: '#00000029',
    width: 60,
    height: 6,
    borderRadius: 6,
  },
  // Event card style
  eventCardWrapper: {
    borderRadius: 10,
    backgroundColor: '#fff',
    margin: 10,
    width: '45%',
    elevation: 5,
    shadowColor: '#efefef',
    shadowRadius: 5,
    shadowOpacity: 1,
  },
  eventPoster: {
    height: 150,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  eventInfoContainer: {
    padding: 5,
  },
  eventTitle: {
    paddingHorizontal: 10,
    color: colors.darkBlue,
    fontFamily: fonts.ExtraBold,
    fontSize: Spacing * 0.5,
  },
  eventStartDate: {
    paddingHorizontal: 10,
    color: colors.primary,
    fontFamily: fonts.ExtraBold,
    fontSize: Spacing * 0.35,
  },
  iconColor: {
    color: '#000',
  },
});
