import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route></Route>
          <Route></Route>
          <Route></Route>
          <Route></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
