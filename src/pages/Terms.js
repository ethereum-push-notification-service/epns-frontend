import React from "react";
import ReactGA from 'react-ga';

import styled, { css } from 'styled-components';
import {Section, SectionHero, Content, Item, WaveOuter, WaveInner, H1, H2, Image, P, Span, Anchor, Button} from 'components/SharedStyling';

import Wave from 'react-wavify';

// Create Header
function Terms() {
  ReactGA.pageview('/privacy');

  React.useEffect(() => {

  });

  // RENDER
  return (
    <>
      {/* HERO SECTION */}
      <SectionHero padding="50px 0px 80px 0px">
        <Content className="contentBox">
          <Item margin="0px 20px">
            <H1>Terms of Service</H1>
            <Span color="#fff" margin="-20px 0 0 0" size="1rem">Outlines the terms and conditions for use</Span>
          </Item>
        </Content>
        <WaveOuter>
          <WaveInner>
            <Wave fill='#fff'
              paused={true}
              options={{
                height: 20,
                amplitude: 30,
                speed: 0.35,
                points: 3
              }}
            />
          </WaveInner>
        </WaveOuter>
      </SectionHero>

      {/* PRIVACY POLICY SECTION */}
      <Section theme="#fff" padding="0px 0px 50px 0px">
        <Content className="contentBox">
          <Item margin="40px 20px 60px 20px">

          </Item>
        </Content>
      </Section>
    </>
  );
}

// css style


// Export Default
export default Terms;
