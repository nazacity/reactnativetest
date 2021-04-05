import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  // colors
  primary: '#8a1776',
  inputPlaceholderColor: '#C8C8C8',
  backgroundColor: '#fbfcfc',
};

export const Radius = {
  xs: 3,
  s: 5,
  m: 10,
  l: 15,
  xl: 20,
};

export const SHADOW = {
  default: {
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  image: {
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 5,
  },
};

export const SIZES = {
  // global sizes
  base: 8,

  padding: 20,

  // font sizes
  navTitle: 25,
  h1: 18,
  h2: 16,
  h3: 14,
  h4: 12,
  h5: 10,
  body1: 18,
  body2: 16,
  body3: 14,
  body4: 12,
  body5: 10,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  onboardinghero: {
    fontSize: 50,
    color: 'white',
    textAlign: 'center',
    lineHeight: 50,
  },
  contestno: {
    fontSize: 40,
    lineHeight: 55,
  },
  h1: {
    fontSize: SIZES.h1,
    lineHeight: 24,
  },
  h2: {
    fontSize: SIZES.h2,
    lineHeight: 22,
  },
  h3: {
    fontSize: SIZES.h3,
    lineHeight: 20,
  },
  h4: {
    fontSize: SIZES.h4,
    lineHeight: 18,
  },
  h5: {
    fontSize: SIZES.h5,
    lineHeight: 16,
  },
  body1: {
    fontSize: SIZES.body1,
    lineHeight: 24,
  },
  body2: {
    fontSize: SIZES.body2,
    lineHeight: 22,
  },
  body3: {
    fontSize: SIZES.body3,
    lineHeight: 20,
  },
  body4: {
    fontSize: SIZES.body4,
    lineHeight: 18,
  },
  body5: {
    fontSize: SIZES.body5,
    lineHeight: 16,
  },
  button: {
    fontSize: SIZES.body4,
    lineHeight: 14,
  },
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
