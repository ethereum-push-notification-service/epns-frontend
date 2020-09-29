import React from "react";
import ReactGA from 'react-ga';

import styled, { css } from 'styled-components';
import {Section, SectionFS, SectionFSHero, Content, Item, ItemH, WaveOuter, WaveInner, H1, H2, H3, Image, P, Span, Anchor, Button} from 'components/SharedStyling';

import Loader from 'react-loader-spinner'

import YouTube from 'react-youtube';
import ParticlesBg from "particles-bg";

import { GiTwitter } from 'react-icons/gi';
import { FaCheckCircle, FaBolt, FaTwitter, FaTelegramPlane, FaMedium, FaGithub, FaGooglePlay } from 'react-icons/fa';
import { IoMdRocket, IoMdHeart, IoMdNotifications } from 'react-icons/io';
import { BsChevronExpand } from 'react-icons/bs';

import Wave from 'react-wavify'
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { Controls, PlayState, Tween } from 'react-gsap';

import TeamMember from 'components/TeamMember';

gsap.registerPlugin(TextPlugin);

const randomTeamQuotes = [
  "ONE AMONG US DOESN'T LIKE FARMING 🙀😱",
  "ONE AMONG US HAS A CAT 🐈",
  "ONE AMONG US HAS A NAME KNOWN TO JUST A FEW 🦸🏻",
  "ONE AMONG US HAS MORE BTC THAN ETH 😬",
]

