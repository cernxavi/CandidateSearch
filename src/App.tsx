import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Nav />
      <main>
        <Outlet />
      </main>
    </React.Fragment>
  );
}

export default App;

