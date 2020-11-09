import React from "react";
import ReactGA from 'react-ga';

import styled, { css } from 'styled-components';
import {Section, SectionFS, SectionFSHero, Content, Item, ItemH, ItemBreak, WaveOuter, WaveInner, Arc, H1, H2, H3, Image, P, Span, Anchor, Button, Showoff, FormSubmision, Input, TextField} from 'components/SharedStyling';

import ScrollTrigger from 'react-scroll-trigger';

import YouTube from 'react-youtube';
import { Tweet } from 'react-twitter-widgets'

import Loader from 'react-loader-spinner';

import Wave from 'react-wavify';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import { FaCheckCircle, FaSeedling } from 'react-icons/fa';
import { IoMdRocket } from 'react-icons/io';
import { BsChevronExpand, BsChevronUp, BsChevronDown } from 'react-icons/bs';
import { VscClose } from 'react-icons/vsc';
import { RiHeartsFill } from 'react-icons/ri';
import { GiReceiveMoney } from 'react-icons/gi';
import { AiOutlinePlusCircle } from 'react-icons/ai';

import EPNSChannelItems from 'components/EPNSChannelItems';
import Medium from 'components/Medium';
import TeamMember from 'components/TeamMember';

const randomTeamQuotes = [
  "ONE AMONG US DOESN'T LIKE FARMING 🙀😱",
  "ONE AMONG US HAS A CAT 🐈",
  "ONE AMONG US HAS A NAME KNOWN TO SOME 🦸🏻",
  "ONE AMONG US HAS MORE BTC THAN ETH 😬",
]

const contactFormTopics = [
  'Support', 'Integrate', 'Career', 'Others'
];

