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

gsap.registerPlugin(TextPlugin);

// Create Header
function Home() {
  ReactGA.pageview('/home');

  // For the hero banner
  const [animateHero, setAnimateHero] = React.useState(true);

  // For Featured
  const [featuredShowAll, setFeaturedShowAll] = React.useState(false);

  // For the mail form
  const [mailListProcessing, setMailListProcessing] = React.useState(0);
  const [mailListName, setMailListName] = React.useState('');
  const [mailListEmail, setMailListEmail] = React.useState('');
  const [mailListError, setMailListError] = React.useState('');

  React.useEffect(() => {

  });

  // Handle ANIMATIONS
  // ---------
  function initBlobsBackground() {
		// if ($(".p1-blob-animated").length >= 1) {
    //
		// 	$(".p1-blob-animated").each(function() {
		// 		var $blob1 = $(this).find(".p1-anim-blob1").first();
		// 		var $blob2 = $(this).find(".p1-anim-blob2").first();
		// 		var $blob3 = $(this).find(".p1-anim-blob3").first();
		// 		var $blob4 = $(this).find(".p1-anim-blob4").first();
    //
		// 		var tl = new TimelineMax({repeat: -1});
		// 			tl.to($blob1, 2, {morphSVG: {shape: $blob2, shapeIndex: [4], precompile: ["M87.78,212 C93.61,166.8 45.85,108.9 77.03,75.72 147.9,0.23 309,13.37 387.6,80.44 471.8,152.4 517.2,325.6 442.9,407.5 350.2,509.8 43.77,516.2 29.67,378.8 20.48,289.3 80.25,270.39 87.78,212 z","M38.35,160.1 C74.92,86.34 178.1,44.04 260.1,51.51 348.2,59.54 441.6,126.9 473.5,209.4 499.3,276 485,371.9 431.9,419.6 348.2,494.9 185.6,517.4 95.49,449.9 16.71,390.8 -5.39,248.3 38.35,160.1 z"]}, ease: Linear.easeIn})
		// 			.to($blob1, 2, {morphSVG: {shape: $blob3, shapeIndex: [0], precompile: ["M38.35,160.1 C74.92,86.34 178.1,44.04 260.1,51.51 348.2,59.54 441.6,126.9 473.5,209.4 499.3,276 485,371.9 431.9,419.6 348.2,494.9 185.6,517.4 95.49,449.9 56.09,420.35 30.87,369.95 20.97,315.91 11.06,261.87 16.47,204.2 38.35,160.1 z","M161,54.69 C230.4,4.98 303.7,8.66 414.4,92.19 465.7,130.9 432.3,211.4 460,279.5 481,331.2 449.7,430.4 381.1,427 287.1,422.3 172.4,503.8 99.27,444.6 21.03,381.1 10.32,258.3 55.25,145.6 73.73,99.3 129.3,77.36 161,54.69 z"]}, ease: Linear.easeIn})
		// 			.to($blob1, 2, {morphSVG: {shape: $blob4, shapeIndex: [0], precompile: ["M161,54.69 C230.4,4.98 303.7,8.66 414.4,92.19 465.7,130.9 432.3,211.4 460,279.5 481,331.2 449.7,430.4 381.1,427 287.1,422.3 172.4,503.8 99.27,444.6 21.03,381.1 10.32,258.3 55.25,145.6 73.73,99.3 129.3,77.36 161,54.69 z","M119.8,69.41 C213.5,18.01 367.2,-1.3 440.4,76.58 482.9,121.9 435.3,200.8 432.9,262.89 431.1,310.6 461.3,372.1 427.7,406 342.4,492 158.3,499.3 64.62,422.5 10.09,377.8 18.76,282.6 32.51,213.5 43.46,158.4 70.61,96.36 119.8,69.41 z"]}, ease: Linear.easeIn})
		// 			.to($blob1, 2, {morphSVG: {shape: $blob3, shapeIndex: [0], precompile: ["M119.8,69.41 C213.5,18.01 367.2,-1.3 440.4,76.58 482.9,121.9 435.3,200.8 432.9,262.89 431.1,310.6 461.3,372.1 427.7,406 342.4,492 158.3,499.3 64.62,422.5 10.09,377.8 18.76,282.6 32.51,213.5 43.46,158.4 70.61,96.36 119.8,69.41 z","M161,54.69 C230.4,4.98 303.7,8.66 414.4,92.19 465.7,130.9 432.3,211.4 460,279.5 481,331.2 449.7,430.4 381.1,427 287.1,422.3 172.4,503.8 99.27,444.6 21.03,381.1 10.32,258.3 55.25,145.6 73.73,99.3 129.3,77.36 161,54.69 z"]}, ease: Linear.easeIn})
		// 			.to($blob1, 4, {morphSVG: {shape: $blob1, shapeIndex: [0], precompile: ["M161,54.69 C230.4,4.98 303.7,8.66 414.4,92.19 465.7,130.9 432.3,211.4 460,279.5 481,331.2 449.7,430.4 381.1,427 287.1,422.3 172.4,503.8 99.27,444.6 21.03,381.1 10.32,258.3 55.25,145.6 73.73,99.3 129.3,77.36 161,54.69 z","M77.03,75.72 C147.9,0.23 309,13.37 387.6,80.44 471.8,152.4 517.2,325.6 442.9,407.5 350.2,509.8 43.77,516.2 29.67,378.8 20.48,289.3 80.25,270.39 87.78,212 90.69,189.4 80.21,163.62 72.89,139.35 65.58,115.08 61.44,92.31 77.03,75.72 z"]}, ease: Linear.easeIn});
    //
		// 		tl.progress(randomDecimal(0, 1));
		// 	});
		}

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
          <ItemH>
            <Item align="flex-start" margin="0px">
              <H1>Ethereum Push Notification Service</H1>
              <Span margin="-30px 0 0 0"><Span color="#e20880" weight="700" size="0.9rem">Subscribe. </Span><Span color="#674c9f" weight="700" size="0.9rem">Notify. </Span><Span color="#35c5f3" weight="700" size="0.9rem">Earn.</Span></Span>

                  <Tween to={{ text: 'Protocol for Decentralized, Platform Agnostic, Incentivized Notifications from Blockchain!' }} duration={2} delay={3}>
                    <Span margin="20px 0px" color="#fff" size="1.5rem" weight="200">Protocol for Decentralized, Platform Agnostic, Incentivized Notifications from Blockchain!</Span>
                  </Tween>

              <ItemH align="flex-start" justify="flex-start" margin="10px 0" columnGap="20px">
                <Anchor href="https://whitepaper.epns.io" target="_blank" bg="#674c9f" margin="10px 0px">Read Whitepaper</Anchor>
                <Anchor href="https://whitepaper.epns.io" target="_blank" bg="#674c9f" margin="10px 0px">Integrate</Anchor>
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
          <Item margin="40px 20px 60px 20px">
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
              >
                <Item minWidth="auto">
                  <FeatureImage src="./esp.png" />
                </Item>
              </Feature>

              <Feature
                href="https://cointelegraph.com/news/dapps-can-now-send-push-notifications-to-ethereum-wallet-users"
                target="_blank"
              >
                <Item minWidth="auto">
                  <FeatureImage src="./cointelegraph.png" />
                </Item>
              </Feature>

              <Feature
                href="https://twitter.com/epnsproject/status/1299018919143849984?s=20"
                target="_blank"
              >
                <Item minWidth="auto">
                  <FeatureImage src="./gitcoin.png" />
                </Item>
              </Feature>

              <Feature
                href="https://medium.com/@ideovc/hello-its-your-users-calling-7599c679e28d"
                target="_blank"
              >
                <Item minWidth="auto">
                  <FeatureImage src="./ideo.png" />
                </Item>
              </Feature>

              <Feature
                href="https://podcast.ethhub.io/ethhub-weekly-119-yield-farming-defi-valuations-on-the-rise-eths-value-prop-epns-introduced-consensys-staking-as-a-service-reddits-scaling-ethereum-challenge-and-matter-labs-zk-sync"
                target="_blank"
              >
                <Item minWidth="auto">
                  <FeatureImage src="./ethhub.png" />
                </Item>
              </Feature>

              <Feature
                href="https://twitter.com/DeFi_Dad/status/1297544923219189760?s=20"
                target="_blank"
              >
                <Item minWidth="auto">
                  <FeatureImage src="./defidad.png" />
                </Item>
              </Feature>

              <Feature
                href="https://www.edcon.io/#maodian"
                target="_blank"
              >
                <Item minWidth="auto">
                  <FeatureImage src="./edcon.png" />
                </Item>
              </Feature>

              {featuredShowAll &&
                <>
                  <Feature
                    href="https://medium.com/paradigm-fund/ethereum-biweekly-vol-46-ecosystem-and-projects-updates-development-tools-and-research-articles-c2732e1502aa"
                    target="_blank"
                  >
                    <Item minWidth="auto">
                      <FeatureImage src="./paradigm.png" />
                    </Item>
                  </Feature>

                  <Feature
                    href="https://defipulse.com/defi-list"
                    target="_blank"
                    bg="#e20880"
                  >
                    <Item minWidth="auto">
                      <FeatureImage src="./defipulse.png" />
                    </Item>
                  </Feature>

                  <Feature
                    href="https://mojkripto.com/ethereum-push-notification-service-epns-interview/?lang=en"
                    target="_blank"
                  >
                    <Item minWidth="auto">
                      <FeatureImage src="./mojkripto.png" />
                    </Item>
                  </Feature>
                </>
              }

              <Feature
                href="#"
                onClick={(e) => {e.preventDefault(); setFeaturedShowAll(!featuredShowAll)}}
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
      <Section theme="#fff" padding="0px 0px 30px 0px">
        <Content className="contentBox">
          <Item margin="40px 20px 60px 20px" align="flex-start">
            <H2>What is Ethereum Push Notification Service?</H2>
          </Item>
        </Content>
      </Section>

      {/* SUBSCRIBE SECTION */}
      <Section theme="#fafafa" padding="0px 0px 30px 0px">

        <Content className="contentBox">
          <Item margin="40px 20px 60px 20px">
            <Item self="stretch" align="stretch" margin="40px 0px">
              <Controls playState={PlayState.stop}>
                <Tween to={{ text: 'This is the new text.' }} duration={2}>
                  <span>This is a text.</span>
                </Tween>
              </Controls>
            </Item>

            <Item self="stretch" align="stretch" margin="40px 0px">
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

        <WaveOuter>
          <WaveInner>
            <Wave fill='#fafafa'
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

      <Section theme="#fafafa">

        <Content className="contentBox">

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
