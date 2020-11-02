import React from "react";
import ReactGA from 'react-ga';

import styled, { css } from 'styled-components';
import Loader from 'react-loader-spinner'

import YouTube from 'react-youtube';
import ParticlesBg from "particles-bg";

import { GiTwitter } from 'react-icons/gi';
import { FaCheckCircle, FaBolt, FaTwitter, FaTelegramPlane, FaMedium, FaGithub, FaGooglePlay } from 'react-icons/fa';
import { IoMdRocket, IoMdHeart, IoMdNotifications } from 'react-icons/io';

import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { Controls, PlayState, Tween } from 'react-gsap';

gsap.registerPlugin(TextPlugin);

// Create Header
function HomeOld({ setBadgeCount, bellPressed }) {
  ReactGA.pageview('/home');

  const [particleConfig, setParticleConfig] = React.useState(null);
  const [processing, setProcessing] = React.useState(0);
  const [formName, setFormName] = React.useState('');
  const [formEmail, setFormEmail] = React.useState('');
  const [formError, setFormError] = React.useState('');

  React.useEffect(() => {
    if (!particleConfig) {
      let config = {
        num: [4, 7],
        rps: 0.1,
        radius: [5, 40],
        life: [1.5, 3],
        v: [2, 3],
        tha: [-40, 40],
        alpha: [0.6, 0],
        scale: [.1, 0.4],
        position: "all",
        color: ["#e20880", "#35c5f3", "#674c9f"],
        cross: "dead",
        // emitter: "follow",
        random: 15
      };

      if (Math.random() > 0.85) {
        config = Object.assign(config, {
          onParticleUpdate: (ctx, particle) => {
            ctx.beginPath();
            ctx.rect(
              particle.p.x,
              particle.p.y,
              particle.radius * 2,
              particle.radius * 2
            );
            ctx.fillStyle = particle.color;
            ctx.fill();
            ctx.closePath();
          }
        });
      }

      setParticleConfig(config);
    }
  });

  // Handle submission
  const handleSubmission = (e) => {
    e.preventDefault();

    // Check everything in order
    if (validateEmail(formEmail)) {
      setProcessing(1);

      const details = {
        'name': formName,
        'email': formEmail,
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
            setProcessing(2);
          })
        .catch(err => {
          console.log(err);
          setFormError("Mayday! Mayday! something went wrong. Please retry...");
          setProcessing(0);
        });
    }
    else {
      setFormError("Incorrect e-mail, please check and retry!");
      setProcessing(0);
    }
  }

  const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  // Render
  return (
    <>
      <Section>
        <ParticlesBg type="custom" config={particleConfig} bg={true} />
        <Content>

          <QnAItems>
            <QnAItem>
              <Question>What is Ethereum Push Notification Service (EPNS)</Question>
              <Answer>EPNS is the missing piece of Web3! EPNS is a decentralized DeFi protocol for sending notifications. It allows any users to send notifications on Ethereum which is platform agnostic (ie: you get it on Mobile, Chrome or even favorite Wallets). Did we mention you also earn from them!? Cause why not ;)</Answer>
            </QnAItem>
          </QnAItems>

          <Preview>
            <div class='videoWrapper'><iframe src="https://www.youtube.com/embed/kwwnlmUpRsk?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
          </Preview>

          <Footer>
            <FooterInner>
              <FooterSubFull>
                <FooterSubInner>
                  {processing == 0 &&
                    <Showoff><IoMdRocket size={24} color="#674c9f"/></Showoff>
                  }
                  <FormSubmision onSubmit={handleSubmission}>
                    {processing == 0 &&
                      <>
                        <FormTitle>Subscribe to our mailing list!</FormTitle>
                        <Row>
                          <Header>Name</Header>
                          <Input placeholder="John Wick" value={formName} onChange={(e) => {setFormName(e.target.value)}} autocomplete="name" />
                        </Row>

                        <RowEmail>
                          <Header>Email</Header>
                          <Input required placeholder="john@wick.com" value={formEmail} onChange={(e) => {setFormEmail(e.target.value)}} autocomplete="email"  />
                        </RowEmail>
                      </>
                    }

                    {processing != 2 &&
                      <Subscribe theme='#e20880' disabled={processing}>
                        {processing == 1 &&
                          <Loader
                             type="Oval"
                             color="#fff"
                             height={16}
                             width={16}
                            />
                        }
                        {processing == 0 &&
                          <Submit type="submit" value="Submit" />
                        }
                      </Subscribe>
                    }

                    {processing == 2 &&
                      <Text><Gap><FaCheckCircle size={24} color="#674c9f"/></Gap>Thanks for Subscribing! We will be in Touch :)</Text>
                    }

                    {formError && processing == 0 &&
                      <FormError>{formError}</FormError>
                    }
                  </FormSubmision>

                </FooterSubInner>
              </FooterSubFull>

              <FooterSub>
                <FooterSubTitle>Follow our story!  <IoMdHeart size={18} color="#C51104"/></FooterSubTitle>
                <FooterSubInner>
                  <FooterLink bg="#e20880" href="https://twitter.com/epnsproject" target="_blank"><FaTwitter size={20} color="#fff"/></FooterLink>
                  <FooterLink bg="#674c9f" href="https://t.me/epnsproject" target="_blank"><FaTelegramPlane size={20} color="#fff"/></FooterLink>
                  <FooterLink bg="#35c5f3" href="https://medium.com/@epnsproject" target="_blank"><FaMedium size={20} color="#fff"/></FooterLink>
                </FooterSubInner>
              </FooterSub>
              <FooterSub>
                <FooterSubTitle>Check out Repo / Early (Alpha) Access</FooterSubTitle>
                <FooterSubInner>
                  <FooterLink bg="#e20880" href="https://github.com/ethereum-push-notification-service" target="_blank"><FaGithub size={20} color="#fff"/></FooterLink>
                  <FooterLink bg="#674c9f" href="https://play.google.com/store/apps/details?id=io.epns.epns" target="_blank"><FaGooglePlay size={20} color="#fff"/></FooterLink>
                  <FooterLink bg="#35c5f3" href="https://app.epns.io" target="_blank"><IoMdNotifications size={20} color="#fff"/></FooterLink>
                </FooterSubInner>
              </FooterSub>
            </FooterInner>
          </Footer>
        </Content>
      </Section>

      <Section theme="#674c9f">

        <Content>
          <ContentHeader theme="#fff" titleTheme="#674c9f">Featured</ContentHeader>
          <Featured>
            <Feature
              href="https://blog.ethereum.org/2020/08/19/esp-beyond-grants/"
              target="_blank"
              rel="nofollow"
            >
              <Logo src="./featured/esp.png" />
            </Feature>

            <Feature
              href="https://cointelegraph.com/news/dapps-can-now-send-push-notifications-to-ethereum-wallet-users/"
              target="_blank"
              rel="nofollow"
            >
              <Logo src="./featured/cointelegraph.png" />
            </Feature>

            <Feature
              href="https://twitter.com/epnsproject/status/1299018919143849984?s=20"
              target="_blank"
              rel="nofollow"
            >
              <Logo src="./featured/kernel.png" />
            </Feature>

            <Feature
              href="https://podcast.ethhub.io/ethhub-weekly-119-yield-farming-defi-valuations-on-the-rise-eths-value-prop-epns-introduced-consensys-staking-as-a-service-reddits-scaling-ethereum-challenge-and-matter-labs-zk-sync"
              target="_blank"
              rel="nofollow"
            >
              <Logo src="./featured/ethhub.png" />
            </Feature>

            <Feature
              href="https://www.edcon.io/#maodian"
              target="_blank"
              rel="nofollow"
            >
              <Logo src="./featured/edcon.png" />
            </Feature>

            <Feature href="https://defipulse.com"
              target="_blank"
              rel="nofollow"
            >
              <Logo src="./featured/defipulse.png" />
            </Feature>
          </Featured>
        </Content>
      </Section>
    </>
  );
}

