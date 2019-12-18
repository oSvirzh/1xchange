import React from 'react';
import CreateAccount from './pages/auth/CreateAccount';
import { GlobalStyles } from './styles/global';

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <CreateAccount />
    </div>
  );
};

export default App;
