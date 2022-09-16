import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import paths from './config/paths';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path={paths.HOME} element={<Home/>}></Route>
          <Route></Route>
          <Route></Route>
          <Route></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
