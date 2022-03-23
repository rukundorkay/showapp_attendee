import {StyleSheet, Dimensions} from 'react-native';
import { colors } from '../../constants';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  filterModal: {
    position: 'absolute',
    width: width,
    height: height,
    backgroundColor: 'white',
    margin: 0,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  content: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    height: 65,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingHorizontal: 15,
  },
  leftView: {
    width: 30,
    height: 30,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  centerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 30,
  },
  rightView: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    lineHeight: 34,
    textAlign: 'center',
  },
  icon: {
    alignItems: 'center',
  },
  section: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  sectionTitle: {
    fontSize: 20,
    lineHeight: 27,
    color: '#393939',
    marginBottom: 10,
  },
  sectionContent: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 42,
    paddingHorizontal: 15,
    borderRadius: 50,
    backgroundColor: 'rgba(142, 134, 149, 0.08)',
    margin: 4,
  },
  optionText: {
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
    color: '#3D3D3D',
  },
  selected: {
    backgroundColor: colors.background,
  },
  selectedText: {
    fontFamily: 'Nunito-ExtraBold',
    color: '#FFF',
  },
  markerStyle: {
    backgroundColor: colors.background,
    height: 20,
    width: 20,
    borderRadius: 20,
    marginTop: 10,
  },
  selectedStyle: {
    height: 12,
    backgroundColor: '#FFC290',
  },
  trackStyle: {
    backgroundColor: '#F5F5F5',
    height: 12,
  },
  bottom: {
    padding: 20,
  },
  button: {
    backgroundColor: colors.background,
    borderRadius: 100,
    paddingVertical: 18,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20,
    // lineHeight: 27,
    textAlign: 'center',
    letterSpacing: 0.32,
  },
});

export default styles;
