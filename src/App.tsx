import React from "react";
import ReactGA from 'react-ga';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Loader from 'react-loader-spinner'
import styled from 'styled-components';

import Head from 'segments/Header';
import Foot from 'segments/Footer';

import Home from 'pages/Home';
import Privacy from 'pages/Privacy';

import * as dotenv from "dotenv";
dotenv.config();

export default function() {
  return (
    <App />
  )
}

function App() {

  // Initialize GA
  ReactGA.initialize('UA-165415629-2');
  ReactGA.pageview('/app');

  return (
    <Router>
      <Head />

      <ParentContainer>
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/privacy">
            <Privacy />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </ParentContainer>

      <Foot />
    </Router>

  );
}


// CSS STYLES
const HeaderContainer = styled.div`
  left: 0;
  right: 0;
  width: 100%;
  height: 65px;
  position: fixed;
  top: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
`

const ParentContainer = styled.div`
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  flex: 1;
`
