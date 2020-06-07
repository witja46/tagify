import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App as GuestApp } from './components/guest/App';
import { App as UserApp } from './components/user/App';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

  return (
    <BrowserRouter>
      {!isLoggedIn && <GuestApp />}
      {isLoggedIn && <UserApp />}
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
