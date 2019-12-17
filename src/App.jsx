import React from 'react';
import Registration from './pages/auth/CreateAccount';
import { GlobalStyles } from './styles/global';

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Registration />
    </div>
  );
};

export default App;
