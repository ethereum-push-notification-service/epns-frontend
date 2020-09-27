import React from "react";

import styled, { css } from 'styled-components';
import {Section, Content, Item, ItemH, WaveOuter, WaveInner, Span, Anchor} from 'components/SharedStyling';

import Wave from 'react-wavify';

// Create Header
function Foot() {
  return (
    <Footer>
      <WaveOuter bottom="auto" top="30px">
        <WaveInner>
          <Wave fill='#e20880'
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

      {/* FOOTER SECTION */}
      <Section theme="#e20880" gradient="linear-gradient(0deg, #674c9f 0%, rgba(226,8,128,1) 100%)" padding="0px 0px 50px 0px">
        <Content className="contentBox">
          <ItemH align="stretch" justify="flex-start" minWidth="auto" columnGap="20px" margin="0px 20px">

            <Item align="center" margin="0px" minWidth="auto" flex="0">
              <HeadAnchor
                href="https://app.epns.io"
                target="_blank"
                bg="transparent"
                hoverBG="#35c5f3"
                padding="4px 15px"
              >
                Blog
              </HeadAnchor>
            </Item>

            <Item align="center" margin="0px" minWidth="auto" flex="0">
              <HeadAnchor
                href="https://app.epns.io"
                target="_blank"
                bg="transparent"
                hoverBG="#674c9f"
                padding="4px 15px"
              >
                Contact
              </HeadAnchor>
            </Item>

          </ItemH>
        </Content>
      </Section>
    </Footer>
  );
}

// CSS Styles
const Footer = styled.footer`
  display: flex;
  align-self: stretch;
  align-items: stretch;
  justify-content: center;
  position: relative;
`

const HeadAnchor = styled(Anchor)`
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    opacity: 0;
    background: ${props => props.hoverBG || 'transparent'};
  }

  &:hover:before{
    opacity: 1;
  }
`

// Export Default
export default Foot;
