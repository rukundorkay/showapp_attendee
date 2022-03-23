import {StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';
import colors from '../../constants/colors';
// import {colors, fonts} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
  maincontainer: {},

  image: {
    width: 200,
    height: 150,
    marginVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 50,
  },
  title: {
    fontSize: 24,
    color: 'black',
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
  },
  textingContainer: {
    flexDirection: 'row',
    color: 'black',
    marginVertical: 30,
  },
  textfooter: {
    color: 'black',
  },
  textlinks: {
    color: colors.primary,
  },
  textalign:{
    color: colors.primary,
  }
});
