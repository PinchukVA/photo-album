import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import './app.scss';
import './reset.scss';
import Main from '../../pages/index';

function App() {
  return (
    <HashRouter>
      <div className='container' >
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
