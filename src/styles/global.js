import { createGlobalStyle } from 'styled-components';
import bootstrap from './bootstap.scss';
//import { fonts } from './fonts';
import { colors, transition } from './const';

const base = {
  '*': {
    boxSizing: 'border-box',
  },
  body: {
    margin: 0,
    //fontFamily: fonts.base,
    fontSize: '16px',
    color: colors.black,
    '-webkit-font-smoothing': 'antialiased',
  },
  a: {
    textDecorationColor: 'transparent',
    color: colors.black,
    transition: transition,
    ':hover': {
      textDecorationColor: 'currentColor',
    },
  },
  button: {
    transition: transition,
    '&:focus': {
      outline: 'none',
    },
  },
};
// TODO font should be exported here
export const GlobalStyles = createGlobalStyle`
  ${bootstrap}
  ${base}
`;
