import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import Routes from './routes';
import './styles/global.scss';

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <main>
        <Routes />
      </main>
    </Router>
  );
};

export default App;