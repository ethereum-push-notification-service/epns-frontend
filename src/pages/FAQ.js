import React from "react";
import ReactGA from 'react-ga';
import MetaTags, {ReactTitle} from 'react-meta-tags';

import styled from 'styled-components';
import {Section, SectionHero, Content, Item, ItemH, WaveOuter, WaveInner, H1, H2, H3, Image, P, Para, UL, LI, A, B, Span, Anchor, Button} from 'components/SharedStyling';

import { BsChevronExpand } from 'react-icons/bs';
import Wave from 'react-wavify';

// Create Header
function FAQ() {
  ReactGA.pageview('/faq');

  const [showAnswers, setShowAnswers] = React.useState([]);

  React.useEffect(() => {
  });

  const toggleShowAnswer = (id) => {
    let newShowAnswers = [...showAnswers];
    newShowAnswers[id] = !newShowAnswers[id];

    setShowAnswers(newShowAnswers);
  }

  // RENDER
  return (
    <>
      {/* HERO SECTION */}
      <SectionHero padding="50px 0px 80px 0px">
        <Content className="contentBox">
          <Item margin="0px 20px">
            <H1>Frequently Asked Questions</H1>
            <Span color="#fff" margin="-20px 0 0 0" size="1rem">Frequently asked Questions and their answers!</Span>
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
          <Item align="stretch" justify="flex-start" margin="0px 20px 40px 20px">
            <Item align="stretch" align="flex-start" margin="0px 0px 20px 0px">
              <H2 textTransform="uppercase" spacing="0.1em">
                <Span bg="#e20880" color="#fff" weight="600" padding="0px 8px">Frequently</Span><Span weight="200"> Asked Questions</Span>
              </H2>
              <H3>Get answers for some of the popular questions asked by EPNS community!</H3>
            </Item>

            {/* Question */}
            <Item align="stretch" margin="0px 0px 20px 0px">
              <QnAItem>
                <Question
                  onClick={() => {toggleShowAnswer(1)}}
                  hover="#e20880"
                >
                  <Span>
                    What is EPNS?
                  </Span>
                  <BsChevronExpand size={20} color={"#ddd"}/>
                </Question>

                {showAnswers[1] &&
                  <Answer>
                    <Span>Ethereum Push Notification Service (EPNS) is a decentralized protocol allowing Ethereum users to receive notifications for on-chain or off-chain activity.</Span>

                    <Span>EPNS allows Web3 actors (users, dapps, service providers) to create notifications that are triggered if and when a smart contract reaches certain conditions. Other Web3 participants can search, browse, and subscribe to specific notifications and more confidently interact with dapps.</Span>
                  </Answer>
                }
              </QnAItem>

              <QnAItem>
                <Question
                  onClick={() => {toggleShowAnswer(2)}}
                  hover="#e20880"
                >
                  <Span>
                    Why are push notifications important for Web3?
                  </Span>
                  <BsChevronExpand size={20} color={"#ddd"}/>
                </Question>

                {showAnswers[2] &&
                  <Answer>
                    <Span>Push notifications have transformed the Web2 ecosystem. They have enabled applications to have more direct relationships with users and have yielded fundamental strategies about marketing, product fit, user behavior, and more. The problem with Web2 notifications, however, is that they are entirely created and prescribed by the applications themselves, and are not always net-useful to the end user. Users rarely have a choice about what kinds of notifications they wish to receive, and more often than not, notifications are purely marketing vehicles to drive revenue for the applications.</Span>

                    <Span><i>Decentralized</i> notifications, on the other hand, provide the emerging Web3 ecosystem with the benefits of a robust notification ecosystem without the exploitative or centralized drawbacks of Web2 notifications. Applications need ways to communicate with users in more immediate and event-initiated ways than through Twitter, Discord, or email. Users deserve to control what notifications they receive, and should benefit from the open source nature of Web3 by requesting notifications about protocol behavior.</Span>
                  </Answer>
                }
              </QnAItem>

              <QnAItem>
                <Question
                  onClick={() => {toggleShowAnswer(3)}}
                  hover="#e20880"
                >
                  <Span>
                    How can decentralized push notifications be used?
                  </Span>
                  <BsChevronExpand size={20} color={"#ddd"}/>
                </Question>

                {showAnswers[3] &&
                  <Answer>
                    <Span>We believe almost any application in the Web3 ecosystem can benefit from notifications. Some of the highest-impact immediate opportunities are:</Span>

                    <Span><b>DEXes:</b> DEX users can be notified when the price of a token falls or rises a certain percentage. Users can also set up notifications for when their trades are executed and completed, rather than having to check back to see if trades were completed (especially during times of high network traffic). Users can also set up notifications for when gas prices go down or up to help them decide when to trade.</Span>

                    <Span><b>DeFi:</b> Lending protocol users can set up notifications to be informed when they are about to be liquidated, rather than needing to check in regularly to ensure. LP providers can also set up notifications about impermanent loss in case they wish to cut their losses short during a volatile market. If DeFi users are interacting with a particularly young or untested protocol, they could set up notifications to inform them if large amounts of funds are being moved around in ways that could signal instability within that dapp.</Span>

                    <Span><b>NFTs and Gaming:</b> Trading of NFTs or goods on markets or within games can be connected to EPNS to inform users 1) when certain goods go on sale or auction; 2) when auctions go live from crypto-artists; 3) when a bid is accepted or topped; 4) when one’s own NFT (or anyone else’s) sells.</Span>

                    <Span><b>ENS/Consumer Apps:</b> Apps like the Ethereum Name Service (ENS) can notify users when their subscriptions are about to expire, rather than expecting users to remember or check in regularly to remind themselves of upcoming dates.</Span>
                  </Answer>
                }
              </QnAItem>

              <QnAItem>
                <Question
                  onClick={() => {toggleShowAnswer(4)}}
                  hover="#e20880"
                >
                  <Span>
                    What is EPNS's solution?
                  </Span>
                  <BsChevronExpand size={20} color={"#ddd"}/>
                </Question>

                {showAnswers[4] &&
                  <Answer>
                    <Span>The EPNS solution is comprised of 4 components: <b>Service</b>, <b>Channel</b>, <b>Subscriber</b>, <b>User</b>.</Span>
                    <Span><b>⚬ Service:</b> A service is any user, wallet owner, dapp, or Web3 services that would like to send notifications. Essentially, a service is any addressable user of EPNS.</Span>
                    <Span><b>⚬ Channel:</b> A channel is any service that has activated itself on the EPNS protocol and can therefore begin creating notifications.</Span>
                    <Span><b>⚬ User:</b> Any participant in Web3 that wishes to receive notifications about a dapp, wallet, or smart contract.</Span>
                    <Span><b>⚬ Subscriber:</b> A user that has elected to receive notifications from any particular channel (i.e. someone who subscribes to a channel that sends out a specific notification).</Span>
                  </Answer>
                }
              </QnAItem>

              <QnAItem>
                <Question
                  onClick={() => {toggleShowAnswer(5)}}
                  hover="#e20880"
                >
                  <Span>
                    How do I use EPNS?
                  </Span>
                  <BsChevronExpand size={20} color={"#ddd"}/>
                </Question>

                {showAnswers[5] &&
                  <Answer>
                    <Span>EPNS is an app on your phone and/or desktop. On the app, you can connect your wallet(s) and subscribe to different channels based on which notifications you’d like to receive.</Span>
                  </Answer>
                }
              </QnAItem>

              <QnAItem>
                <Question
                  onClick={() => {toggleShowAnswer(6)}}
                  hover="#e20880"
                >
                  <Span>
                    How can I use EPNS right now?
                  </Span>
                  <BsChevronExpand size={20} color={"#ddd"}/>
                </Question>

                {showAnswers[6] &&
                  <Answer>
                    <Span>EPNS right now is live on the Ropsten network. There are a few “run of show” notifications the EPNs team has set up to help demonstrate to the market the utility and UX of EPNS. Those include: Compound liquidity alert, fund tracker from specific crypto wallets, ENS domain expiry alert, and Ethereum gas alert.</Span>
                  </Answer>
                }
              </QnAItem>

              <QnAItem>
                <Question
                  onClick={() => {toggleShowAnswer(7)}}
                  hover="#e20880"
                >
                  <Span>
                    What's next for EPNS?
                  </Span>
                  <BsChevronExpand size={20} color={"#ddd"}/>
                </Question>

                {showAnswers[7] &&
                  <Answer>
                    <Span>We’re working hard to get EPNS to the Ethereum mainnet and begin powering the Web3 notification ecosystem! Our plan is to launch in late 2020 or early 2021. In the meantime, we’re inviting collaborators, developers, and enthusiasts to test out the product, give feedback, and spread the word.</Span>
                  </Answer>
                }
              </QnAItem>

              <QnAItem>
                <Question
                  onClick={() => {toggleShowAnswer(8)}}
                  hover="#e20880"
                >
                  <Span>
                    How can I keep up with EPNS?
                  </Span>
                  <BsChevronExpand size={20} color={"#ddd"}/>
                </Question>

                {showAnswers[8] &&
                  <Answer>
                    <Span>Join our <AMod href="https://t.me/epnsproject" target="_blank" title="Join our EPNS's Telegram channel">Telegram</AMod>, follow us on <AMod href="https://twitter.com/epnsproject" target="_blank" title="Join our EPNS's Twitter channel">Twitter</AMod>, and sign up for our 5 minute <AMod href="https://epns.substack.com/" target="_blank" title="Join our EPNS's Twitter channel">weekly product updates</AMod>.</Span>
                  </Answer>
                }
              </QnAItem>


            </Item>
          </Item>
        </Content>
      </Section>
    </>
  );
}

