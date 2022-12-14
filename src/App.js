import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import Gallery from './containers/Gallery/Gallery';
import Services from './containers/Services/Services';
import Contact from './containers/Contact/Contact';
import EmailSuccess from './components/EmailSuccess/EmailSuccess';
import PageNotFound from './components/404/PageNotFound'
import paths from './config/paths';

function App() {    
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [mobile, setMobile] = useState(false);
    let resize;


    useEffect(() => {
        if (window.innerWidth < 768) {
            setMobile(true);
        } else {
            setMobile(false);
        }
    }, [windowWidth]);


    window.addEventListener('resize', () => {
        function resizeFunction() {
            let widthState = window.innerWidth;
            setWindowWidth(widthState);
        }
        clearTimeout(resize);
        resize = setTimeout(resizeFunction, 100)
    })
  return (
    <div className="App">
        <Layout mobile={mobile}>
          <Routes>
            <Route path={paths.HOME} element={<Home/>}></Route>
            <Route path={paths.GALLERY} element={<Gallery mobile={mobile}/>}></Route>
            <Route path={paths.SERVICES} element={<Services mobile={mobile}/>}></Route>
            <Route path={paths.CONTACT} element={<Contact/>}></Route>
            <Route path={paths.EMAILSUCCESS} element={<EmailSuccess/>}></Route>
            <Route path="*" element={<PageNotFound/>}></Route>
          </Routes>
      </Layout>
    </div>
  );
}

export default App;
