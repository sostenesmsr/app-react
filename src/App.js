import React from 'react';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </div>
  );
};

export default App;