// Create Header
function Home() {
  ReactGA.pageview('/home');

  // For the hero banner
  const [animateHero, setAnimateHero] = React.useState(true);

  // For Featured
  const [featuredShowAll, setFeaturedShowAll] = React.useState(false);
  const [playTeaserVideo, setPlayTeaserVideo] = React.useState(false);

  // For the mail form
  const [mailListProcessing, setMailListProcessing] = React.useState(0);
  const [mailListName, setMailListName] = React.useState('');
  const [mailListEmail, setMailListEmail] = React.useState('');
  const [mailListError, setMailListError] = React.useState('');

  React.useEffect(() => {

  });

  // Handle ANIMATIONS
  // ---------

  // HANDLE EMAIL
  // ---------
  const handleSubmission = (e) => {
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
            console.log(jsondata);
            setMailListProcessing(2);
          })
        .catch(err => {
          console.log(err);
          setMailListError("Mayday! Mayday! something went wrong. Please retry...");
          setMailListProcessing(0);
        });
    }
    else {
      setMailListError("Incorrect e-mail, please check and retry!");
      setMailListProcessing(0);
    }
  }

  const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  // ---------

  // RENDER
  return (
    <>
      {/* HERO SECTION */}
      <SectionFSHero padding="15px 0px 0px 0px">
        <Content className="contentBox">
          <ItemH columnGap="40px" margin="0px 20px">
            <Item align="flex-start">
              <H1>Ethereum Push Notification Service</H1>
              <Span margin="-25px 0 0 0"><Span color="rgba(255, 255, 255, 0.5)" weight="600" size="0.9rem">Subscribe. </Span><Span color="rgba(255, 255, 255, 0.5)" weight="600" size="0.9rem">Notify. </Span><Span color="rgba(255, 255, 255, 0.5)" weight="600" size="0.9rem">Earn.</Span></Span>

                <Span margin="20px 0px" color="rgba(255, 255, 255, 0.5)" size="1.5rem" weight="200">Protocol for <Span color="#fff" weight="400">Platform Agnostic, </Span><Span color="#fff" weight="400">Incentivized Notifications</Span> from <Span color="rgba(255, 255, 255, 0.5)" weight="600">Blockchain!</Span></Span>

              <ItemH align="flex-start" justify="flex-start" margin="10px 0" columnGap="20px">
                <Anchor href="https://whitepaper.epns.io" target="_blank" bg="#674c9f" margin="10px 0px" radius="2px">Read Whitepaper</Anchor>
                <Anchor href="https://whitepaper.epns.io" target="_blank" bg="#674c9f" margin="10px 0px" radius="2px">Integrate</Anchor>
              </ItemH>

            </Item>

            <HeroBanner margin="0px">
              <Image src="heroaltv5.png" />
            </HeroBanner>
          </ItemH>
        </Content>
        <WaveOuter>
          <WaveInner>
            <Wave fill='#35c5f3'
              paused={false}
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
              paused={false}
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

      {/* FEATURED SECTION */}
      <Section theme="#e20880" gradient="linear-gradient(0deg, #674c9f 0%, rgba(226,8,128,1) 100%)" padding="0px 0px 50px 0px">
        <Content className="contentBox">
          <Item margin="20px 20px 20px 20px">
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
                  <FeatureImage src="./esp.png" alt="Ethereum Support Program Logo" />
                </Item>
              </Feature>

              <Feature
                href="https://cointelegraph.com/news/dapps-can-now-send-push-notifications-to-ethereum-wallet-users"
                target="_blank"
                title="Coin Telegraph talks about Push Notifications from Ethereum Push Notification Service"
              >
                <Item minWidth="auto">
                  <FeatureImage src="./cointelegraph.png" alt="Coin Telegraph Logo" />
                </Item>
              </Feature>

              <Feature
                href="https://twitter.com/epnsproject/status/1299018919143849984?s=20"
                target="_blank"
                title="Ethereum Push Notification Service selected as top 20 project and unvelied at fireside"
              >
                <Item minWidth="auto">
                  <FeatureImage src="./kernel.png" alt="Gitcoin Kernel Logo" />
                </Item>
              </Feature>

              <Feature
                href="https://medium.com/@ideovc/hello-its-your-users-calling-7599c679e28d"
                target="_blank"
                title="IDEO Collab selected and mentored Ethereum Push Notification Service as 30 projects from 120 projects for Product Validation Day"
              >
                <Item minWidth="auto">
                  <FeatureImage src="./ideo.png" alt="IDEO Collab Product Validation Day Logo" />
                </Item>
              </Feature>

              <Feature
                href="https://podcast.ethhub.io/ethhub-weekly-119-yield-farming-defi-valuations-on-the-rise-eths-value-prop-epns-introduced-consensys-staking-as-a-service-reddits-scaling-ethereum-challenge-and-matter-labs-zk-sync"
                target="_blank"
                title="Anthony Sassano talks about Ethereum Push Notification Service (EPNS) Project"
              >
                <Item minWidth="auto">
                  <FeatureImage src="./ethhub.png" alt="EthHub Logo" />
                </Item>
              </Feature>

              <Feature
                href="https://twitter.com/DeFi_Dad/status/1297544923219189760?s=20"
                target="_blank"
                title="DeFi Dad upcoming podcast about EPNS"
              >
                <Item minWidth="auto">
                  <FeatureImage src="./defidad.png" alt="DeFi Dad Logo" />
                </Item>
              </Feature>

              <Feature
                href="https://www.edcon.io/#maodian"
                target="_blank"
                title="EDCON Panel featuring Harsh Rajat, founder, EPNS talks about DeFi Cross Composability"
              >
                <Item minWidth="auto">
                  <FeatureImage src="./edcon.png" alt="Edcon Logo" />
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
                      <FeatureImage src="./inc42.png" alt="INC42 Logo" />
                    </Item>
                  </Feature>

                  <Feature
                    href="https://medium.com/paradigm-fund/ethereum-biweekly-vol-46-ecosystem-and-projects-updates-development-tools-and-research-articles-c2732e1502aa"
                    target="_blank"
                    title="Paradigm features epnsproject"
                  >
                    <Item minWidth="auto">
                      <FeatureImage src="./paradigm.png" alt="Paradigm Logo" />
                    </Item>
                  </Feature>

                  <Feature
                    href="https://defipulse.com/defi-list"
                    target="_blank"
                    title="DefiPulse includes epnsproject in their esteemed list!"
                    bg="#e20880"
                  >
                    <Item minWidth="auto">
                      <FeatureImage src="./defipulse.png" alt="DefiPulse Logo" />
                    </Item>
                  </Feature>

                  <Feature
                    href="https://mojkripto.com/ethereum-push-notification-service-epns-interview/?lang=en"
                    target="_blank"
                    title="MojKripto deep dives into Ethereum Push Notification Service and the team behind it!"
                  >
                    <Item minWidth="auto">
                      <FeatureImage src="./mojkripto.png" alt="MojKripto Logo"/>
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

      {/* VISION SECTION */}
      <Section theme="#fff" padding="20px 0px 20px 0px">
        <Content className="contentBox">
          <Item align="stretch" justify="flex-start" margin="0px 20px">
            {playTeaserVideo &&
              <PreviewOuter>
                <Anchor
                  href="#"
                  bg="transparent"
                  onClick={(e) => {e.preventDefault(); setPlayTeaserVideo(!playTeaserVideo)}}
                >
                  <Content className="contentBox">
                    <Preview>
                      <div class='videoWrapper'><iframe src="https://www.youtube.com/embed/kwwnlmUpRsk?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                    </Preview>
                  </Content>
                </Anchor>
              </PreviewOuter>
            }

            <Item align="flex-start" margin="0px 0px 20px 0px">
              <H2 textTransform="uppercase" spacing="0.1em">
                <Span weight="200">The </Span><Span bg="#e20880" color="#fff" weight="600" padding="0px 8px">Problem</Span>
              </H2>
              <H3>Why EPNS is the missing piece of Web3 Infrastructure</H3>
              <Span size="1.2rem">Blockchain still operates in stone age, the communicate layer is non-existent even for crucial DeFi related activities. Contrast this to traditional services and we quickly see how notifications have made everything from payments, social, games, services a breeze. This is what Ethereum Push Notification aims to build.</Span>
            </Item>

            <ItemH columnGap="40px" rowGap="20px">
              <Item minWidth="auto" align="center">
                <Anchor
                  href="#"
                  bg="transparent"
                  onClick={(e) => {e.preventDefault(); setPlayTeaserVideo(!playTeaserVideo)}}
                >
                  <Image src="youtubeplay.png" />
                </Anchor>
              </Item>

              <Item align="flex-start" size="1.2rem">
                <Item align="flex-start">
                  <H2 color="#e20880">What<Span weight="200"> are we </Span><Span weight="200" color="#e20880">#BUIDLing?</Span></H2>
                  <Span>We are building a decentralized middleware through which any blockchain app (or even centralized one) can send notifications to wallet addresses.</Span>
                </Item>
                <Item align="flex-start">
                  <H2 color="#35c5f3">Why<Span weight="200"> is it required?</Span></H2>
                  <Span>Notifications improve user engagement and experience. For blockchain apps to be enter mainstream, they need to reach out to users instead of expecting users to come to them.</Span>
                </Item>
                <Item align="flex-start">
                  <H2 color="#674c9f">Incentivized<Span weight="200"> Notifications!?</Span></H2>
                  <Span>Not only users are able to receive notifications, but they can earn from them as well! EPNS uses DeFi to <b>Lend</b> out staking fee from services and distributes the <b>Interest</b> generated by it to the users who have opted in to recieve notifications from specific service!</Span>
                </Item>
              </Item>

            </ItemH>
          </Item>

        </Content>
        <WaveOuter>
          <WaveInner>
            <Wave fill='#f1f1f1'
              paused={true}
              options={{
                height: 20,
                amplitude: 15,
                speed: 0.5,
                points: 4
              }}
            />
          </WaveInner>
        </WaveOuter>
      </Section>

      {/* SUBSCRIBE SECTION */}
      {/*}
      <Section theme="#f1f1f1" padding="0px 0px 30px 0px">

        <Content className="contentBox">
          <Item margin="20px 20px 0px 20px">
            <Item self="stretch" align="stretch" margin="0px 0px 40px 0px">
              <FooterSubInner>
                {mailListProcessing == 0 &&
                  <Showoff><IoMdRocket size={24} color="#674c9f"/></Showoff>
                }
                <FormSubmision onSubmit={handleSubmission}>
                  {mailListProcessing == 0 &&
                    <>
                      <FormTitle>Subscribe to our mailing list!</FormTitle>
                      <Row>
                        <Header>Name</Header>
                        <Input placeholder="John Wick" value={mailListName} onChange={(e) => {setMailListName(e.target.value)}} autocomplete="name" />
                      </Row>

                      <RowEmail>
                        <Header>Email</Header>
                        <Input required placeholder="john@wick.com" value={mailListEmail} onChange={(e) => {setMailListEmail(e.target.value)}} autocomplete="email"  />
                      </RowEmail>
                    </>
                  }

                  {mailListProcessing != 2 &&
                    <Subscribe theme='#e20880' disabled={mailListProcessing}>
                      {mailListProcessing == 1 &&
                        <Loader
                           type="Oval"
                           color="#fff"
                           height={16}
                           width={16}
                          />
                      }
                      {mailListProcessing == 0 &&
                        <Submit type="submit" value="Submit" />
                      }
                    </Subscribe>
                  }

                  {mailListProcessing == 2 &&
                    <Text><Gap><FaCheckCircle size={24} color="#674c9f"/></Gap>Thanks for Subscribing! We will be in Touch :)</Text>
                  }

                  {mailListError && mailListProcessing == 0 &&
                    <FormError>{mailListError}</FormError>
                  }
                </FormSubmision>

              </FooterSubInner>
            </Item>

          </Item>
        </Content>

        <WaveOuter>
          <WaveInner>
            <Wave fill='#fff'
              paused={true}
              options={{
                height: 10,
                amplitude: 15,
                speed: 0.5,
                points: 4
              }}
            />
          </WaveInner>
        </WaveOuter>
      </Section>
      */}

      {/* TEAM SECTION | 1=Founder, 2=Founder+Lead, 3=Founder+Team, 4=Lead, 5=Team, 6=Advisor */}
      <Section theme="#fff" padding="20px 0px 20px 0px">
        <Content className="contentBox">
          <Item align="stretch" justify="flex-start" margin="0px 20px">
            <H2 textTransform="uppercase" spacing="0.1em">
              <Span bg="#e20880" color="#fff" weight="600" padding="0px 8px">Meet</Span><Span weight="200"> the Team</Span>
            </H2>
            <H3>{randomTeamQuotes[Math.floor(Math.random() * (randomTeamQuotes.length))]}</H3>
            <ItemH self="stretch" align="stretch" margin="20px 0px" rowGap="20px" columnGap="40px" minWidth="auto">
              <TeamMember
                img="Harsh.jpg"
                type={2}
                name="Harsh Rajat"
                title="Founder / Project Lead"
                twitter="https://twitter.com/harshrajat"
                linkedin="https://www.linkedin.com/in/harshrajat/"
                email="mailto://harsh@epns.io"
              />
              <TeamMember
                img="Richa.jpg"
                type={2}
                name="Richa Joshi"
                title="Co-Founder / Marketing Lead"
                twitter="https://twitter.com/riijo"
                linkedin="https://www.linkedin.com/in/richa-joshi-90b04126/"
                email="mailto://richa@epns.io"
              />
              <TeamMember
                img="Jaf.jpg"
                type={4}
                name="Jafett Sandi"
                title="Product / Dev Lead"
                twitter="https://twitter.com/jafetsc"
                linkedin="https://www.linkedin.com/in/jafettsandi/"
                email="mailto://jaf@epns.io"
              />
              <TeamMember
                img="Andrew.jpg"
                type={4}
                name="Andrew Redden"
                title="Protocol / Bizdev Lead"
                twitter="https://twitter.com/androolloyd"
                linkedin="https://www.linkedin.com/in/androolloyd/"
                email="mailto://andrew@epns.io"
              />
              <TeamMember
                img="Awosika.jpg"
                type={4}
                name="Awosika Ayodeji"
                title="Community Lead"
                twitter="https://twitter.com/Ebunayo08"
                linkedin="https://www.linkedin.com/in/ayodeji-israel-awosika-69924124/"
                email="mailto://ayodeji@epns.io"
              />
              <TeamMember
                img="Jude.jpg"
                type={5}
                name="Jude Dike"
                title="Developer"
                linkedin="https://www.linkedin.com/in/dikejudein/"
              />
              <TeamMember
                img="Victor.jpg"
                type={5}
                name="Victor Nwagbogwu"
                title="Developer (Intern)"
                linkedin="https://www.linkedin.com/in/victor-nwagbogwu/"
              />
              <TeamMember
                img="Robin.jpg"
                type={5}
                name="Robin Roy Thomas"
                title="Content Writer (Intern)"
                twitter="https://twitter.com/robin_rrtx"
                linkedin="https://www.linkedin.com/in/robin-roy-thomas-597974198/"
              />
              <TeamMember
                img="Nischal.jpg"
                type={6}
                name="Nischal Shetty"
                title="Founder / CEO, WazirX"
                twitter="https://twitter.com/NischalShetty"
                linkedIn="https://www.linkedin.com/in/nischalshetty/"
              />
              <TeamMember
                img="DefiDad.jpg"
                type={6}
                name="DeFi Dad"
                title="CMO, Zapier.Fi"
                twitter="https://twitter.com/DeFi_Dad"
              />
              <TeamMember
                img="Vivek.jpg"
                type={6}
                name="Vivek Singh"
                title="Co-Founder, Gitcoin"
                twitter="https://twitter.com/vsinghdothings"
                linkedin="https://www.linkedin.com/in/vivek-singh-b5a4b675/"
              />

            </ItemH>

          </Item>
        </Content>
      </Section>

      {/* MISC SECTION */}
      {/*
      <Section theme="#fafafa" padding="0px 0px 30px 0px">
        <Content className="contentBox">
          <Item margin="20px 20px 0px 20px" align="flex-start">
              <ItemH self="stretch" align="stretch" margin="20px 0px" columnGap="40px">
                <Item>
                  <FooterSubTitle>Follow our story!  <IoMdHeart size={18} color="#C51104"/></FooterSubTitle>
                  <FooterSubInner>
                    <FooterLink bg="#e20880" href="https://twitter.com/epnsproject" target="_blank"><FaTwitter size={20} color="#fff"/></FooterLink>
                    <FooterLink bg="#674c9f" href="https://t.me/epnsproject" target="_blank"><FaTelegramPlane size={20} color="#fff"/></FooterLink>
                    <FooterLink bg="#35c5f3" href="https://medium.com/@epnsproject" target="_blank"><FaMedium size={20} color="#fff"/></FooterLink>
                  </FooterSubInner>
                </Item>
                <Item>
                  <FooterSubTitle>Check out Repo / Early (Alpha) Access</FooterSubTitle>
                  <FooterSubInner>
                    <FooterLink bg="#e20880" href="https://github.com/ethereum-push-notification-service" target="_blank"><FaGithub size={20} color="#fff"/></FooterLink>
                    <FooterLink bg="#674c9f" href="https://play.google.com/store/apps/details?id=io.epns.epns" target="_blank"><FaGooglePlay size={20} color="#fff"/></FooterLink>
                    <FooterLink bg="#35c5f3" href="https://app.epns.io" target="_blank"><IoMdNotifications size={20} color="#fff"/></FooterLink>
                  </FooterSubInner>
                </Item>
              </ItemH>
          </Item>
        </Content>
      </Section>
      */}
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
  column-gap: 40px;
  align-items: stretch;
  justify-content: center;
  flex-wrap: wrap;
`

const Feature = styled.a`
  display: flex;
  flex: 1;
  margin: 20px 0px;
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

const PreviewOuter = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(0 0 0 / 0.5);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
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

const ColoredBox = styled.div`
  width: ${props => props.width || '100px'};
  height: ${props => props.height || '40px'};
  background: ${props => props.bg || 'transparent'};
`

const FooterSubTitle = styled.div`
  padding: 8px 10px;
  font-size: 14px;
  font-weight: 200;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fafafa;
  border-bottom: 1px solid #ddd;
`

const FooterSubInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 10px;
`

const FooterSubFull = styled(FooterSubInner)`
  flex: 0 0 100%;
  flex-direction: column;
  align-items: stretch;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  padding: 0px;
  margin-bottom: 20px;
  background: #fafafa;
  position: relative;
  border-left: 10px solid #674c9f;
  border-radius: 10px;
`

const Showoff = styled.div`
`

const FormTitle = styled.h2`
  flex: 100%;
  padding: 0px 10px;
  font-size: 14px;
  font-weight: 200;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #674b9f;
`

const FormSubmision = styled.form`
  display: flex;
  align-items: center;
  align-content: center;
  align-self: stretch;
  flex: 1;
  flex-wrap: wrap;
  justify-content: center;
`

const FormError = styled.label`
  background: #e1087f;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  flex-basis: 100%;
  padding: 7px 5px;
  border-radius: 4px;
  margin: 5px 10px;
`

const Row = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
`

const RowEmail = styled(Row)`
  min-width: 300px;
  flex: 3;
`

const Header = styled.label`
  font-size: 10px;
  position: absolute;
  top: 3px;
  left: 15px;
  padding: 2px 4px;
  font-weight: bold;
  background: #fafafa;
  color: #e1087f;
`

const Text = styled.span`
  display: flex;
  font-weight: 300;
  color: #000;
  letter-spacing: 0.1em;
  font-size: 13px;
  align-items: center;
  text-transform: uppercase;
`

const Gap = styled.span`
  padding-right: 6px;
`

const Input = styled.input`
  outline: 0px;
  border: 1px solid #35c4f3;
  margin: 10px;
  padding: 10px 8px;
  flex: 1;
  border-radius: 6px;
  font-size: 14px;
`

const Subscribe = styled.button`
  border: 0;
  outline: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border-radius: 20px;
  font-size: 14px;
  background: ${props => props.theme || '#674c9f'};
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 400;
  flex: 0;
  margin: 10px;
  flex-grow: 1;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
    pointer: hand;
  }
  &:active {
    opacity: 0.75;
    cursor: pointer;
    pointer: hand;
  }
`

const Submit = styled.input`
  border: 0;
  outline: 0;
  background: transparent;
  color: #fff;
`

const FooterLink = styled.a`
  margin: 10px;
  padding: 8px;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.bg ? props.bg : "rgb(180,180,180)"};

  &:hover {
    opacity: 0.9;
    cursor: pointer;
    pointer: hand;
  }
  &:active {
    opacity: 0.75;
    cursor: pointer;
    pointer: hand;
  }
`

// Export Default
export default Home;
