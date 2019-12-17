import { createGlobalStyle } from 'styled-components';
import bootstrap from './libs/bootstrap.scss';
import fonts from './base/_fonts.scss';
import { colors, transition } from './const';

const base = {
  '*': {
    boxSizing: 'border-box',
    outline: 'none',
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
  form: {
    marginTop: '30px',
  },
};

export const GlobalStyles = createGlobalStyle`
  ${bootstrap}
  ${base}
  ${fonts}
`;
