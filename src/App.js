import './App.scss';
import { Route, Switch } from 'react-router-dom';
import React, { useState} from "react";

//Home
import Home from './pages/Home';

//Default herbruikbaar
import Nav from "./components/Default/Nav";
import Footer from "./components/Default/Footer";

//Tool
import Tool from './pages/Tool/Tool';
import Features from './pages/Tool/Features';
import Pricing from './pages/Tool/Pricing';

//Studio
import Studio from './pages/Studio/Studio';
import Cases from './pages/Studio/Cases';
import Solutions from './pages/Studio/Solutions';
import Blog from "./pages/Studio/Blog";
import Contact from './pages/Studio/Contact';
import Offerte from './pages/Studio/Offerte';
import Demo from './pages/Studio/Demo';

function App() {
  const [open, setOpen] = useState(false);

  const navtools= [
    {name: "Tool", to: "/tool"},
    {name: "Features", to: "/features"},
    {name: "Pricing", to: "/pricing"}
  ]

  const navstudio= [
    {name: "Studio", to: "/studio"},
    {name: "Cases", to: "/cases"},
    {name: "Solutions", to: "/solutions"},
    {name: "Blog", to: "/blog"},
    {name: "Contact", to: "/contact"},
  ]

  return (
    <>
      <Switch className={`${open ? `no_scroll` : `able_scroll`}`} >
        <Route path="/" exact >
          <Home/>
        </Route>
        <>
          <Route path="/tool" >
            <Nav open={open} setOpen={e => setOpen(e)} links={navtools}/>
            <Tool/>
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

          <Route path="/studio" >
            <Nav open={open} setOpen={e => setOpen(e)} tool={false} links={navstudio}/>
            <Studio/>
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

          <Route path="/blog">
            <Nav open={open} setOpen={e => setOpen(e)} tool={false} links={navstudio}/>
            <Blog/>
            <Footer />
          </Route>

          <Route path="/contact">
            <Nav open={open} setOpen={e => setOpen(e)} tool={false} links={navstudio}/>
            <Contact/>
            <Footer />
          </Route>

          <Route path="/offerte">
            <Nav open={open} setOpen={e => setOpen(e)} tool={false} links={navstudio}/>
            <Offerte/>
            <Footer />
          </Route>

          <Route path="/demo">
            <Nav open={open} setOpen={e => setOpen(e)} tool={false} links={navstudio}/>
            <Demo/>
            <Footer />
          </Route>
        </>
      </Switch>
      
    </>
  );
}

export default App;