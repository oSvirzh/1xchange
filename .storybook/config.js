import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { GlobalStyles } from '../src/styles/global';

const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

// automatically add GlobalStyles to each story
function withGlobalStyles(storyFn) {
  return (
    <>
      <GlobalStyles />
      {storyFn()}
    </>
  );
}

addDecorator(withGlobalStyles);

configure(loadStories, module);
