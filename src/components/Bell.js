import React from "react";
import styled, { css, keyframes } from 'styled-components';

import { useHistory } from 'react-router-dom';

// Create Header
function Bell({ uri, belltheme, badgeCount, bellPressedCB, hideBadge, width, height }) {
  const [badge, setBadge] = React.useState(0);
  const [ring, setRing] = React.useState(false);

  const history = useHistory();

  React.useEffect(() => {
    // Set new badge count and ring the bell
    setBadge(badgeCount);

    if (badgeCount > 0) {
      setResetRinger();
    }
  }, [badgeCount]);

  const setResetRinger = () => {
    // Not home, goto home
    if (uri != "/") {
      // Return to homepage if not homepage
      history.push("/");

      return;
    }

    setRing(true);

    setTimeout(() => {
        setRing(false)
    }, 500);
  }

  return (
    <Container
      belltheme={belltheme}
      badge={badgeCount}
      onClick={() => {
        if (bellPressedCB) {bellPressedCB();}
      }}
      width={width}
      height={height}
    >
      <BellImage ring={ring} src="./bell/bell.png" className="tadaaa" ringme={ring} width={width} height={height} />
      <BellImageAbs src="./bell/bellball.png" width={width} height={height} />
      <BellImageAbs src="./bell/ring.png" width={width} height={height} />
      {badge != 0 && (hideBadge == false || !hideBadge) &&
        <Badge>{badge}</Badge>
      }
    </Container>
  );
}

// css styles
const Container = styled.button`
  border: 0;
  outline: 0;
  background: transparent;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px;
  position: relative;
  height: ${props => props.height || 40}px;
  width: ${props => props.width || 40}px;

  ${({ belltheme, badge }) => (belltheme==="white" && badge==0) && `
    filter: brightness(0) invert(1);
  `}
`

const tadaaa = keyframes`
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    -ms-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  10%, 20% {
    -webkit-transform: scale3d(.96, .96, .96) rotate3d(0, 0, 1, -5deg);
    -ms-transform: scale3d(.96, .96, .96) rotate3d(0, 0, 1, -5deg);
    transform: scale3d(.96, .96, .96) rotate3d(0, 0, 1, -5deg);
  }

  30%, 50%, 70%, 90% {
    -webkit-transform: scale3d(1.10, 1.10, 1.10) rotate3d(0, 0, 10, 5deg);
    -ms-transform: scale3d(1.10, 1.10, 1.10) rotate3d(0, 0, 10, 5deg);
    transform: scale3d(1.10, 1.10, 1.10) rotate3d(0, 0, 10, 5deg);
  }

  40%, 60%, 80% {
    -webkit-transform: scale3d(1.10, 1.10, 1.10) rotate3d(0, 0, 1, -5deg);
    -ms-transform: scale3d(1.10, 1.10, 1.10) rotate3d(0, 0, 1, -5deg);
    transform: scale3d(1.10, 1.10, 1.10) rotate3d(0, 0, 1, -5deg);
  }

  100% {
    -webkit-transform: scale3d(1, 1, 1);
    -ms-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
`;

const BellImage = styled.img`
  position: absolute;
  height: ${props => props.height || 40}px;
  width: ${props => props.width || 40}px;

  transition: transform .2s ease-out;
  ${ props => props.ringme && css`
    animation: ${tadaaa} 1s ease-out;
  `};


`

const BellImageAbs = styled(BellImage)`
  left: 0,
`

const Badge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: normal;
  max-width: 15px;
  border-radius: 10px;
  text-overflow: ellipsis;
  position: absolute;
  font-size: 10px;
  color: #fff;
  padding: 2px 4px;
  background: rgba(208.0,44.0,30.0,1.0);
  top: -2px;
  right: -2px;
  font-weight: bold;
`

// Export Default
export default Bell;
