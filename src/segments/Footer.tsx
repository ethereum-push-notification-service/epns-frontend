import React from "react";

import styled, { css } from 'styled-components';
import {Section, Content, Item, ItemH, WaveOuter, WaveInner, Button, Image, Span, Anchor, FormSubmision, Input, ItemBreak} from 'components/SharedStyling';

import { FaCheckCircle, FaTwitter, FaApple, FaTelegramPlane, FaMedium, FaGithub, FaGooglePlay } from 'react-icons/fa';
import { IoMdRocket, IoMdHeart, IoMdNotifications } from 'react-icons/io';

import Loader from 'react-loader-spinner';
import Wave from 'react-wavify';

import Bell from 'components/Bell';

// Create Header
function Foot() {
  const [badgeCounter, setBadgeCounter] = React.useState(0);

  const [mailListFooterProcessing, setMailListProcessing] = React.useState(0);
  const [mailListFooterEmail, setMailListEmail] = React.useState('');
  const [mailListFooterError, setMailListError] = React.useState('');

  // HANDLE EMAIL
  // ---------
  const handleMailingListFooterSubmit = (e) => {
    e.preventDefault();

    // Check everything in order
    if (validateEmailFooter(mailListFooterEmail)) {
      setMailListProcessing(1);

      const details = {
        'name': '',
        'email': mailListFooterEmail,
        'list': 'YPwxHS892tH8Nhs13wzKqWbQ',
        'api_key': 'TdzMcZVNTn1mjtAJHBpB',
        'boolean': true
      }

      let formBody: any = [];
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
          // console.log(err);
          setMailListError("Mayday! Mayday! something went wrong. Please retry...");
          setMailListProcessing(0);
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
  const validateEmailFooter = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  // ---------

  // RENDER
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
      <Section theme="#e20880" gradient="linear-gradient(0deg, #674c9f 0%, rgba(226,8,128,1) 100%)">
        <Content className="contentBox" padding="0px 0px 20px 0px">
          <Item margin="0px 0px" flex="auto">
            {/* DIVIDE SECTION */}
            <ItemH self="stretch" margin="0px 20px 20px 20px">
              {/* LOGO AND ABOUT US */}
              <Item flex="1" minWidth="200px" maxWidth="400px">
                <ItemH margin="0px -10px 0px -10px" columnGap="20px" rowGap="20px">
                  <Item margin="20px 10px" height="80px" width="80px" bg="#fff" radius="80px" flex="initial">
                    <Bell uri="/" belltheme="color" width={48} height={48} badgeCount={badgeCounter} bellPressedCB={() => setBadgeCounter(badgeCounter + 1)} hideBadge={true}/>
                  </Item>
                  <Span margin="10px 10px" textTransform="uppercase" size="1.2em" spacing="0.2em" color="#fff" flex="inherit">Ethereum Push Notification Service</Span>
                </ItemH>

                <Span color="#ffffffcc" margin="10px 0px" size="1.2em" weight="200">
                  Ethereum Push Notification Service (EPNS) is a decentralized notification protocol that enables any dApps or smart contracts to send platform agnostic, incentivized and dynamic notifications
                </Span>
              </Item>
            </ItemH>

            {/* MAILING */}
            <FooterItem self="center" margin="20px 20px 10px 20px" minWidth="800px">
              {/* MAILING LIST */}
              <ItemH margin="20px 0px 0px 0px" self="stretch">
                <FormSubmision
                  flex="1"
                  direction="row"
                  margin="20px 0px 10px"
                  justify="center"
                  size="1.1rem"
                  onSubmit={handleMailingListFooterSubmit}
                >

                  <Item align="stretch">
                    <Span weight="400" textAlign="center" size="0.9em" textTransform="uppercase" color="#ffffff99" margin="0px 0px 20px 0px" spacing="0.1em">Keep up to date with all things EPNS!</Span>
                    <ItemH margin="10px -10px">
                      {mailListFooterProcessing == 0 &&
                        <>
                          <Item flex="1" justify="flex-start" align="stretch" minWidth="280px" margin="10px">
                            <FooterInputText
                              required
                              placeholder="john@wick.com"
                              radius="4px"
                              padding="12px"
                              bg="#fff"
                              value={mailListFooterEmail}
                              onChange={(e) => {setMailListEmail(e.target.value)}}
                              autocomplete="email"
                            />
                              {mailListFooterEmail.trim().length == 0 &&
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

                      <Item flex="0" justify="stretch" self="stretch" align="stretch" margin="10px">
                        {mailListFooterProcessing != 2 &&
                          <Button
                            bg='#00000033'
                            color='#fff'
                            flex="1"
                            radius="4px"
                            disabled={mailListFooterProcessing}
                          >
                            {mailListFooterProcessing == 1 &&
                              <Loader
                                 type="Oval"
                                 color="#fff"
                                 height={24}
                                 width={24}
                                />
                            }
                            {mailListFooterProcessing == 0 &&
                              <Input cursor="hand" color="#fff" weight="400" size="0.8em" spacing="0.2em" type="submit" value="Submit" />
                            }
                          </Button>
                        }
                      </Item>
                    </ItemH>
                  </Item>

                  <ItemBreak />

                  <Item align="center" margin="10px">
                    {mailListFooterProcessing == 2 &&
                      <ItemH
                        color="#fff"
                        bg='#00000033'
                        padding="10px 15px"
                      >
                        <FaCheckCircle size={24} color="#ffffff33"/>
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

                    {mailListFooterError && mailListFooterProcessing == 0 &&
                      <Item
                        color="#fff"
                        bg='#00000033'
                        padding="10px 15px"
                      >
                        <Span
                          color="#fff"
                          textTransform="uppercase"
                          spacing="0.1em"
                        >
                          {mailListFooterError}
                        </Span>
                      </Item>
                    }
                  </Item>
                </FormSubmision>

              </ItemH>
            </FooterItem>

            {/* SOCIAL LINKS */}
            <FooterItem self="center" margin="0px 20px 10px 20px" minWidth="800px">
              <ItemH self="stretch" margin="0px -20px" align="stretch" justify="center">
                <Item bg="#fff" radius="12px" overflow="hidden" flex="initial" minWidth="280px" margin="20px">
                  <ItemH bg="#000" self="stretch" margin="0px 0px 5px">
                    <Span color="#fff" textAlign="center" padding="6px 4px 6px 4px">
                      Follow our story!
                    </Span>
                    <IoMdHeart size={18} color="#C51104"/>
                  </ItemH>

                  <ItemH padding="10px">
                    <Anchor
                      href="https://twitter.com/epnsproject"
                      target="_blank"
                      bg="#000"
                      radius="4px"
                      margin="10px"
                    >
                      <FaTwitter size={20} color="#e20880"/>
                    </Anchor>
                    <Anchor
                      href="https://t.me/epnsproject"
                      target="_blank"
                      bg="#000"
                      radius="4px"
                      margin="10px"
                    >
                      <FaTelegramPlane size={20} color="#674c9f"/>
                    </Anchor>
                    <Anchor
                      href="https://medium.com/@epnsproject"
                      target="_blank"
                      bg="#000"
                      radius="4px"
                      margin="10px"
                    >
                      <FaMedium size={20} color="#35c5f3"/>
                    </Anchor>
                  </ItemH>
                </Item>

                <Item bg="#fff" align="stretch" radius="12px" overflow="hidden" flex="initial" minWidth="280px" margin="20px">
                  <ItemH bg="#000" margin="0px 0px 5px">
                    <Span color="#fff" textAlign="center" padding="6px 4px 6px 4px">
                      Repo / Alpha Access
                    </Span>
                  </ItemH>

                  <ItemH padding="10px">
                    <Anchor
                      href="https://apps.apple.com/app/ethereum-push-service-epns/id1528614910"
                      target="_blank"
                      bg="#000000"
                      radius="4px"
                      margin="10px"
                    >
                      <FaApple size={20} color="#e20880"/>
                    </Anchor>
                    <Anchor
                      href="https://play.google.com/store/apps/details?id=io.epns.epns"
                      target="_blank"
                      bg="#000000"
                      radius="4px"
                      margin="10px"
                    >
                      <FaGooglePlay size={20} color="#674c9f"/>
                    </Anchor>
                    <Anchor
                      href="https://app.epns.io"
                      target="_blank"
                      bg="#000000"
                      radius="4px"
                      margin="10px"
                    >
                      <IoMdNotifications size={20} color="#35c5f3"/>
                    </Anchor>
                    <Anchor
                      href="https://github.com/ethereum-push-notification-service"
                      target="_blank"
                      bg="#000000"
                      radius="4px"
                      margin="10px"
                    >
                      <FaGithub size={20} color="#fff"/>
                    </Anchor>
                  </ItemH>
                </Item>
              </ItemH>
            </FooterItem>

            {/* FOOTER LINKS */}
            <ItemH self="stretch" justify="center" minWidth="auto" size="0.8em" margin="0px 20px 0px 20px">
              <Item align="center" margin="0px" minWidth="auto" flex="initial">
                <Anchor
                  href="./privacy"
                  bg="transparent"
                  padding="4px 15px"
                  margin="10px"
                >
                  Privacy Policy
                </Anchor>
              </Item>

              <Item align="center" margin="0px" minWidth="auto" flex="initial">
                <Anchor
                  href="./tos"
                  bg="transparent"
                  padding="4px 15px"
                  margin="10px"
                >
                  Terms of Service
                </Anchor>
              </Item>
            </ItemH>
          </Item>


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
  margin: 60px 0px 0px 0px;
`

const FooterInputText = styled(Input)`
  background: transparent;
  color: #fff;
  border-bottom: 1px solid #fff;
  border-radius:0px;

  ::placeholder {
    color: #ffffff00;
  }
`

const FooterItem = styled(Item)`
  @media (max-width: 800px) {
    min-width: 280px;
    flex: auto;
    align-self: stretch;
  }
`

// Export Default
export default Foot;
