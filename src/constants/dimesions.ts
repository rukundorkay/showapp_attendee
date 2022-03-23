import {Dimensions} from 'react-native';

const Spacing = 32;
const {width, height} = Dimensions.get('screen');

export default {
  width,
  height,
  Spacing,
  isTablet: width > 362,
};