// Create Header
function Home() {
  ReactGA.pageview('/home');

  // For the hero banner
  const [animateHero, setAnimateHero] = React.useState(true);

  // For Featured
  const [featuredShowAll, setFeaturedShowAll] = React.useState(false);
  const [playTeaserVideo, setPlayTeaserVideo] = React.useState(false);

  // For the mailing list
  const [mailListProcessing, setMailListProcessing] = React.useState(0);
  const [mailListName, setMailListName] = React.useState('');
  const [mailListEmail, setMailListEmail] = React.useState('');
  const [mailListError, setMailListError] = React.useState('');

  // For Integrations
  const [integrationShowAll, setIntegrationShowAll] = React.useState(false);

  // For Partners
  const [partnersShowAll, setPartnersShowAll] = React.useState(false);

  // For the contact form
  const [contactFormProcessing, setContactFormProcessing] = React.useState(0);
  const [contactFormName, setContactFormName] = React.useState('');
  const [contactFormEmail, setContactFormEmail] = React.useState('');
  const [contactFormTopic, setContactFormTopic] = React.useState(contactFormTopics[0]);
  const [contactFormSub, setContactFormSub] = React.useState('');
  const [contactFormMsg, setContactFormMsg] = React.useState('');
  const [contactFormError, setContactFormError] = React.useState('');

  React.useEffect(() => {

  });

  // Handle ANIMATIONS
  // ---------

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

  // HANDLE CONTACT FORM
  // ---------
  const handleContactFormSubmit = (e) => {
    e.preventDefault();

    // Check everything in order
    if (validateEmail(contactFormEmail)) {

      if (isEmpty(contactFormName)) {
        setContactFormError("Name can't be empty");
        setContactFormProcessing(0);
      }
      else if (isEmpty(contactFormSub)) {
        setContactFormError("Subject can't be empty");
        setContactFormProcessing(0);
      }
      else if (isEmpty(contactFormMsg)) {
        setContactFormError("Message can't be empty");
        setContactFormProcessing(0);
      }
      else {
        setContactFormProcessing(1);

        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            from: contactFormEmail,
            name: contactFormName,
            topic: contactFormTopic,
            sub: contactFormSub,
            msg: contactFormMsg
          })
        };

        fetch('https://backend.epns.io/apis/mailing/send_mail', requestOptions)
          .then(response => response.json())
          .then(jsondata => {
              // console.log(jsondata);
              setContactFormProcessing(2);
            })
          .catch(err => {
            // console.log(err);
            setContactFormError("Mayday! Mayday! something went wrong. Please retry...");
            setContactFormProcessing(0);
          });
      }
    }
    else {
      setContactFormError("Incorrect e-mail, please check and retry!");
      setContactFormProcessing(0);
    }
  }
  // ---------

  // HELPER METHODS
  // ---------
  const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const isEmpty = (field) => {
    if (field.trim().length == 0) {
      return true;
    }

    return false;
  }
  // ---------

  // RENDER
  return (
    <>
      {/* HERO SECTION */}
      <ScrollTrigger onEnter={() => {setAnimateHero(true)}} onExit={() => {setAnimateHero(false)}} triggerOnLoad={false}>
        <SectionFSHero id="hero" padding="15px 0px 0px 0px">
          <Content className="contentBox">
            <ItemH columnGap="40px" margin="0px 20px">
              <Item align="flex-start">
                <H1>Ethereum Push Notification Service</H1>
                <Span margin="-25px 0 0 0"><Span color="rgba(255, 255, 255, 0.5)" weight="600" size="0.9rem">Subscribe. </Span><Span color="rgba(255, 255, 255, 0.5)" weight="600" size="0.9rem">Notify. </Span><Span color="rgba(255, 255, 255, 0.5)" weight="600" size="0.9rem">Earn.</Span></Span>

                  <Span margin="20px 0px" color="rgba(255, 255, 255, 0.5)" size="1.5rem" weight="200">Protocol for <Span color="#fff" weight="400">Platform Agnostic, </Span><Span color="#fff" weight="400">Incentivized Notifications</Span> from <Span color="rgba(255, 255, 255, 0.5)" weight="600">Blockchain!</Span></Span>

                <ItemH align="flex-start" justify="flex-start" margin="10px -10px 10px -10px" size="0.8rem">
                  <Anchor href="https://whitepaper.epns.io" title="Read Whitepaper of Ethereum Push Notification Service (EPNS)" target="_blank" bg="#674c9f" margin="10px" radius="4px">Read Whitepaper</Anchor>
                  <Anchor href="./#contact" title="Integrate Ethereum Push Notification Service Protocol (EPNS)" target="_blank" bg="#674c9f" margin="10px" radius="4px">Integrate</Anchor>
                </ItemH>

              </Item>

              <HeroBanner margin="0px">
                <Image src="./hero/heroaltv5.png" srcSet="./hero/heroaltv5@2x.png 2x, ./hero/heroaltv5@3x.png 3x" alt="Hero Banner for Ethereum Push Notification Service" />
              </HeroBanner>
            </ItemH>
          </Content>
          <WaveOuter>
            <WaveInner>
              <Wave fill='#35c5f3'
                paused={!animateHero}
                options={{
                  height: 40,
                  amplitude: 30,
                  speed: 0.35,
                  points: 3
                }}
              />
            </WaveInner>
            <WaveInner>
              <Wave fill='#e20880'
                paused={!animateHero}
                options={{
                  height: 20,
                  amplitude: 35,
                  speed: 0.25,
                  points: 3
                }}
              />
            </WaveInner>
          </WaveOuter>
        </SectionFSHero>
      </ScrollTrigger>


      {/* FEATURED SECTION */}
      <Section id="featured" theme="#e20880" gradient="linear-gradient(0deg, #674c9f 0%, rgba(226,8,128,1) 100%)" padding="0px 0px 80px 0px">
        <Content className="contentBox">
          <Item margin="20px 0px 20px 0px">
            <Featured>
              <Feature
                disabled={true}
                bg="#2f1a37"
              >
                <Item minWidth="auto">
                  <Span color="#fff" weight="400" size="1rem" spacing="0.1em">Featured In</Span>
                </Item>
              </Feature>

              <Feature
                href="https://blog.ethereum.org/2020/08/19/esp-beyond-grants/"
                target="_blank"
                title="Ethereum Push Notification featured on Official Ethereum Blog"
              >
                <Item minWidth="auto">
                  <FeatureImage src="./featured/esp.png" srcSet="./featured/esp@2x.png 2x, ./featured/esp@3x.png 3x" alt="Ethereum Support Program Logo" />
                </Item>
              </Feature>

              <Feature
                href="https://cointelegraph.com/news/dapps-can-now-send-push-notifications-to-ethereum-wallet-users"
                target="_blank"
                title="Coin Telegraph talks about Push Notifications from Ethereum Push Notification Service"
              >
                <Item minWidth="auto">
                  <FeatureImage src="./featured/cointelegraph.png" srcSet="./featured/cointelegraph@2x.png 2x, ./featured/cointelegraph@3x.png 3x" alt="Coin Telegraph Logo" />
                </Item>
              </Feature>

              <Feature
                href="https://twitter.com/epnsproject/status/1299018919143849984?s=20"
                target="_blank"
                title="Ethereum Push Notification Service selected as top 20 project and unvelied at fireside"
              >
                <Item minWidth="auto">
                  <FeatureImage src="./featured/kernel.png" srcSet="./featured/kernel@2x.png 2x, ./featured/kernel@3x.png 3x" alt="Gitcoin Kernel Logo" />
                </Item>
              </Feature>

              <Feature
                href="https://medium.com/@ideovc/hello-its-your-users-calling-7599c679e28d"
                target="_blank"
                title="IDEO Collab selected and mentored Ethereum Push Notification Service as 30 projects from 120 projects for Product Validation Day"
              >
                <Item minWidth="auto">
                  <FeatureImage src="./featured/ideo.png" srcSet="./featured/ideo@2x.png 2x, ./featured/ideo@3x.png 3x" alt="IDEO Collab Product Validation Day Logo" />
                </Item>
              </Feature>

              <Feature
                href="https://podcast.ethhub.io/ethhub-weekly-119-yield-farming-defi-valuations-on-the-rise-eths-value-prop-epns-introduced-consensys-staking-as-a-service-reddits-scaling-ethereum-challenge-and-matter-labs-zk-sync"
                target="_blank"
                title="Anthony Sassano talks about Ethereum Push Notification Service (EPNS) Project"
              >
                <Item minWidth="auto">
                  <FeatureImage src="./featured/ethhub.png" srcSet="./featured/ethhub@2x.png 2x, ./featured/ethhub@3x.png 3x" alt="EthHub Logo" />
                </Item>
              </Feature>

              <Feature
                href="https://twitter.com/DeFi_Dad/status/1297544923219189760?s=20"
                target="_blank"
                title="DeFi Dad upcoming podcast about EPNS"
              >
                <Item minWidth="auto">
                  <FeatureImage src="./featured/defidad.png" srcSet="./featured/defidad@2x.png 2x, ./featured/defidad@3x.png 3x" alt="DeFi Dad Logo" />
                </Item>
              </Feature>

              <Feature
                href="https://www.edcon.io/#maodian"
                target="_blank"
                title="EDCON Panel featuring Harsh Rajat, founder, EPNS talks about DeFi Cross Composability"
              >
                <Item minWidth="auto">
                  <FeatureImage src="./featured/edcon.png" srcSet="./featured/edcon@2x.png 2x, ./featured/edcon@3x.png 3x" alt="Edcon Logo" />
                </Item>
              </Feature>

              {featuredShowAll &&
                <>
                  <Feature
                    href="https://inc42.com/buzz/cryptocurrency-this-week-wazirx-talks-defi-indias-crypto-ban-more/"
                    target="_blank"
                    title="INC42 talks about epnsproject and how dApps can benefit from it"
                  >
                    <Item minWidth="auto">
                      <FeatureImage src="./featured/inc42.png" srcSet="./featured/inc42@2x.png 2x, ./featured/inc42@3x.png 3x" alt="INC42 Logo" />
                    </Item>
                  </Feature>

                  <Feature
                    href="https://medium.com/paradigm-fund/ethereum-biweekly-vol-46-ecosystem-and-projects-updates-development-tools-and-research-articles-c2732e1502aa"
                    target="_blank"
                    title="Paradigm features epnsproject"
                  >
                    <Item minWidth="auto">
                      <FeatureImage src="./featured/paradigm.png" srcSet="./featured/paradigm@2x.png 2x, ./featured/paradigm@3x.png 3x" alt="Paradigm Logo" />
                    </Item>
                  </Feature>

                  <Feature
                    href="https://defipulse.com/defi-list"
                    target="_blank"
                    title="DefiPulse includes epnsproject in their esteemed list!"
                    bg="#e20880"
                  >
                    <Item minWidth="auto">
                      <FeatureImage src="./featured/defipulse.png" srcSet="./featured/defipulse@2x.png 2x, ./featured/defipulse@3x.png 3x" alt="DefiPulse Logo" />
                    </Item>
                  </Feature>

                  <Feature
                    href="https://mojkripto.com/ethereum-push-notification-service-epns-interview/?lang=en"
                    target="_blank"
                    title="MojKripto deep dives into Ethereum Push Notification Service and the team behind it!"
                  >
                    <Item minWidth="auto">
                      <FeatureImage src="./featured/mojkripto.png" srcSet="./featured/mojkripto@2x.png 2x, ./featured/mojkripto@3x.png 3x" alt="MojKripto Logo"/>
                    </Item>
                  </Feature>
                </>
              }

              <Feature
                href="#"
                onClick={(e) => {e.preventDefault(); setFeaturedShowAll(!featuredShowAll)}}
                title="Toggle Show All / Fewer items in feature section"
                bg="#e20880"
              >
                <ItemH minWidth="auto" justify="" columnGap="10px">
                  <Item minWidth="auto" margin="10px 0px" flex="none">
                    {!featuredShowAll &&
                      <Span color="#fff" weight="400" size="1rem" spacing="0.1em">See All</Span>
                    }
                    {featuredShowAll &&
                      <Span color="#fff" weight="400" size="1rem" spacing="0.1em">See Less</Span>
                    }
                  </Item>
                  <Item minWidth="auto" margin="10px 0px" flex="none">
                    <BsChevronExpand size={20} color="#fff"/>
                  </Item>
                </ItemH>
              </Feature>
            </Featured>
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
      </Section>


      {/* PROBLEM AND SOLUTION - PART 1 */}
      <Section id="solution" theme="#fff" padding="20px 0px 0px 0px">
        <Content className="contentBox">
          <Item align="stretch" justify="flex-start" margin="0px 20px">
            {/* THE PROBLEM */}
            <Item align="flex-start" padding="0px 0px 40px 0px">
              <Item align="stretch" justify="flex-start" margin="0px 0px 20px 0px">
                <H2 textTransform="uppercase" spacing="0.1em">
                  <Span weight="200">The </Span><Span bg="#e20880" color="#fff" weight="600" padding="0px 8px">Problem</Span>
                </H2>
                <H3 maxWidth="400px">Why EPNS is the missing piece of Web3 Infrastructure</H3>
              </Item>

              <ItemH margin="10px -20px 10px -20px" align="stretch" flex="auto">
                <EmphasisBlock margin="10px 10px">
                  <EmphasisImage margin="20px" padding="20px">
                    <Image src="./problem/stone.png" srcSet="./problem/stone@2x.png 2x, ./problem/stone@3x.png 3x" alt="Cavemen representing the current blockchain communication" />
                  </EmphasisImage>

                  <EmphasisText>
                    Services expect users to repeatedly check their actions.
                  </EmphasisText>
                </EmphasisBlock>

                <EmphasisBlock margin="10px 10px">
                  <EmphasisImage>
                    <Image src="./problem/quiet.png" srcSet="./problem/quiet@2x.png 2x, ./problem/quiet@3x.png 3x" atl="Missing poster of EPNS alert" />
                  </EmphasisImage>

                  <EmphasisText>
                    Wallet addresses do not receive alerts from any Web3 activity.
                  </EmphasisText>
                </EmphasisBlock>

                <EmphasisBlock margin="10px 10px">
                  <EmphasisImage>
                    <Image src="./problem/angry.png" srcSet="./problem/angry@2x.png 2x, ./problem/angry@3x.png 3x" alt="Angry Unicorn cat for missing out on important alerts" />
                  </EmphasisImage>

                  <EmphasisText>
                    The disconnection leads to poor UX, communication, and engagement.
                  </EmphasisText>
                </EmphasisBlock>
              </ItemH>
            </Item>

            {/* THE SOLUTION */}
            {playTeaserVideo &&
              <PreviewOuter>
                <PreviewBG
                  href="#"
                  bg="transparent"
                  onClick={(e) => {e.preventDefault(); setPlayTeaserVideo(!playTeaserVideo)}}
                  flex="1"

                >
                  <Content className="contentBox">
                    <PreviewClose
                      href="#"
                      bg="transparent"
                      hover="transparent"
                      hoverBG="transparent"
                      onClick={(e) => {e.preventDefault(); setPlayTeaserVideo(!playTeaserVideo)}}
                    >
                      <VscClose size={40} color="#fff"/>
                    </PreviewClose>
                    <Preview>
                      <div class='videoWrapper'><iframe src="https://www.youtube.com/embed/kwwnlmUpRsk?controls=0&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                    </Preview>
                  </Content>
                </PreviewBG>
              </PreviewOuter>
            }

            <Item padding="20px 0px 30px 0px">
              <Item self="stretch" align="flex-end" tabletAlign="flex-start" margin="20px 0px" textAlign="right" tabletTextAlign="left" >
                <H2 textTransform="uppercase" spacing="0.1em">
                  <Span weight="200">The </Span><Span bg="#674c9f" color="#fff" weight="600" padding="0px 8px">Solution</Span>
                </H2>
                <H3 maxWidth="400px">Creating a decentralized middleware for all dapps / smart contracts / web3 services</H3>
              </Item>

              <Solution margin="20px 0px">
                <Item margin="30px 0px" padding="0px 30px 0px 0px" minWidth="auto" align="center" minWidth="280px" maxWidth="550px">
                  <Anchor
                    href="#"
                    bg="transparent"
                    onClick={(e) => {e.preventDefault(); setPlayTeaserVideo(!playTeaserVideo)}}
                    radius="12px"
                  >
                    <Image src="youtubeplay.png" srcSet="youtubeplay@2x.png 2x, youtubeplay@3x.png 3x" />
                  </Anchor>
                </Item>

                <Item margin="10px 0px" padding="0px 0px 0px 30px" align="flex-start" size="1.2rem" rowGap="60px" minWidth="280px">
                  <ShadowBox align="flex-start" bg="#e20880" margin="30px 0px">
                    <Showoff
                      right="-20px"
                      bottom="-20px"
                      opacity="0.2"
                    >
                      <FaSeedling size={140} color="#fff"/>
                    </Showoff>
                    <H2 textTransform="uppercase" spacing="0.1em" margin="30px 0px 0px -1px">
                      <Span bg="#fff" color="#000" weight="600" padding="0px 8px">Content Independent</Span>
                    </H2>
                    <Span margin="20px" color="#fff" weight="200">Protocol does not dictate what content can or can't be delivered to service users. Only <b>services can decide what to communicate</b> to their users!</Span>
                  </ShadowBox>
                  <ShadowBox align="flex-start" bg="#674c9f" margin="30px 0px">
                    <Showoff
                      right="-20px"
                      bottom="-20px"
                      opacity="0.2"
                    >
                      <RiHeartsFill size={140} color="#fff"/>
                    </Showoff>
                    <H2 textTransform="uppercase" spacing="0.1em" margin="30px 0px 0px -1px">
                      <Span bg="#fff" color="#000" weight="600" padding="0px 8px">User Centric</Span>
                    </H2>
                    <Span margin="20px" color="#fff" weight="200"><b>User always opts in</b> for alerts from a service before they can notify you. Indirect consent, while an option will require the service to reward you first!</Span>
                  </ShadowBox>
                  <ShadowBox align="flex-start" bg="#35c5f3" margin="30px 0px">
                    <Showoff
                      right="-20px"
                      bottom="-20px"
                      opacity="0.2"
                    >
                      <GiReceiveMoney size={140} color="#fff"/>
                    </Showoff>
                    <H2 textTransform="uppercase" spacing="0.1em" margin="30px 0px 0px -1px">
                      <Span bg="#fff" color="#000" weight="600" padding="0px 8px">Incentivized Alerts!</Span>
                    </H2>
                    <Span margin="20px" color="#fff">We are a DeFi protocol but a different one! We use <b>Staking</b> by Service, that is <b>Lend</b> out to AAVE to generate <b>Interest</b> which is distributed among the service's subscribers.</Span>
                  </ShadowBox>
                </Item>

              </Solution>
            </Item>
          </Item>
        </Content>
      </Section>


      {/* SUBSCRIBE SECTION */}
      <Section id="subscribe" theme="#f1f1f1" padding="10px 0px 30px 0px" overflow="hidden">
        <BlurBG />
        <WaveOuter bottom="auto" top="70px">
          <WaveInner transform="rotate(180deg)">
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

        <Content className="contentBox" padding="60px 0px 40px 0px">
          <Item margin="0px 20px 0px 20px">
            <Item self="stretch" align="stretch" margin="20px 0px 40px 0px">
              <Showoff
                left="-130px"
                tabletLeft="-60px"
                transform="rotate(45deg)"
                tabletOpacity="0.4"
              >
                <IoMdRocket size={120} color="#fff"/>
              </Showoff>

              <ItemH>
                <FormSubmision
                  flex="1"
                  direction="row"
                  margin="20px 0px"
                  justify="center"
                  size="1.1rem"
                  onSubmit={handleMailingListSubmit}
                >

                  <Item align="stretch">
                    <Span weight="300" textTransform="uppercase" color="#fff" spacing="0.1em">Subscribe to our mailing list!</Span>
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
                              autocomplete="on"
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

              </ItemH>
            </Item>

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
      </Section>


      {/* NOTIFICATION DELIVERED SECTION */}
      <Section id="supported" theme="#fff" padding="20px 0px 80px 0px">
        <Content className="contentBox">
          <Item align="stretch" justify="flex-start" margin="0px 20px">
            <Item align="stretch" justify="flex-start" margin="0px 0px 30px 0px">
              <H2 textTransform="uppercase" spacing="0.1em">
                <Span bg="#35c5f3" color="#fff" weight="600" padding="0px 8px">Notifications</Span><Span weight="200"> Enabled Platforms</Span>
              </H2>
            </Item>

            <ItemH margin="0px -20px 40px -20px" align="stretch" justify="space-around">

              <Supported margin="20px" minWidth="280px" align="center">
                <Anchor
                  href="https://play.google.com/store/apps/details?id=io.epns.epns"
                  target="_blank"
                  title="Download Ethereum Push Notification Service (EPNS) from Google Play"
                  direction="column"
                  bg="#fff"
                  hover="#fafafa"
                  radius="12px"
                  align="stretch"
                >
                  <Item margin="0px 0px 5px 0px" self="center">
                    <Image
                      src="./supported/epnsplay.png"
                      srcSet="./supported/epnsplay@2x.png 2x, ./supported/epnsplay@3x.png 3x"
                      alt="Ethereum Push Notification Service (EPNS) + Google Play Logo"
                    />
                  </Item>
                  <Item margin="5px 0px">
                    <Span size="0.85em" color="#000" spacing="0.2em" weight="400" textAlign="center">EPNS Android App</Span>
                  </Item>

                </Anchor>
              </Supported>

              <Supported margin="20px" minWidth="280px" align="stretch">
                <Anchor
                  href="https://app.epns.io"
                  target="_blank"
                  title="Get Notified from EPNS Dapp (Coming Soon)"
                  direction="column"
                  bg="#fff"
                  hover="#fafafa"
                  radius="12px"
                  align="stretch"
                >
                  <Item margin="0px 0px 5px 0px" self="center">
                    <Image
                      src="./supported/epnsdapp.png"
                      srcSet="./supported/epnsdapp@2x.png 2x, ./supported/epnsdapp@3x.png 3x"
                      alt="Ethereum Push Notification Service (EPNS) dApp Logo"
                    />
                  </Item>
                  <Item margin="5px 0px">
                    <Span size="0.85em" color="#000" spacing="0.2em" weight="400" textAlign="center">EPNS dApp (Coming Soon)</Span>
                  </Item>
                </Anchor>
              </Supported>

              <Supported margin="20px" minWidth="280px" align="stretch">
                <Anchor
                  title="Download Ethereum Push Notification Service (EPNS) from Apple App Store (Coming Soon)"
                  disabled={true}
                  direction="column"
                  bg="#fff"
                  hoverBG="#f1f1f1"
                  radius="12px"
                  align="stretch"
                >
                  <Item margin="0px 0px 5px 0px" self="center">
                    <Image
                      src="./supported/epnsios.png"
                      srcSet="./supported/epnsios@2x.png 2x, ./supported/epnsios@3x.png 3x"
                      alt="Ethereum Push Notification Service (EPNS) + Apple App Store Logo"
                    />
                  </Item>
                  <Item margin="5px 0px">
                    <Span size="0.85em" color="#000" spacing="0.2em" weight="400" textAlign="center">EPNS iOS App (Coming Soon)</Span>
                  </Item>
                </Anchor>
              </Supported>

              <ItemBreak margin="10px 0px"/>

              <Supported margin="20px" minWidth="280px">
                <Anchor
                  href="#contact"
                  title="Get Notified from EPNS Dapp (Coming Soon)"
                  direction="column"
                  bg="#fff"
                  hover="#fafafa"
                  radius="12px"
                  align="stretch"
                  border="2px dashed #ddd"
                >
                  <Item margin="5px 0px 10px 0px">
                    <Span size="1em" color="#000" spacing="0.2em" weight="200" textAlign="center">Are you a Crypto Wallet?</Span>
                  </Item>
                  <ItemH margin="5px 0px 10px 0px">
                    <Span size="1em" color="#fff" bg="#e20880" padding="2px 5px 4px 8px" margin="0px 5px" spacing="0.2em" weight="400" textAlign="center">Integrate</Span>
                    <Span size="1em" color="#000" spacing="0.2em" weight="200" padding="2px 5px 4px 8px" textAlign="center">AND</Span>
                    <Span size="1em" color="#fff" bg="#35c5f3" padding="2px 5px 4px 8px" margin="0px 5px" spacing="0.2em" weight="400" textAlign="center">Earn</Span>
                  </ItemH>
                </Anchor>
              </Supported>

            </ItemH>

            <Item align="stretch" align="flex-end" tabletAlign="flex-start" margin="20px 0px 40px 0px" textAlign="right" tabletTextAlign="left">
              <H2 textTransform="uppercase" spacing="0.1em">
                <Span bg="#e20880" color="#fff" weight="600" padding="0px 8px">Latest</Span><Span weight="200"> Channels</Span>
              </H2>
              <H3>Delivering Decentralized Notifications For</H3>
            </Item>

            <Item margin="0px -20px 40px -20px" align="stretch" justify="space-around" width="100%">
              <EPNSChannelItems
                numberOfChannels={5}
              />
            </Item>

            <Item margin="0px 0px 40px 0px" align="flex-end" justify="space-between">
              <Anchor
                href="https://app.epns.io"
                target="_blank"
                title="Check out the dApp of Ethereum Push Notification Service"
                bg="#000"
                color="#fff"
                spacing="0.2em"
                size="0.8rem"
                margin="10px 0px"
                radius="4px"
              >
                Explore More
              </Anchor>
            </Item>

          </Item>
        </Content>

        <WaveOuter>
          <WaveInner>
            <Wave fill='#f1f1f1'
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
      </Section>


      {/* PARTNERS AND COLLABORATORS */}
      <Section id="partners" theme="#f1f1f1" padding="20px 0px 80px 0px">
        <Content className="contentBox">
          <Item align="stretch" justify="flex-start" margin="0px 20px">
            <Item align="stretch" align="flex-start" margin="0px 0px 40px 0px">
              <H2 textTransform="uppercase" spacing="0.1em">
                <Span bg="#e20880" color="#fff" weight="600" padding="0px 8px">Partners</Span><Span weight="200"> AND <Span bg="#674c9f" size="0.8em" color="#fff" weight="600" padding="0px 8px">Collaborators</Span></Span>
              </H2>
              <H3>Let's talk partnerships</H3>
            </Item>

            <ItemH margin="0px -20px 20px -20px" rowGap="40px" columnGap="40px" align="stretch" justify="space-around">
              {/*
              <Partner margin="20px" minWidth="280px" align="stretch">
                <Anchor
                  href="https://medium.com/"
                  target="_blank"
                  title="Article talking about collaboration between Unstoppable Domain and Ethereuem Push Notificaion Service"
                  bg="#fff"
                  hover="#eee"
                  radius="12px"
                  align="stretch"
                >
                  <Item>
                    <Item margin="30px 60px" maxWidth="320px">
                      <Image
                        src="./partners/unstoppable.png"
                        srcSet="./partners/unstoppable@2x.png 2x, ./partnerspartners/unstoppable@3x.png 3x"
                        alt="UnstoppableDomains Logo"
                      />
                    </Item>
                    <Span bg="#000" color="#fff" margin="20px 0px" padding="12px" textAlign="center">EPNS Collaborates with Unstoppable Domains</Span>
                  </Item>
                </Anchor>
              </Partner>
              */}

              <Partner margin="20px" minWidth="280px" align="stretch">
                <Anchor
                  href="https://medium.com/ethereum-push-notification-service/epns-awarded-aave-grant-cc618dd48915"
                  target="_blank"
                  title="Article talking Ethereum Push Notification Service winning grant from AAVE"
                  bg="#fff"
                  hover="#000"
                  radius="12px"
                  align="stretch"
                >
                  <Item>
                    <Item margin="30px 60px" maxWidth="320px">
                      <Image
                        src="./partners/aave.png"
                        srcSet="./partners/aave@2x.png 2x, ./partners/aave@3x.png 3x"
                        alt="AAVE Logo"
                      />
                    </Item>
                    <Span bg="#000" color="#fff" margin="20px 0px" padding="12px" textAlign="center">EPNS wins Grant from AAVE 👻</Span>
                  </Item>
                </Anchor>
              </Partner>

              <Partner margin="20px" minWidth="280px">
                <Anchor
                  href="https://medium.com/ethereum-push-notification-service/epns-secures-partnership-with-matic-along-with-a-sweet-grant-b956a85c3151"
                  target="_blank"
                  title="Article talking about winning Grant and Partnership with Matic"
                  bg="#fff"
                  hover="#000"
                  radius="12px"
                  align="stretch"
                >
                  <Item>
                    <Item margin="30px 60px" maxWidth="320px">
                      <Image
                        src="./partners/matic.png"
                        srcSet="./partners/matic@2x.png 2x, ./partners/matic@3x.png 3x"
                        alt="Matic Logo"
                      />
                    </Item>
                    <Span bg="#000" color="#fff" margin="20px 0px" padding="12px" textAlign="center">EPNS Wins Grants / Partners with Matic</Span>
                  </Item>
                </Anchor>
              </Partner>

              {/* Future Ones
              {partnersShowAll &&
                <>
                  <Partner margin="20px" align="stretch">
                    <Anchor
                      href="https://medium.com/"
                      target="_blank"
                      title="Article talking about Uniswap and Ethereuem Push Notificaion Service Partnership"
                      bg="#fff"
                      hover="#000"
                      radius="12px"
                      align="stretch"
                    >
                      <Item>
                        <Item margin="30px 60px" maxWidth="320px" align="stretch">
                          <Image
                            src="./partners/uniswap.png"
                            srcSet="./partners/uniswap@2x.png 2x, ./partners/uniswap@3x.png 3x"
                            alt="Uniswap Logo"
                          />
                        </Item>
                        <Span bg="#000" color="#fff" margin="20px 0px" padding="12px">Uniswap will integrate EPNS Protocol</Span>
                      </Item>
                    </Anchor>
                  </Partner>

                  <Partner margin="20px" minWidth="280px" align="stretch">
                    <Anchor
                      href="https://medium.com/"
                      target="_blank"
                      title="Article talking about how Gitcoin will be integrating EPNS Protocol"
                      bg="#fff"
                      hover="#eee"
                      radius="12px"
                      align="stretch"
                    >
                      <Item>
                        <Item margin="30px 60px" maxWidth="320px">
                          <Image
                            src="./partners/gitcoin.png"
                            srcSet="./partners/gitcoin@2x.png 2x, ./partners/gitcoin@3x.png 3x"
                            alt="Gitcoin Logo"
                          />
                        </Item>
                        <Span bg="#000" color="#fff" margin="20px 0px" padding="12px" textAlign="center">EPNS ❤️ Gitcoin</Span>
                      </Item>
                    </Anchor>
                  </Partner>
                </>
              }

              <ItemBreak />

              <Partner minWidth="280px" align="stretch" margin="20px 20px 20px 20px">
                <Anchor
                  href="#"
                  onClick={(e) => {e.preventDefault(); setPartnersShowAll(!partnersShowAll)}}
                  title="Toggle Show All / Fewer items in partners and collaborators section"
                  bg="#fff"
                  hover="#eee"
                  radius="12px"
                  align="stretch"
                >
                  <ItemH minWidth="auto">
                    <Item minWidth="auto" flex="none">
                      {!partnersShowAll &&
                        <BsChevronDown size={40} color="#000"/>
                      }
                      {partnersShowAll &&
                        <BsChevronUp size={40} color="#000"/>
                      }
                    </Item>
                  </ItemH>
                </Anchor>
              </Partner>
              */}
            </ItemH>
          </Item>
        </Content>

        <WaveOuter>
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
      </Section>


      {/* FOLLOW OUR STORY */}
      <Section id="story" theme="#e20880" padding="20px 0px 80px 0px">
        <Content className="contentBox">
          <Item align="stretch" justify="flex-start" margin="0px 20px">
            <Item align="stretch" justify="flex-start" margin="0px 0px 60px 0px">
              <H2 textTransform="uppercase" spacing="0.1em">
                <Span weight="200" color="#fff">What's the </Span><Span bg="#000" color="#fff" weight="600" padding="0px 8px">Latest</Span>
              </H2>
              <H3 color="#fff">Our Journey so far</H3>
            </Item>

            <Medium numberOfPosts={3} />

            <ItemH margin="20px -20px 20px -20px" justify="space-between" align="flex-start" columnGap="40px" rowGap="40px">
              <TweetItem margin="20px">
                <Tweet
                  tweetId="1305795954742898691"
                  options={{ theme: "dark", align: "center" }}
                />
              </TweetItem>

              <TweetItem margin="20px">
                <Tweet
                  tweetId="1273731681287933953"
                  options={{ theme: "dark", align: "center" }}
                />
              </TweetItem>
            </ItemH>

            <Item margin="0px 0px 40px 0px" align="flex-end" justify="space-between">
              <Anchor
                href="https://medium.com/ethereum-push-notification-service"
                target="_blank"
                title="Read Medium Blog of Ethereum Push Notification Service"
                bg="#000"
                color="#fff"
                spacing="0.2em"
                size="0.8rem"
                margin="10px 0px"
                radius="4px"
              >
                Read More
              </Anchor>
            </Item>

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
      </Section>


      {/* TEAM SECTION | 1=Founder, 2=Founder+Lead, 3=Founder+Team, 4=Lead, 5=Team, 6=Advisor */}
      <Section id="team" theme="#fff" padding="20px 0px 80px 0px">
        <Content className="contentBox">
          <Item align="stretch" justify="flex-start" margin="0px 20px">
            <Item align="stretch" justify="flex-start" margin="0px 0px 20px 0px">
              <H2 textTransform="uppercase" spacing="0.1em">
                <Span bg="#e20880" color="#fff" weight="600" padding="0px 8px">Meet</Span><Span weight="200"> the Team</Span>
              </H2>
              <H3>{randomTeamQuotes[Math.floor(Math.random() * (randomTeamQuotes.length))]}</H3>
            </Item>

            <ItemH self="stretch" align="stretch" margin="20px -20px" rowGap="20px" columnGap="40px" minWidth="auto">
              <TeamMember
                img="./team/Harsh.jpg"
                type={2}
                name="Harsh Rajat"
                title="Founder / Project Lead"
                twitter="https://twitter.com/harshrajat"
                linkedin="https://www.linkedin.com/in/harshrajat/"
                email="mailto://harsh@epns.io"
              />
              <TeamMember
                img="./team/Richa.jpg"
                type={2}
                name="Richa Joshi"
                title="Co-Founder / Marketing Lead"
                twitter="https://twitter.com/riijo"
                linkedin="https://www.linkedin.com/in/richa-joshi-90b04126/"
                email="mailto://richa@epns.io"
              />
              <TeamMember
                img="./team/Jaf.jpg"
                type={4}
                name="Jafett Sandi"
                title="Product / Dev Lead"
                twitter="https://twitter.com/jafetsc"
                linkedin="https://www.linkedin.com/in/jafettsandi/"
                email="mailto://jaf@epns.io"
              />
              <TeamMember
                img="./team/Andrew.jpg"
                type={4}
                name="Andrew Redden"
                title="Protocol / Bizdev Lead"
                twitter="https://twitter.com/androolloyd"
                linkedin="https://www.linkedin.com/in/androolloyd/"
                email="mailto://andrew@epns.io"
              />
              <TeamMember
                img="./team/Awosika.jpg"
                type={4}
                name="Awosika Ayodeji"
                title="Community Lead"
                twitter="https://twitter.com/Ebunayo08"
                linkedin="https://www.linkedin.com/in/ayodeji-israel-awosika-69924124/"
                email="mailto://ayodeji@epns.io"
              />
              <TeamMember
                img="./team/Jude.jpg"
                type={5}
                name="Jude Dike"
                title="Developer"
                linkedin="https://www.linkedin.com/in/dikejudein/"
              />
              <TeamMember
                img="./team/Victor.jpg"
                type={5}
                name="Victor Nwagbogwu"
                title="Developer (Intern)"
                linkedin="https://www.linkedin.com/in/victor-nwagbogwu/"
              />
              <TeamMember
                img="./team/Robin.jpg"
                type={5}
                name="Robin Roy Thomas"
                title="Content Writer (Intern)"
                twitter="https://twitter.com/robin_rrtx"
                linkedin="https://www.linkedin.com/in/robin-roy-thomas-597974198/"
              />
            </ItemH>
            <ItemH self="stretch" align="stretch" margin="20px 0px" rowGap="20px" columnGap="40px" minWidth="auto">
              <TeamMember
                img="./team/Nischal.jpg"
                type={6}
                name="Nischal Shetty"
                title="Founder / CEO, WazirX"
                twitter="https://twitter.com/NischalShetty"
                linkedIn="https://www.linkedin.com/in/nischalshetty/"
              />
              <TeamMember
                img="./team/DefiDad.jpg"
                type={6}
                name="DeFi Dad"
                title="COO, Zapper.Fi"
                twitter="https://twitter.com/DeFi_Dad"
              />
              <TeamMember
                img="./team/Vivek.jpg"
                type={6}
                name="Vivek Singh"
                title="Co-Founder, Gitcoin"
                twitter="https://twitter.com/vsinghdothings"
                linkedin="https://www.linkedin.com/in/vivek-singh-b5a4b675/"
              />

            </ItemH>

          </Item>
        </Content>

        <WaveOuter>
          <WaveInner>
            <Wave fill='#35c5f3'
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
      </Section>


      {/* CONTACT US SECTION */}
      <Section id="contact" theme="#35c5f3" padding="20px 0px 80px 0px">
        <Content className="contentBox">
          <Item align="stretch" justify="flex-start" margin="0px 20px">
            <Item align="stretch" align="flex-end" tabletAlign="flex-start" margin="0px 0px 20px 0px" textAlign="right" tabletTextAlign="left">
              <H2 textTransform="uppercase" spacing="0.1em">
                <Span bg="#fff" color="#000" weight="600" padding="0px 8px">Contact</Span><Span weight="200" color="#fff"> Us!</Span>
              </H2>
              <H3 color="#fff">Get in Touch</H3>
            </Item>

            <Item margin="10px -10px" self="stretch">
              <FormSubmision
                flex="1"
                direction="row"
                margin="20px 0px"
                justify="stretch"
                margin="10px"
                size="1.1rem"
                onSubmit={handleContactFormSubmit}
              >

                <Item align="stretch" justify="stretch" margin="10px -15px">
                  {contactFormProcessing == 0 &&
                    <>
                      <ItemH align="stretch">

                        <Item flex="1" margin="15px" justify="flex-start" align="stretch" minWidth="280px">
                          <Input
                            radius="4px"
                            padding="12px"
                            bg="#fff"
                            border="12px"
                            placeholder="John Wick"
                            value={contactFormName}
                            onChange={(e) => {setContactFormName(e.target.value)}}
                            autocomplete="name"
                          />
                            {contactFormName.trim().length == 0 &&
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

                        <Item flex="5" margin="15px" justify="flex-start" align="stretch" minWidth="280px">
                          <Input
                            required
                            placeholder="john@wick.com"
                            radius="4px"
                            padding="12px"
                            bg="#fff"
                            value={contactFormEmail}
                            onChange={(e) => {setContactFormEmail(e.target.value)}}
                            autocomplete="email"
                          />
                            {contactFormEmail.trim().length == 0 &&
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
                      </ItemH>

                      <Item flex="5" justify="flex-start" align="stretch" minWidth="280px" margin="15px">
                        <DropdownStyled options={contactFormTopics} onChange={(option) => setContactFormTopic(option.value)} value={contactFormTopic} placeholder="Select an option" />
                      </Item>

                      <Item justify="center" align="stretch" minWidth="280px" margin="15px">
                        <Input
                          required
                          placeholder="I want to tell you guys a secret!"
                          radius="4px"
                          padding="12px"
                          bg="#fff"
                          value={contactFormSub}
                          onChange={(e) => {setContactFormSub(e.target.value)}}
                          autocomplete="on"
                        />
                          {contactFormSub.trim().length == 0 &&
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
                              Subject
                            </Span>
                          }
                      </Item>

                      <Item justify="center" align="stretch" minWidth="280px" margin="15px">
                        <TextField
                          required
                          placeholder="This is where you will tell us that secret, or a bug or whatever is on your mind."
                          rows="6"
                          radius="4px"
                          padding="12px"
                          bg="#fff"
                          value={contactFormMsg}
                          onChange={(e) => {setContactFormMsg(e.target.value)}}
                          autocomplete="off"
                        />
                      </Item>
                    </>
                  }

                  {contactFormProcessing == 2 &&
                    <Item align="center" margin="0px 10px">
                      <ItemH
                        color="#e20880"
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
                          Message Sent! We will be in Touch :)
                        </Span>
                      </ItemH>
                    </Item>
                  }

                  {contactFormError && contactFormProcessing == 0 &&
                    <Item align="center" margin="0px 10px">
                      <Item
                        color="#e20880"
                        bg="#000"
                        padding="10px 15px"
                        margin="15px"
                      >
                        <Span
                          color="#fff"
                          textTransform="uppercase"
                          spacing="0.1em"
                        >
                          {contactFormError}
                        </Span>
                      </Item>
                    </Item>
                  }

                  <Item justify="stretch" self="stretch" align="stretch" minWidth="280px">
                    {contactFormProcessing != 2 &&
                      <Button
                        bg='#000'
                        color='#fff'
                        flex="1"
                        radius="4px"
                        disabled={contactFormProcessing}
                        margin="15px"
                        padding="12px 15px"
                      >
                        {contactFormProcessing == 1 &&
                          <Loader
                             type="Oval"
                             color="#fff"
                             height={24}
                             width={24}
                            />
                        }
                        {contactFormProcessing == 0 &&
                          <Input cursor="hand" color="#fff" weight="400" size="0.8em" spacing="0.2em" type="submit" value="Submit" />
                        }
                      </Button>
                    }
                  </Item>
                </Item>
              </FormSubmision>
            </Item>

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
      </Section>


      {/* INVESTORS SECTION */}
      <Section id="investors" theme="#fff" padding="20px 0px 120px 0px">
        <Content className="contentBox">
          <Item align="stretch" justify="flex-start" margin="0px 20px">
            <Item align="stretch" align="flex-start" margin="0px 0px 20px 0px">
              <H2 textTransform="uppercase" spacing="0.1em">
                <Span bg="#35c5f3" color="#fff" weight="600" padding="0px 8px">Backed</Span><Span weight="200"> By</Span>
              </H2>
            </Item>

            <VCs margin="0px -10px 20px -10px"s align="stretch" justify="center">

              <Investor minWidth="280px" align="stretch">
                <Anchor
                  href="https://www.thelao.io/"
                  target="_blank"
                  title="Learn about our Investor - TheLAO"
                  bg="#fff"
                  hoverBG="transparent"
                  radius="12px"
                  align="stretch"
                  margin="10px"
                >
                  <Item>
                    <Item>
                      <Image
                        src="./investors/thelao.png"
                        srcSet="./investors/thelao@2x.png 2x, ./investors/thelao@3x.png 3x"
                        alt="Logo of The LAO, Crypto Fund"
                      />
                    </Item>
                  </Item>
                </Anchor>
              </Investor>

              <Investor minWidth="280px" align="stretch">
                <Anchor
                  href="https://www.metacartel.org/"
                  target="_blank"
                  title="Learn about our Investor - Meta Cartel"
                  bg="#fff"
                  hoverBG="transparent"
                  radius="12px"
                  align="stretch"
                  margin="10px"
                >
                  <Item>
                    <Item>
                      <Image
                        src="./investors/metacartel.png"
                        srcSet="./investors/metacartel@2x.png 2x, ./investors/metacartel@3x.png 3x"
                        alt="Logo of Meta Cartel, Crypto Fund"
                      />
                    </Item>
                  </Item>
                </Anchor>
              </Investor>

              <Investor minWidth="280px" align="stretch">
                <Anchor
                  href="https://fourthrevolution.capital/"
                  target="_blank"
                  title="Learn about our Investor - Fourth Revolution Capital"
                  bg="#fff"
                  hoverBG="transparent"
                  radius="12px"
                  align="stretch"
                  margin="10px"
                >
                  <Item>
                    <Item>
                      <Image
                        src="./investors/fourthrevolution.png"
                        srcSet="./investors/fourthrevolution@2x.png 2x, ./investors/fourthrevolution@3x.png 3x"
                        alt="Logo of Fourth Revolution Capital, Crypto Fund"
                      />
                    </Item>
                  </Item>
                </Anchor>
              </Investor>

              <Investor minWidth="280px" align="stretch">
                <Anchor
                  href="https://br.capital/"
                  target="_blank"
                  title="Learn about our Investor - BR Capital"
                  bg="#fff"
                  hoverBG="transparent"
                  radius="12px"
                  align="stretch"
                  margin="10px"
                >
                  <Item>
                    <Item>
                      <Image
                        src="./investors/brcapital.png"
                        srcSet="./investors/brcapital@2x.png 2x, ./investors/brcapital@3x.png 3x"
                        alt="Logo of BR Capital, Crypto Fund"
                      />
                    </Item>
                  </Item>
                </Anchor>
              </Investor>

              <Investor minWidth="280px" align="stretch">
                <Anchor
                  href="https://proofsystems.io/"
                  target="_blank"
                  title="Learn about our Investor - ProofSystems"
                  bg="#fff"
                  hoverBG="transparent"
                  radius="12px"
                  align="stretch"
                  margin="10px"
                >
                  <Item>
                    <Item>
                      <Image
                        src="./investors/proofsystems.png"
                        srcSet="./investors/proofsystems@2x.png 2x, ./investors/proofsystems@3x.png 3x"
                        alt="Logo of Proof Systems, Digital Marketing Agency"
                      />
                    </Item>
                  </Item>
                </Anchor>
              </Investor>

              <Investor minWidth="280px" align="stretch">
                <Anchor
                  href="https://moonwhale.io"
                  target="_blank"
                  title="Learn about our Investor - Moonwhale"
                  bg="#fff"
                  hoverBG="transparent"
                  radius="12px"
                  align="stretch"
                  margin="20px"
                >
                  <Item>
                    <Item>
                      <Image
                        src="./investors/moonwhale.png"
                        srcSet="./investors/moonwhale@2x.png 2x, ./investors/moonwhale@3x.png 3x"
                        alt="Logo of Moonwhale, Crypto Fund"
                      />
                    </Item>
                  </Item>
                </Anchor>
              </Investor>

              {/*}
              <Investor minWidth="280px" align="stretch">
                <Anchor
                  href="https://fourthrevolution.capital"
                  target="_blank"
                  title="Learn about our Investor - Fourth Revolution Capital"
                  bg="#fff"
                  hoverBG="transparent"
                  radius="12px"
                  align="stretch"
                  margin="10px"
                >
                  <Item>
                    <Item>
                      <Image
                        src="./investors/fourthrevolution.png"
                        srcSet="./investors/fourthrevolution@2x.png 2x, ./investors/fourthrevolution@3x.png 3x"
                        alt="Logo of Fourth Revolution Capital, Crypto Fund"
                      />
                    </Item>
                  </Item>
                </Anchor>
              </Investor>
              */}

            </VCs>

            <Angels margin="0px -10px 20px -10px" align="stretch" justify="center">

              <Investor minWidth="280px" align="stretch">
                <Anchor
                  href="https://balajis.com/"
                  target="_blank"
                  title="Learn about our Investor - Balaji S. Srinivasan, Serial Entreprenuer"
                  bg="#fff"
                  hoverBG="transparent"
                  radius="12px"
                  align="stretch"
                  margin="10px"
                  padding="10px"
                >
                  <Item>
                    <Item>
                      <Image
                        src="./investors/balaji.png"
                        srcSet="./investors/balaji@2x.png 2x, ./investors/balaji@3x.png 3x"
                        alt="Sketch of Investor - Balaji S. Srinivasan, Serial Entrepreneur"
                      />
                      <Span size="0.85em" color="#233234" spacing="0.2em" weight="400" textAlign="center">Balaji S. Srinivasan</Span>
                      <AngelJob size="0.5em" color="#233234" spacing="0.2em" weight="600" textAlign="center">Serial Entrepreneur</AngelJob>
                    </Item>
                  </Item>
                </Anchor>
              </Investor>

              <Investor minWidth="280px" align="stretch">
                <Anchor
                  href="https://twitter.com/nkennethk"
                  target="_blank"
                  title="Learn about our Investor - Kenneth Ng, Ethereum Foundation"
                  bg="#fff"
                  hoverBG="transparent"
                  radius="12px"
                  align="stretch"
                  margin="10px"
                  padding="10px"
                >
                  <Item>
                    <Item>
                      <Image
                        src="./investors/ken.png"
                        srcSet="./investors/ken@2x.png 2x, ./investors/ken@3x.png 3x"
                        alt="Sketch of Investor - Kenneth Ng, Ethereum Foundation"
                      />
                      <Span size="0.85em" color="#233234" spacing="0.2em" weight="400" textAlign="center">Kenneth Ng</Span>
                      <AngelJob size="0.5em" color="#233234" spacing="0.2em" weight="600" textAlign="center">Ethereum Foundation</AngelJob>
                    </Item>
                  </Item>
                </Anchor>
              </Investor>

              <Investor minWidth="280px" align="stretch">
                <Anchor
                  href="https://twitter.com/nanexcool"
                  target="_blank"
                  title="Learn about our Investor - Mariano Conti"
                  bg="#fff"
                  hoverBG="transparent"
                  radius="12px"
                  align="stretch"
                  margin="10px"
                  padding="10px"
                >
                  <Item>
                    <Item>
                      <Image
                        src="./investors/mariano.png"
                        srcSet="./investors/mariano@2x.png 2x, ./investors/mariano@3x.png 3x"
                        alt="Sketch of Investor - Mariano Conti"
                      />
                      <Span size="0.85em" color="#233234" spacing="0.2em" weight="400" textAlign="center">Mariano Conti</Span>
                      <AngelJob size="0.5em" color="#233234" spacing="0.2em" weight="600" textAlign="center">Awesome Guy</AngelJob>
                    </Item>
                  </Item>
                </Anchor>
              </Investor>

              <Investor minWidth="280px" align="stretch">
                <Anchor
                  href="https://twitter.com/notscottmoore"
                  target="_blank"
                  title="Learn about our Investor - Scott Moore, Co-Founder, Gitcoin"
                  bg="#fff"
                  hoverBG="transparent"
                  radius="12px"
                  align="stretch"
                  margin="10px"
                  padding="10px"
                >
                  <Item>
                    <Item>
                      <Image
                        src="./investors/scott.png"
                        srcSet="./investors/scott@2x.png 2x, ./investors/scott@3x.png 3x"
                        alt="Sketch of Investor - Scott Moore, Co-Founder, Gitcoin"
                      />
                      <Span size="0.85em" color="#233234" spacing="0.2em" weight="400" textAlign="center">Scott Moore</Span>
                      <AngelJob size="0.5em" color="#233234" spacing="0.2em" weight="600" textAlign="center">Co-Founder, Gitcoin</AngelJob>
                    </Item>
                  </Item>
                </Anchor>
              </Investor>

              <Investor minWidth="280px" align="stretch">
                <Anchor
                  href="https://twitter.com/Beler"
                  target="_blank"
                  title="Learn about our Investor - Luka Sukik, Entreprenuer"
                  bg="#fff"
                  hoverBG="transparent"
                  radius="12px"
                  align="stretch"
                  margin="10px"
                  padding="10px"
                >
                  <Item>
                    <Item>
                      <Image
                        src="./investors/lukasukik.png"
                        srcSet="./investors/lukasukik@2x.png 2x, ./investors/lukasukik@3x.png 3x"
                        alt="Sketch of Investor - Luka Sukik, Entrepreneur"
                      />
                      <Span size="0.85em" color="#233234" spacing="0.2em" weight="400" textAlign="center">Luka Sučić</Span>
                      <AngelJob size="0.5em" color="#233234" spacing="0.2em" weight="600" textAlign="center">Entrepreneur</AngelJob>
                    </Item>
                  </Item>
                </Anchor>
              </Investor>

              <Investor minWidth="280px" align="stretch">
                <Anchor
                  href="https://twitter.com/sassal0x"
                  target="_blank"
                  title="Learn about our Investor - Anthony Sassano, EthHub"
                  bg="#fff"
                  hoverBG="transparent"
                  radius="12px"
                  align="stretch"
                  margin="10px"
                  padding="10px"
                >
                  <Item>
                    <Item>
                      <Image
                        src="./investors/anthony.png"
                        srcSet="./investors/anthony@2x.png 2x, ./investors/anthony@3x.png 3x"
                        alt="Sketch of Investor - Anthony Sassano, EthHub"
                      />
                      <Span size="0.85em" color="#233234" spacing="0.2em" weight="400" textAlign="center">Anthony Sassano</Span>
                      <AngelJob size="0.5em" color="#233234" spacing="0.2em" weight="600" textAlign="center">EthHub / DailyGWEI</AngelJob>
                    </Item>
                  </Item>
                </Anchor>
              </Investor>

              <Investor minWidth="280px" align="stretch">
                <Anchor
                  href="https://twitter.com/DeFi_Dad"
                  target="_blank"
                  title="Learn about our Investor - DeFiDad, COO, Zapper.Fi"
                  bg="#fff"
                  hoverBG="transparent"
                  radius="12px"
                  align="stretch"
                  margin="10px"
                  padding="10px"
                >
                  <Item>
                    <Item>
                      <Image
                        src="./investors/defidadinv.png"
                        srcSet="./investors/defidadinv@2x.png 2x, ./investors/defidadinv@3x.png 3x"
                        alt="Sketch of Investor - DeFiDad, COO, Zapper.Fi"
                      />
                      <Span size="0.85em" color="#233234" spacing="0.2em" weight="400" textAlign="center">DeFi Dad</Span>
                      <AngelJob size="0.5em" color="#233234" spacing="0.2em" weight="600" textAlign="center">All Things DeFi</AngelJob>
                    </Item>
                  </Item>
                </Anchor>
              </Investor>

              <Investor minWidth="280px" align="stretch">
                <Anchor
                  href="https://twitter.com/ravidsrk"
                  target="_blank"
                  title="Learn about our Investor - Ravindra Kumar, Founder, Frontier Wallet"
                  bg="#fff"
                  hoverBG="transparent"
                  radius="12px"
                  align="stretch"
                  margin="10px"
                  padding="10px"
                >
                  <Item>
                    <Item>
                      <Image
                        src="./investors/ravindra.png"
                        srcSet="./investors/ravindra@2x.png 2x, ./investors/ravindra@3x.png 3x"
                        alt="Sketch of Investor - Ravindra Kumar, Founder, Frontier Wallet"
                      />
                      <Span size="0.85em" color="#233234" spacing="0.2em" weight="400" textAlign="center">Ravindra Kumar</Span>
                      <AngelJob size="0.5em" color="#233234" spacing="0.2em" weight="600" textAlign="center">Founder, Frontier Wallet</AngelJob>
                    </Item>
                  </Item>
                </Anchor>
              </Investor>
            </Angels>

            <AngelsOptional margin="-10px">
              <Investor minWidth="280px" align="stretch">
                <Anchor
                  href="https://twitter.com/benlakoff"
                  target="_blank"
                  title="Learn about our Investor - Ben Lakoff, Entrepreneur"
                  bg="#fff"
                  hoverBG="transparent"
                  radius="12px"
                  align="stretch"
                  margin="10px"
                  padding="10px"
                >
                  <Item>
                    <Item>
                      <Image
                        src="./investors/ben.png"
                        srcSet="./investors/ben@2x.png 2x, ./investors/ben@3x.png 3x"
                        alt="Sketch of Investor - Ben Lakoff, Entrepreneur"
                      />
                      <Span size="0.85em" color="#233234" spacing="0.2em" weight="400" textAlign="center">Ben Lakoff</Span>
                      <AngelJob size="0.5em" color="#233234" spacing="0.2em" weight="600" textAlign="center">Entreprenuer</AngelJob>
                    </Item>
                  </Item>
                </Anchor>
              </Investor>

              <Investor minWidth="280px" align="stretch">
                <Anchor
                  href="https://br.capital/#team"
                  target="_blank"
                  title="Learn about our Investor - Evgeny Zandman, Angel Investor"
                  bg="#fff"
                  hoverBG="transparent"
                  radius="12px"
                  align="stretch"
                  margin="10px"
                  padding="10px"
                >
                  <Item>
                    <Item>
                      <Image
                        src="./investors/rezo.png"
                        srcSet="./investors/rezo@2x.png 2x, ./investors/rezo@3x.png 3x"
                        alt="Sketch of Investor - Rezo, CEO, BR Capital"
                      />
                    <Span size="0.85em" color="#233234" spacing="0.2em" weight="400" textAlign="center">Rezo Shmertz</Span>
                      <AngelJob size="0.5em" color="#233234" spacing="0.2em" weight="600" textAlign="center">CEO, BR Capital</AngelJob>
                    </Item>
                  </Item>
                </Anchor>
              </Investor>

              <Investor minWidth="280px" align="stretch">
                <Anchor
                  href="https://br.capital/#team"
                  target="_blank"
                  title="Learn about our Investor - Evgeny Zandman, Angel Investor"
                  bg="#fff"
                  hoverBG="transparent"
                  radius="12px"
                  align="stretch"
                  margin="10px"
                  padding="10px"
                >
                  <Item>
                    <Item>
                      <Image
                        src="./investors/evgeny.png"
                        srcSet="./investors/evgeny@2x.png 2x, ./investors/evgeny@3x.png 3x"
                        alt="Sketch of Investor - Evgeny Zandman, Angel Investor"
                      />
                      <Span size="0.85em" color="#233234" spacing="0.2em" weight="400" textAlign="center">Evgeny Zandman</Span>
                      <AngelJob size="0.5em" color="#233234" spacing="0.2em" weight="600" textAlign="center">Angel Investor</AngelJob>
                    </Item>
                  </Item>
                </Anchor>
              </Investor>

              <Investor minWidth="280px" align="stretch">
                <Anchor
                  href="https://www.linkedin.com/in/dannychrist/"
                  target="_blank"
                  title="Learn about our Investor - Danny J.C., Angel Investor"
                  bg="#fff"
                  hoverBG="transparent"
                  radius="12px"
                  align="stretch"
                  margin="10px"
                  padding="10px"
                >
                  <Item>
                    <Item>
                      <Image
                        src="./investors/danny.png"
                        srcSet="./investors/danny@2x.png 2x, ./investors/danny@3x.png 3x"
                        alt="Sketch of Investor - Danny J.C., Angel Investor"
                      />
                      <Span size="0.85em" color="#233234" spacing="0.2em" weight="400" textAlign="center">Danny J. C.</Span>
                      <AngelJob size="0.5em" color="#233234" spacing="0.2em" weight="600" textAlign="center">Angel Investor</AngelJob>
                    </Item>
                  </Item>
                </Anchor>
              </Investor>

              <Investor minWidth="280px" align="stretch">
                <Anchor
                  href="https://www.linkedin.com/in/acschen/"
                  disabled={true}
                  target="_blank"
                  title="Learn about our Investor -  Andrew Chen, Entrepreneur"
                  bg="#fff"
                  hoverBG="transparent"
                  radius="12px"
                  align="stretch"
                  margin="10px"
                  padding="10px"
                >
                  <Item>
                    <Item>
                      <Image
                        src="./investors/andrew.png"
                        srcSet="./investors/andrew@2x.png 2x, ./investors/andrew@3x.png 3x"
                        alt="Sketch of Investor - Andrew Chen, Entrepreneur"
                      />
                      <Span size="0.85em" color="#233234" spacing="0.2em" weight="400" textAlign="center">Andrew Chen</Span>
                      <AngelJob size="0.5em" color="#233234" spacing="0.2em" weight="600" textAlign="center">Entrepreneur</AngelJob>
                    </Item>
                  </Item>
                </Anchor>
              </Investor>

              <Investor minWidth="280px" align="stretch">
                <Anchor
                  href="#"
                  disabled={true}
                  target="_blank"
                  title="Learn about our Investor -  Thomsa Kaseng AO, Angel Investor"
                  bg="#fff"
                  hoverBG="transparent"
                  radius="12px"
                  align="stretch"
                  margin="10px"
                  padding="10px"
                >
                  <Item>
                    <Item>
                      <Image
                        src="./investors/thomas.png"
                        srcSet="./investors/thomas@2x.png 2x, ./investors/thomas@3x.png 3x"
                        alt="Sketch of Investor - Thomsa Kaseng AO, Angel Investor"
                      />
                      <Span size="0.85em" color="#233234" spacing="0.2em" weight="400" textAlign="center">Thomsa Kaseng AO</Span>
                      <AngelJob size="0.5em" color="#233234" spacing="0.2em" weight="600" textAlign="center">Angel Investor</AngelJob>
                    </Item>
                  </Item>
                </Anchor>
              </Investor>

              <Investor minWidth="280px" align="stretch">
                <Anchor
                  href="#"
                  disabled={true}
                  target="_blank"
                  title="Learn about our Investor -  Karthik, Angel Investor"
                  bg="#fff"
                  hoverBG="transparent"
                  radius="12px"
                  align="stretch"
                  margin="10px"
                  padding="10px"
                >
                  <Item>
                    <Item>
                      <Image
                        src="./investors/karthik.png"
                        srcSet="./investors/karthik@2x.png 2x, ./investors/karthik@3x.png 3x"
                        alt="Sketch of Investor - Karthik, Angel Investor"
                      />
                      <Span size="0.85em" color="#233234" spacing="0.2em" weight="400" textAlign="center">Thomsa Kaseng AO</Span>
                      <AngelJob size="0.5em" color="#233234" spacing="0.2em" weight="600" textAlign="center">Angel Investor</AngelJob>
                    </Item>
                  </Item>
                </Anchor>
              </Investor>

            </AngelsOptional>

          </Item>
        </Content>
      </Section>

    </>
  );
}

