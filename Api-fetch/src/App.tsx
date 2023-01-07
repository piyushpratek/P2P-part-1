import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Coffees from './components/Coffees';

function App() {
  return (
    <Router>
      <Coffees />
    </Router>
  );
}

export default App;
