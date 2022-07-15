import React from 'react';
import { Route, Routes } from 'react-router-dom';
import StartPage from './components/views/StartPage';
import MainPage from "./components/views/MainPage";

function App() {
  return (
    <Routes>
      <Route 
        exact path= "/"
        element={ <MainPage /> }
      />
        <Route exact path="/example"
               element = {<StartPage />} />
    </Routes>
  );
}

export default App;