// css style
const Question = styled(Button)`
  align-items: stretch;
  align-self: stretch;
`

const Answer = styled(Item)`
  align-items: stretch;
  align-self: stretch;

`

const QnAItem = styled(Item)`
  align-items: stretch;
  align-self: stretch;
  margin: 15px 0px;
  border: 1px solid #fafafa;
  border-radius: 10px;
  box-shadow: 0px 5px 20px -10px rgb(0 0 0 / 0.20);
  overflow: hidden;

  & ${Question} {
    background: transparent;
    justify-content: flex-start;

    & ${Span} {
      font-weight: 400;
      letter-spacing: 0.2em;
      margin-left: 10px;
      flex: 1;
    }

    &:hover {
      & ${Span} {
        color: #fff;
      }
    }
  }

  & ${Answer} {
    border: 1px solid #e6e6e6;
    border-top: 1px solid #e6e6e6;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 10px 15px;
    align-items: flex-start;
    background: rgb(31,23,47);
    background: linear-gradient(283deg,rgba(31,23,47,1) 0%,rgba(62,9,40,1) 45%,rgba(17,58,72,1) 100%);

    & ${Span} {
      line-height: 1.5em;
      margin: 10px;
      color: #fff;
      font-size: 1.05em;
    }
  }
`

const AMod = styled(A)`
  color: #fff;
  font-weight: 400;
  text-decoration: underline;
`

// Export Default
export default FAQ;
