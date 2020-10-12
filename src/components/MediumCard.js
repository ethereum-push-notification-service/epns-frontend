import React from "react";

import styled, { css } from 'styled-components';
import {Item, Image, Span, Anchor} from 'components/SharedStyling';

import Tilt from 'react-tilt'

// Create Header
function MediumCard({ title, thumbnail, link }) {
  // RENDER
  return (
    <Item justify="stretch" align="stretch" minWidth="280px" margin="20px">
      <TiltModded className="Tilt" options={{ max : 40 }}>
        <MediumCardLink
          href={`${link}`}
          direction="column"
          target="_blank"
          title={`Article talking About ${title}`}
          bg="#000"
          hover="#000"
          radius="12px"
          align="stretch"
        >
          <Image src={thumbnail} />
          <Span padding="20px 20px 12px 20px" size="1em" spacing="0.2em" color="#fff">{title}</Span>
        </MediumCardLink>
      </TiltModded>
    </Item>
  );
}

// css style
// box-shadow: rgb(35 29 46 / 0.2) 0px 10px 40px;
const TiltModded = styled(Tilt)`

`

const MediumCardLink = styled(Anchor)`
  padding: 8px;

  ${Image} {
    border-radius: 8px;
    overflow: hidden;
  }

  ${Span} {

  }

  &:hover ${Span} {
    color: #fff;
  }
`


// Export Default
export default MediumCard;