// css style
const HeroBanner = styled(Item)`
  @media (max-width: 768px) {
    display: none;
  }
`

const Featured = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  justify-content: center;
  flex-wrap: wrap;
`

const Feature = styled.a`
  display: flex;
  flex: 1;
  margin: 20px;
  min-width: 220px;
  max-width: 340px;
  padding: 10px;
  background: #2f1a37;
  border-radius: 14px;
  box-shadow: 0px 0px 10px #00000085;
  text-decoration: none;

  &:hover {
    background: ${props => props.bg || "#fff"};
  }
`

const FeatureImage = styled(Image)`
  filter: saturate(0) brightness(0) invert(1);

  ${Feature}:hover & {
    filter: saturate(1) brightness(1) invert(0);
  }
`

const EmphasisBlock = styled(Item)`
  min-width: 280px;

`

const EmphasisImage = styled(Item)`
  padding: 20px;
  margin: 20px 0px 20px;
`

const EmphasisText = styled(Span)`
  font-size: 1.1rem;
  font-weight: 400;
  text-align: center;
  padding: 0px 20px;
`

const PreviewOuter = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(0 0 0 / 0.75);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`

const PreviewBG = styled(Anchor)`
  position: initial;
`

const Preview = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin: 40px 20px;
  border-left: 10px solid #35c4f3;
  border-radius: 10px;
