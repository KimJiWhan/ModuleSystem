import React from 'react';
import { Route, Routes } from 'react-router-dom';
import StartPage from './components/pages/StartPage';

function App() {
  return (
    <Routes>
      <Route 
        exact path= "/"
        element={ <StartPage /> }
      />
    </Routes>
  );
}

export default App;
