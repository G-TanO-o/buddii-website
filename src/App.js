import './App.scss';
import { Route, Switch } from 'react-router-dom';
import React, {useRef, useEffect, useState} from "react";

import Home from './pages/Home';
import { ROUTES } from './consts';

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Features from './pages/Features';

function App() {

  const [open, setOpen] = useState(false);
  console.log(open);



  

  return (
    <>
    <Nav open={open} setOpen={e => setOpen(e)} />
    <Switch className={`${open ? `no_scroll` : `able_scroll`}`} >
      {!open ? (
        <>
        <Route path="/" exact >
          <Home/>
        </Route>

        <Route path="/features">
          <Features/>
        </Route>
        </>
      ):(
        <></>
      )}
      

     </Switch>
      <Footer />
     </>
  );
}

export default App;