`

const PreviewClose = styled(Anchor)`
  align-self: flex-end;
  margin-bottom: -40px;
`

const Solution = styled(ItemH)`
  @media (max-width: 940px) {
    flex-direction: column;

    ${Item} {
      padding:0px 20px;
    }
  }

  @media (max-width: 768px) {
    ${Item} {
      padding: 0px;
    }
  }
`

const ShadowBox = styled(Item)`
  border-radius: 12px;
  border: ${props => props.border || '0px solid transparent'};
  min-width: 280px;
  overflow: hidden;
`

const BlurBG = styled.div`
  background: linear-gradient(300deg,#e20880,#35c5f3,#674c9f,#e20880);
  background-size: 800% 800%;
  background-size: 1200% 1200%;
  animation: BGColorTransition 30s ease infinite;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.75;
`

const Supported = styled(Item)`
  flex: 1;
  min-width: auto;

  @media (max-width: 768px) {
    flex: 1;
    min-width: 280px;
  }

  ${Span} {
    align-self: stretch;
    text-align: center;
  }
`

const Partner = styled(Item)`
  flex: 0 1 calc(33% - 40px);
  min-width: auto;

  @media (max-width: 768px) {
    flex: 1;
    min-width: 280px;
  }

  ${Anchor} {
    flex: 1;
  }

  ${Image} {
    filter: brightness(0);

    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }

  &:hover ${Image} {
    filter: brightness(1);
  }

  ${Span} {
    align-self: stretch;
    text-align: center;
  }
`

const TweetItem = styled(Item)`

  div {
    width: 530px;
  }

  @media (max-width: 1140px) {
    width: 280px;
    flex: 1;

    div {
      width: 100%;
    }
  }

  @media (max-width: 640px) {
    justify-content: center;

    div {
    }
  }
`

const DropdownStyled = styled(Dropdown)`
  .Dropdown-control {
    background-color: #000;
    color: #fff;
    padding: 12px 52px 12px 10px;
    border: 1px solid #000;
    border-radius: 4px;
  }

  .Dropdown-placeholder {
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 0.2em;
    font-size: 0.8em;
  }

  .Dropdown-arrow {
    top: 18px;
    bottom: 0;
    border-color: #fff transparent transparent;
  }

  .Dropdown-menu {
    border: 1px solid #000;
    box-shadow: none;
    background-color: #000;
    border-radius: 0px;
    margin-top: -3px;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  .Dropdown-option {
    background-color: rgb(35 35 35);
    color: #ffffff99;

    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-size: 0.7em;
    padding: 15px 20px;
  }

  .Dropdown-option:hover {
    background-color: #000000;
    color: #fff;
  }
`

const Investor = styled(Item)`

`

const AngelJob = styled(Span)`

`

const VCs = styled(ItemH)`
  justify-content: space-between;

  @media (max-width: 768px) {
    column-gap: 20px;
    row-gap: 20px;

    justify-content: space-around;
  }

  ${Investor} {
    flex: 0 1 calc(16% - 10px);
    min-width: auto;

    @media (max-width: 768px) {
      flex: 0 1 calc(33% - 20px);
      min-width: 130px;
    }

    @media (max-width: 480px) {
      flex: 1;
      max-width: 200px;
    }
  }

  ${Anchor} {
    &:hover {
      box-shadow: 0px 0px 30px -10px #23323442;
    }
  }
`

const Angels = styled(VCs)`
  justify-content: space-between;

  @media (max-width: 768px) {
    column-gap: 10px;
    row-gap: 10px;

    justify-content: space-around;
  }

  ${Investor} {
    flex: 0 1 calc(25% - 20px);
    min-width: auto;

    @media (max-width: 768px) {
      flex: 0 1 25%;
      min-width: 200px;
    }

    @media (max-width: 480px) {
      flex: 0 1 calc(50% - 20px);
      min-width: 140px;
    }
  }

  ${AngelJob} {
    @media (max-width: 480px) {
      display: none;
    }
  }

  ${Anchor} {
    padding: 20px 20px 20px 20px;
  }
`

const AngelsOptional = styled(Angels)`
  @media (max-width: 768px) {
    display: none;
  }
`

// Export Default
export default Home;
