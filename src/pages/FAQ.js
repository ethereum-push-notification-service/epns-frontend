import React from "react";
import ReactGA from 'react-ga';

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
            <Item align="stretch" align="flex-start" margin="0px 0px 20px 0px">
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
                    <Span>You Tell Me!</Span>
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
                    <Span>You Tell Me!</Span>
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
                    <Span>You Tell Me!</Span>
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
                    <Span>You Tell Me!</Span>
                  </Answer>
                }
              </QnAItem>

              <QnAItem>
                <Question
                  onClick={() => {toggleShowAnswer(4)}}
                  hover="#e20880"
                >
                  <Span>
                    How do I use EPNS?
                  </Span>
                  <BsChevronExpand size={20} color={"#ddd"}/>
                </Question>

                {showAnswers[4] &&
                  <Answer>
                    <Span>You Tell Me!</Span>
                  </Answer>
                }
              </QnAItem>

              <QnAItem>
                <Question
                  onClick={() => {toggleShowAnswer(4)}}
                  hover="#e20880"
                >
                  <Span>
                    How can I use EPNS right now?
                  </Span>
                  <BsChevronExpand size={20} color={"#ddd"}/>
                </Question>

                {showAnswers[4] &&
                  <Answer>
                    <Span>You Tell Me!</Span>
                  </Answer>
                }
              </QnAItem>

              <QnAItem>
                <Question
                  onClick={() => {toggleShowAnswer(4)}}
                  hover="#e20880"
                >
                  <Span>
                    What's next for EPNS?
                  </Span>
                  <BsChevronExpand size={20} color={"#ddd"}/>
                </Question>

                {showAnswers[4] &&
                  <Answer>
                    <Span>You Tell Me!</Span>
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
                    <Span>You Tell Me!</Span>
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

`

const Answer = styled(Item)`

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
    padding: 10px 30px;
    align-items: flex-start;
    background: #fafafa;
  }
`

// Export Default
export default FAQ;
