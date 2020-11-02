import React from "react";
import ReactGA from 'react-ga';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Loader from 'react-loader-spinner'
import styled from 'styled-components';
import {SectionFSHero, Item, Image} from 'components/SharedStyling';

import Head from 'segments/Header';
import Foot from 'segments/Footer';

import Home from 'pages/Home';
import HomeOld from 'pages/HomeOld';
import Privacy from 'pages/Privacy';
import Terms from 'pages/Terms';

import ComingSoon from 'pages/ComingSoon';

import * as dotenv from "dotenv";
dotenv.config();

export default function() {
  return (
    <App />
  )
}

const launchEpoch = 1605621600; // Tuesday, November 17, 2020 2:00:00 PM GMT

function App() {
  const [loading, setLoading] = React.useState(true);
  const [comingSoon, setComingSoon] = React.useState(false);
  const [timeRemaining, setTimeRemaining] = React.useState(0);

  // Initialize GA
  ReactGA.initialize('UA-165415629-2');
  ReactGA.pageview('/app');

  React.useEffect(() => {
    fetch('https://showcase.api.linx.twenty57.net/UnixTime/tounixtimestamp?datetime=now', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(jsondata => {
      setLoading(false);
      if (launchEpoch - parseInt(jsondata.UnixTimeStamp) > 0) {
        setComingSoon(true);
        setTimeRemaining(launchEpoch - parseInt(jsondata.UnixTimeStamp));
      }
      else {
        setComingSoon(false);
      }

    })
    .catch(err => {
      setLoading(false);
      setComingSoon(false);
    });
  });

  return (
    <Router>
      <ParentContainer>
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. Home needs to be last always*/}
        <Switch>
          <Route path="/privacy">
            <Head />
            <Privacy />
            <Foot />
          </Route>
          <Route path="/terms">
            <Head />
            <Terms />
            <Foot />
          </Route>
          <Route path="/">
            <HomeOld setBadgeCount={0} bellPressed={() => {console.log("Bell Pressed!")}}/>
          </Route>
        </Switch>
      </ParentContainer>

    </Router>
  );
}

// <>
//   {loading &&
//     <SectionFSHero align="center">
//       <Item margin="30px 30px 20px 30px" flex="initial" filter="brightness(0) invert(1)" >
//         <Image src="./logos/epnsfullname.png" srcSet="./logos/epnsfullname@2x.png 2x, ./logos/epnsfullname@3x.png 3x" />
//       </Item>
//       <Item margin="0px 30px 30px 30px" flex="initial">
//         <Loader
//          type="Oval"
//          color="#fff"
//          height={32}
//          width={32}
//         />
//       </Item>
//     </SectionFSHero>
//   }
//
//   {!loading && comingSoon &&
//     <Router>
//       <ParentContainer>
//         {/* A <Switch> looks through its children <Route>s and
//           renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/privacy">
//             <Head />
//             <Privacy />
//             <Foot />
//           </Route>
//           <Route path="/tos">
//             <Head />
//             <Terms />
//             <Foot />
//           </Route>
//           <Route path="/">
//             <ComingSoon timeRemaining={timeRemaining} />
//           </Route>
//         </Switch>
//       </ParentContainer>
//     </Router>
//   }
//
//   {!loading && !comingSoon &&
//     <Router>
//       <Head />
//
//       <ParentContainer>
//         {/* A <Switch> looks through its children <Route>s and
//           renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/privacy">
//             <Privacy />
//           </Route>
//           <Route path="/tos">
//             <Terms />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </ParentContainer>
//
//       <Foot />
//     </Router>
//   }
// </>


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
