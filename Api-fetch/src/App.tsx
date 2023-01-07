import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Coffees from './components/Coffees';
import GridExample from './examples/GridExample';

function App() {
  return (
    <Routes>
      <Route index element={<Coffees />} />
      <Route path='/grid' element={<GridExample />} />
    </Routes>
  );
}

export default App;
