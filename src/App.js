import './App.scss';
import { Route, Switch } from 'react-router-dom';
import React, { useState} from "react";

//Home
import Home from './pages/Home';

//Default herbruikbaar
import Nav from "./components/Default/Nav";
import Footer from "./components/Default/Footer";

//Tool
import AboutTool from './pages/Tool/AboutTool';
import Features from './pages/Tool/Features';
import Pricing from './pages/Tool/Pricing';

//Studio
import AboutUs from './pages/Studio/AboutUs';
import Cases from './pages/Studio/Cases';
import Solutions from './pages/Studio/Solutions';

function App() {
  const [open, setOpen] = useState(false);

  const navtools= [
    {name: "About", to: "/aboutTool"},
    {name: "Features", to: "/features"},
    {name: "Pricing", to: "/pricing"}
  ]

  const navstudio= [
    {name: "About Us", to: "/aboutUs"},
    {name: "Cases", to: "/cases"},
    {name: "Solutions", to: "/solutions"}
  ]

  return (
    <>
      <Switch className={`${open ? `no_scroll` : `able_scroll`}`} >
        <Route path="/" exact >
          <Home/>
        </Route>
        <>
          <Route path="/aboutTool" >
            <Nav open={open} setOpen={e => setOpen(e)} links={navtools}/>
            <AboutTool/>
            <Footer />
          </Route>

          <Route path="/features">
            <Nav open={open} setOpen={e => setOpen(e)} links={navtools}/>
            <Features/>
            <Footer />
          </Route>

          <Route path="/pricing">
            <Nav open={open} setOpen={e => setOpen(e)} links={navtools}/>
            <Pricing/>
            <Footer />
          </Route>

          <Route path="/aboutUs" >
            <Nav open={open} setOpen={e => setOpen(e)} tool={false} links={navstudio}/>
            <AboutUs/>
            <Footer />
          </Route>

          <Route path="/cases">
            <Nav open={open} setOpen={e => setOpen(e)} tool={false} links={navstudio}/>
            <Cases/>
            <Footer />
          </Route>

          <Route path="/solutions">
            <Nav open={open} setOpen={e => setOpen(e)} tool={false} links={navstudio}/>
            <Solutions/>
            <Footer />
          </Route>
        </>
      </Switch>
      
    </>
  );
}

export default App;