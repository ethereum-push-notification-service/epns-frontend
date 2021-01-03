import React, {useRef} from "react";
import ReactGA from 'react-ga';
import MetaTags, {ReactTitle} from 'react-meta-tags';

import styled, { css } from 'styled-components';
import {SectionFSHero, Content, Item, ItemH, ItemBreak, Image, Span, Anchor, Button, FormSubmision, Input} from 'components/SharedStyling';

import { FaCheckCircle, FaTwitter, FaTelegramPlane, FaMedium, FaGithub, FaGooglePlay } from 'react-icons/fa';
import { IoMdRocket, IoMdNotifications } from 'react-icons/io';
import { AiOutlineSound } from 'react-icons/ai';

import Loader from 'react-loader-spinner';

import ReactPlayer from 'react-player/lazy';
import ReactPlayerBG from 'react-background-video-player';

import Bell from 'components/Bell';


// Create Header
function ComingSoon({ timeRemaining }) {
  ReactGA.pageview('/coming-soon');

  const videoBG = useRef(null);

  const [userInControl, setUserInControl] = React.useState(false);

  const [videoLoaded, setVideoLoaded] = React.useState(false);
  const [showVideo, setShowVideo] = React.useState(1);

  const [audioLoaded, setAudioLoaded] = React.useState(false);

  const [startEverything, setStartEverything] = React.useState(false);

  const [ticker, setTicker] = React.useState(-2);
  const [counter, setCounter] = React.useState(0);

  const [time, setTime] = React.useState({hours: 'zZ', mins: 'zZ', secs: 'zZ'});

  const [badgeCounter, setBadgeCounter] = React.useState(0);
  const [bellTheme, setBellTheme] = React.useState("white");

  const [hhTheme, setHHTheme] = React.useState("#fff");
  const [mmTheme, setMMTheme] = React.useState("#fff");
  const [ssTheme, setSSTheme] = React.useState("#fff");

  // For the mailing list
  const [mailListProcessing, setMailListProcessing] = React.useState(0);
  const [mailListName, setMailListName] = React.useState('');
  const [mailListEmail, setMailListEmail] = React.useState('');
  const [mailListError, setMailListError] = React.useState('');

  // For video
  React.useEffect(() => {
    if (videoLoaded && audioLoaded && userInControl) {
      allMediaLoaded();
    }

  }, [videoLoaded, audioLoaded, userInControl]);

  // For countdown
  React.useEffect(() => {
    if (ticker != -2) {
      const timer = setTimeout(() => {
        setTicker(ticker - 1);

        if (ticker - 1 > -2 || !ticker) {
          calculateTimeLeft(ticker - 1);
        }
      }, 1000);
    }
    else {
      setTicker(timeRemaining);
    }

  }, [ticker, timeRemaining]);

  const calculateTimeLeft = (epochInSecs) => {
    if (epochInSecs > 0) {
      const hh = Math.floor((epochInSecs / (60 * 60))).toString();
      const mm = Math.floor((epochInSecs / 60) % 60).toString()
      const ss = Math.floor(epochInSecs % 60).toString()

      const hhf = hh.length < 2 ? (parseInt(hh) == 0 ? "00" : "0" + hh) : hh;
      const mmf = mm.length < 2 ? (parseInt(mm) == 0 ? "00" : "0" + mm) : mm;
      const ssf = ss.length < 2 ? (parseInt(ss) == 0 ? "00" : "0" + ss) : ss;

      setTime({
        hours: hhf,
        mins: mmf,
        secs: ssf
      });
    }
  }

  // For Video
  const videoReady = (e) => {
    setVideoLoaded(true);
  }

  const audioReady = () => {
    setAudioLoaded(true);
  }

  const allMediaLoaded = () => {
    setStartEverything(true);

    videoBG.current.play();

    // Time based animations
    setTimeout(() => {
      setBellTheme("color");
      setBadgeCounter(badgeCounter + 1);
    }, 26 * 1000);

    setTimeout(() => {
      setHHTheme("#e20880");
    }, 39.5 * 1000);

    setTimeout(() => {
      setMMTheme("#674c9f");
    }, 39.75 * 1000);

    setTimeout(() => {
      setSSTheme("#35c5f3");
    }, 40 * 1000);

    setTimeout(() => {
      setShowVideo(0);
    }, 60 * 1000);
  }

  // HANDLE EMAIL
  // ---------
  const handleMailingListSubmit = (e) => {
    e.preventDefault();

    // Check everything in order
    if (validateEmail(mailListEmail)) {
      setMailListProcessing(1);

      const details = {
        'name': mailListName,
        'email': mailListEmail,
        'list': 'YPwxHS892tH8Nhs13wzKqWbQ',
        'api_key': 'TdzMcZVNTn1mjtAJHBpB',
        'boolean': true
      }

      let formBody = [];
      for (let property in details) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
      }
      formBody = formBody.join("&");

      // POST request using fetch inside useEffect React hook
      const requestOptions = {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
          body: formBody
      };

      fetch('https://tools.epns.io/sendy/subscribe', {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
          body: formBody
        })
        .then(response => response.json())
        .then(jsondata => {
            // console.log(jsondata);
            setMailListProcessing(2);
          })
        .catch(err => {
          setMailListProcessing(2);
          // console.log(err);
          // setMailListError("Mayday! Mayday! something went wrong. Please retry...");
          // setMailListProcessing(0);
        });
    }
    else {
      setMailListError("Incorrect e-mail, please check and retry!");
      setMailListProcessing(0);
    }
  }
  // ---------

  // HELPER METHODS
  // ---------
  const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  // ---------

  // RENDER
  return (
    <>
      {/* OPEN GRAPH DEFINITION */}
      {/*
      <ReactTitle title="Coming Soon"/>
      <MetaTags>
        <title>Ethereum Push Notification Service (EPNS) | Coming Soon</title>
        <meta name="description" content="[Coming Soon!] Ethereum Push Notification Service (EPNS) - #BUIDLing World's first notification protocol" />
        <meta property="og:title" content="Ethereum Push Notification Service | Coming Soon" />
        <meta property="og:image" content="https://epns.io/previews/comingsoon.jpg" />
      </MetaTags>
      */}

      {/* HERO SECTION */}
      <SectionFSHero>

        {showVideo &&
          <SectionBG opacity={showVideo}>
            <ReactPlayerBG
              ref={videoBG}
              src='./thunderslow.mp4'
              loop={false}
              containerWidth="100%"
              containerHeight="100%"
              autoPlay={false}
              onReady={videoReady}
            />
          </SectionBG>
        }

        {!userInControl &&
          <SectionCover>
            <Anchor
              href="#"
              onClick={(e) => {e.preventDefault(); setUserInControl(!userInControl)}}
              self="stretch"
              flex="1"
              direction="column"
            >
              <Item align="center" margin="30px 30px 10px 30px" flex="initial" filter="brightness(0) invert(1)" >
                <Image src="./logos/epnsfullname.png" srcSet="./logos/epnsfullname@2x.png 2x, ./logos/epnsfullname@3x.png 3x" />
              </Item>
              <Item align="center" margin="0px 30px 10px 30px" flex="initial">
                <Span color="#ffffff99" size="0.8em">We got News!!!</Span>
              </Item>
              <Item align="center" margin="0px 30px 30px 30px" flex="initial">
                <Span color="#fff" size="1.1em">Tap to get started!</Span>
              </Item>
            </Anchor>

            <BottomItem>
              <ItemH>
                <Span color="#fff" textTransform="uppercase" weight="400" size="0.8rem" spacing="0.2em" margin="0px 5px 0px 0px">Contains Audio</Span>
                <AiOutlineSound size={18} color="#fff"/>
              </ItemH>
            </BottomItem>
          </SectionCover>
        }

        <Item>
          <Content className="contentBox" flex="1" padding="0px 20px">
            <Item margin="20px" align="center">
              <Item margin="10px 0px" bg="#00000088" radius="4px" flex="none">
                <Item margin="20px 0px 0px 0px">
                  <Bell belltheme={bellTheme} width={80} height={80} badgeCount={badgeCounter} bellPressedCB={() => {}} hideBadge={true}/>
                </Item>
                <Item margin="20px" maxWidth="200px">
                  <Span textAlign="center" textTransform="uppercase" size="0.8em" spacing="0.2em" color="#fff" flex="inherit">Ethereum Push Notification Service</Span>
                </Item>
              </Item>

              <Item margin="20px 0px" padding="15px 15px" bg="#000" flex="inital" radius="4px">
                <Item>
                  <Span textAlign="center" textTransform="uppercase" size="0.8em" spacing="0.2em" color="#fff" flex="inherit">Countdown</Span>
                </Item>

                <ItemH size="3em">
                  <Span color={hhTheme} weight="700" family="'Monstrat', Helvetica, sans-serif" margin="0px 5px">{time.hours}</Span>
                  <Span color="#fff" weight="200">:</Span>
                  <Span color={mmTheme} weight="700" family="'Monstrat', Helvetica, sans-serif" margin="0px 5px">{time.mins}</Span>
                  <Span color="#fff" weight="200">:</Span>
                  <Span color={ssTheme} weight="700" family="'Monstrat', Helvetica, sans-serif" margin="0px 5px">{time.secs}</Span>
                </ItemH>
              </Item>

              <Item margin="10px 0px" direction="row" size="4em" flex="stretch">
                <FormSubmision
                  flex="1"
                  direction="row"
                  margin="20px 0px"
                  justify="center"
                  rowGap="20px"
                  columnGap="20px"
                  size="1.1rem"
                  onSubmit={handleMailingListSubmit}
                >

                  <Item align="stretch">
                    {mailListProcessing == 0 &&
                      <Span weight="300" textTransform="uppercase" color="#fff" spacing="0.1em">Subscribe to our mailing list!</Span>
                    }
                    <ItemH margin="10px -10px" rowGap="20px" columnGap="20px">
                      {mailListProcessing == 0 &&
                        <>
                          <Item flex="1" margin="10px 10px" justify="flex-start" align="stretch" minWidth="280px">
                            <Input
                              radius="4px"
                              padding="12px"
                              bg="#fff"
                              border="12px"
                              placeholder="John Wick"
                              value={mailListName}
                              onChange={(e) => {setMailListName(e.target.value)}}
                              autocomplete="name"
                            />
                              {mailListName.trim().length == 0 &&
                                <Span
                                  padding="4px 10px"
                                  right="0px"
                                  top="0px"
                                  pos="absolute"
                                  color="#fff"
                                  bg="#000"
                                  size="0.7rem"
                                  z="1"
                                >
                                  Name
                                </Span>
                              }
                          </Item>

                          <Item flex="5" margin="10px 10px" justify="flex-start" align="stretch" minWidth="280px">
                            <Input
                              required
                              placeholder="john@wick.com"
                              radius="4px"
                              padding="12px"
                              bg="#fff"
                              value={mailListEmail}
                              onChange={(e) => {setMailListEmail(e.target.value)}}
                              autocomplete="email"
                            />
                              {mailListEmail.trim().length == 0 &&
                                <Span
                                  padding="4px 10px"
                                  right="0px"
                                  top="0px"
                                  pos="absolute"
                                  color="#fff"
                                  bg="#000"
                                  size="0.7rem"
                                  z="1"
                                >
                                  E-mail
                                </Span>
                              }
                          </Item>
                        </>
                      }

                      <Item flex="1" margin="10px 10px" justify="stretch" self="stretch" align="stretch" minWidth="280px">
                        {mailListProcessing != 2 &&
                          <Button
                            bg='#000'
                            color='#fff'
                            flex="1"
                            radius="4px"
                            disabled={mailListProcessing}
                          >
                            {mailListProcessing == 1 &&
                              <Loader
                                 type="Oval"
                                 color="#fff"
                                 height={24}
                                 width={24}
                                />
                            }
                            {mailListProcessing == 0 &&
                              <Input cursor="hand" color="#fff" weight="400" size="0.8em" spacing="0.2em" type="submit" value="Submit" />
                            }
                          </Button>
                        }
                      </Item>
                    </ItemH>
                  </Item>

                  <ItemBreak />

                  <Item align="center">
                    {mailListProcessing == 2 &&
                      <ItemH
                        color="#fff"
                        bg="#000"
                        padding="10px 15px"
                        columnGap="0px"
                        rowGap="0px"
                      >
                        <FaCheckCircle size={24} color="#fff"/>
                        <Span
                          padding="0px 0px 0px 8px"
                          color="#fff"
                          textTransform="uppercase"
                          spacing="0.1em"
                        >
                          Thanks for Subscribing! We will be in Touch :)
                        </Span>
                      </ItemH>
                    }

                    {mailListError && mailListProcessing == 0 &&
                      <Item
                        color="#fff"
                        bg="#000"
                        padding="10px 15px"
                        columnGap="0px"
                        rowGap="0px"
                      >
                        <Span
                          color="#fff"
                          textTransform="uppercase"
                          spacing="0.1em"
                        >
                          {mailListError}
                        </Span>
                      </Item>
                    }
                  </Item>
                </FormSubmision>
              </Item>

              <ItemH padding="20px 10px" flex="initial">
                <Anchor
                  href="https://twitter.com/epnsproject"
                  target="_blank"
                  radius="4px"
                  margin="0px 5px"
                >
                  <FaTwitter size={20} color="#fff"/>
                </Anchor>
                <Anchor
                  href="https://t.me/epnsproject"
                  target="_blank"
                  radius="4px"
                  margin="0px 5px"
                >
                  <FaTelegramPlane size={20} color="#fff"/>
                </Anchor>
                <Anchor
                  href="https://medium.com/@epnsproject"
                  target="_blank"
                  radius="4px"
                  margin="0px 5px"
                >
                  <FaMedium size={20} color="#fff"/>
                </Anchor>
                <Anchor
                  href="https://github.com/ethereum-push-notification-service"
                  target="_blank"
                  radius="4px"
                  margin="0px 5px"
                >
                  <FaGithub size={20} color="#fff"/>
                </Anchor>
                <Anchor
                  href="https://play.google.com/store/apps/details?id=io.epns.epns"
                  target="_blank"
                  radius="4px"
                  margin="0px 5px"
                >
                  <FaGooglePlay size={20} color="#fff"/>
                </Anchor>
                <Anchor
                  href="https://app.epns.io"
                  target="_blank"
                  radius="4px"
                  margin="0px 5px"
                >
                  <IoMdNotifications size={20} color="#fff"/>
                </Anchor>
              </ItemH>
            </Item>

            {/*
            <Item flex="initial" margin="20px 0px">
              <Anchor
                href="https://soundcloud.com/danny-delgado-music/imagine-dragons-thunder-danny-delgado-remix"
                target="_blank"
                radius="4px"
                margin="0px 5px"
              >
                <Span color="#fff">Music Powered by SoundCloud.com | (Credits: Danny Delgado)</Span>
              </Anchor>
            </Item>
            */}
          </Content>

          <PlayerWrapper>
            <ReactPlayer
              url='https://api.soundcloud.com/tracks/334733635&color=#e20880&inverse=false&auto_play=true&show_user=true'
              height="20px"
              width="100%"
              playing={startEverything}
              onReady={audioReady}
              config={{
              }}
            />

          </PlayerWrapper>
        </Item>
      </SectionFSHero>
    </>
  );
}

// css style
const SectionBG = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const SectionCover = styled(SectionFSHero)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  z-index: 999;

  opacity: 1;

  -webkit-transition: all 1s ease-in-out;
  -moz-transition: all 1s ease-in-out;
  -o-transition: all 1s ease-in-out;
  transition: all 1s ease-in-out;

  ${({ opacity }) => opacity == 0 && css`
    opacity: 0;
  `};

`;

const PlayerWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 10px 20px;
`

const ReactPlayerSound = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const ReactPlayerHide = styled(ReactPlayer)`
  display: none;
`

const BottomItem = styled.div`
  position: fixed;
  bottom: 20px;
  left: 0;
  right: 0;
  opacity: 0.75;
`

// Export Default
export default ComingSoon;
