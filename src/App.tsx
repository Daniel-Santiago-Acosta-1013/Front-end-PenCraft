import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import NavBar from './components/Navbar/Navbar';
import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <NavBar />
          <main>
            <Routes />
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;