// css style
const Section = styled.div`
  display: flex;
  align-self: stretch;
  flex-direction: column;
  background: ${props => props.theme || '#674c9f'};
  flex: 1;
`

const Content = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;
  padding: 20px;
  max-width: 940px;
  position: relative;
`

const ContentHeader = styled.div`
  position: absolute;
  top: 0;
  left: 20px;
  padding: 4px 10px;
  background: ${props => props.theme || '#fff'};
  color: ${props => props.titleTheme || '#000'};
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  &:before {
    content: "";
    width: 0;
    height: 0;
    border-top: 0px solid transparent;
    border-bottom: 26px solid transparent;
    border-right: 20px solid ${props => props.theme || '#fff'};
    position: absolute;
    left: -20px;
    top: 0px;
  }
  &:after {
    content: "";
    width: 0;
    height: 0;
    border-top: 0px solid transparent;
    border-bottom: 26px solid transparent;
    border-left: 20px solid ${props => props.theme || '#fff'};
    position: absolute;
    right: -20px;
    top: 0px;
  }
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

const QnAItems = styled.div`
  display: block;
  margin: 0px 20px 20px 20px;
`

const QnAItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
  border-left: 10px solid #e20880;
  border-radius: 10px;
  background: #fafafa;
`

const Question = styled.div`
  display: block;
  margin-bottom: 10px;
  font-size: 16px;
`

const Answer = styled.div`
  display: block;
  font-weight: 200;
  font-size: 14px;
`

const Footer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0px 20px;
`

const FooterTitle = styled.h1`
  font-size: 12px;
  -webkit-letter-spacing: 2px;
  -moz-letter-spacing: 2px;
  -ms-letter-spacing: 2px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: 400;
  border-radius: 80px;
  background: #674c9f;
  color: #fff;
  padding: 10px 25px;
  margin: 0px 0px 20px 0px;
`

const FooterInner = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 20px 0px;
  align-self: stretch;
  justify-content: space-between;
`

const FooterSub = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border: 1px solid #ddd;
  margin: 20px 20px;
  border-radius: 10px;
  overflow: hidden;
  min-width: 300px;
  flex: 1;
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

const Featured = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  filter: brightness(0) invert(1);
`

const Feature = styled.a`
  width: 25%;
  display: block;
  padding: 10px;
  align-items: center;
`

const Logo = styled.img`
  display: block;
  width: 100%;
  height: auto;
`

// Export Default
export default HomeOld;
