import React from "react";

import styled, { css } from 'styled-components';
import {Section, Item, ItemH, Span, Anchor} from 'components/SharedStyling';

import { BsChevronDown } from 'react-icons/bs';
import { CgMenuHotdog, CgClose } from 'react-icons/cg';

import Bell from 'components/Bell';


// Create Header
function Head() {
  const [badge, setBadge] = React.useState(0);
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <Header forceDisplay={showMenu}>
      <Section className="contentBox" direction="row">
        <Nav direction="row" align="stretch" justify="flex-start" minWidth="auto" margin="0px 20px" size="0.8rem">
          <Item align="center" margin="0px" minWidth="auto" flex="0">
            <HeadAnchor
              href="#"
              bg="transparent"
              title="Homepage of EPNS"
              hoverBG="#e20880"
              padding="0px"
              overflow="visible"
            >
              <Bell belltheme="white" hideBadge={false} badgeCount={badge} bellPressedCB={() => setBadge(badge + 1)} width={32} height={32} />
            </HeadAnchor>
          </Item>

          <NavPrimary direction="row" forceDisplay={showMenu} align="stretch" justify="flex-start" minWidth="auto" margin="0px 0px 0px 10px">
            <NavItems>
              <NavItem align="center" margin="0px 10px" minWidth="auto" flex="0">
                <HeadAnchor
                  href="https://whitepaper.epns.io"
                  target="_blank"
                  title="Read Whitepaper"
                  bg="transparent"
                  hoverBG="#fff"
                  padding="4px 15px"
                >
                  Whitepaper
                </HeadAnchor>
              </NavItem>

              <NavSub align="center" margin="0px 10px" minWidth="auto" flex="none">
                <NavItem align="center" margin="0px" minWidth="auto" flex="none">
                  <HeadAnchor
                    title="Documentation"
                    bg="transparent"
                    hoverBG="#fff"
                    padding="4px 15px"
                  >
                    <ItemH minWidth="auto" margin="0px">
                      <Span color="#fff" weight="400" size="0.8rem" spacing="0.2em" margin="0px 5px 0px 0px">Docs</Span>
                      <BsChevronDown size={12} color="#fff"/>
                    </ItemH>
                  </HeadAnchor>
                </NavItem>

                <NavSubItems>
                  <NavSubItem align="center" margin="0px" minWidth="auto" flex="0">
                    <HeadAnchor
                      href="./#contact"
                      title="Read Integration Guide"
                      bg="transparent"
                      hoverBG="#fff"
                      padding="4px 15px"
                    >
                      Integration Guide
                    </HeadAnchor>
                  </NavSubItem>
                </NavSubItems>
              </NavSub>

              <NavItem align="center" margin="0px" minWidth="auto" flex="0">
                <HeadAnchor
                  href="./#story"
                  title="Read our story"
                  bg="transparent"
                  hoverBG="#fff"
                  padding="4px 15px"
                >
                  Blog
                </HeadAnchor>
              </NavItem>

              <NavItem align="center" margin="0px" minWidth="auto" flex="0">
                <HeadAnchor
                  href="./#contact"
                  title="Contact Us"
                  bg="transparent"
                  hoverBG="#fff"
                  padding="4px 15px"
                >
                  Contact
                </HeadAnchor>
              </NavItem>

              <NavItem align="center" justify="flex-end" margin="0px" minWidth="auto" flex="1">
                <Anchor
                  href="https://app.epns.io"
                  target="_blank"
                  title="Visit dApp"
                  bg="transparent"
                  margin="10px 0px"
                  border="1px solid #fff"
                  padding="8px 15px"
                  radius="4px"
                  hover="#e20880"
                >
                  Alpha dApp
                </Anchor>
              </NavItem>
            </NavItems>
          </NavPrimary>

          <NavTablet align="flex-end" margin="0px" minWidth="auto" flex="1">
            <Anchor
              href="#"
              onClick={(e) => {e.preventDefault(); setShowMenu(!showMenu)}}
              title="Toggle Menu"
              bg="transparent"
              hoverBG="transparent"
              margin="10px -15px 10px 0px"
              padding="8px 15px"
              radius="4px"
            >
              {!showMenu &&
                <CgMenuHotdog size={24} color="#fff"/>
              }

              {showMenu &&
                <CgClose size={24} color="#fff"/>
              }

            </Anchor>
          </NavTablet>

        </Nav>
      </Section>
    </Header>
  );
}

// CSS Styles
const Header = styled.header`
  left: 0;
  right: 0;
  width: 100%;
  height: 65px;
  top: 0;
  z-index: 999;
  justify-content: center;

  display: flex;
  align-self: stretch;
  align-items: stretch;
  justify-content: center;

  position: ${props => (props.forceDisplay ? "fixed" : "absolute") || "absolute"};
`

const Logo = styled.img`
  height: 35px;
  filter: brightness(0) invert(1);
`

const Nav = styled(Item)`

`

const NavTablet = styled(Item)`
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }
`

const NavItems = styled.ul`
  display: flex;
  align-items: stretch;
  flex: 1;
  column-gap: 20px;
  padding: 0px;
  margin: 0px;
  list-style: none;
  position: initial;
`

const NavItem = styled.li`
  display: flex;
  flex: ${props => props.flex || '1'};
  align-self: ${props => props.self || 'auto'};
  align-items: ${props => props.align || 'center'};
  justify-content: ${props => props.justify || 'center'};

  position: relative;
`

const HeadAnchor = styled(Anchor)`
  display: flex;
  align-self: stretch;
  align-items: center;
  flex: 1;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    opacity: 0;
    background: ${props => props.hoverBG || 'transparent'};
  }

  &:hover:before{
    opacity: 1;
  }

  &:after {
    display: none;
  }
`

const NavSubItems = styled(NavItems)`
  display: none;
  flex-direction: column;
  position: absolute;
  top: 60px;
  background: #00000040;
`

const NavSub = styled(NavItems)`
  flex: initial;

  &:hover ${NavSubItems} {
    display: block;
  }
`

const NavSubItem = styled(NavItem)`
  & ${HeadAnchor} {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;

    &:before {
      top: 0;
      bottom: 0;
      height: auto;
    }

    &:hover:before {
      opacity: 0.25;
    }
  }
`

const NavPrimary = styled(Nav)`
  @media (max-width: 768px) {
    display: ${props => (props.forceDisplay ? "flex" : "none") || "none"};

    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    background: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(20px);
    padding: 20px;
    margin: 0px;

    ${NavItems} {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    ${NavItem} {
      padding: 5px 10px 5px 10px;
      margin: 5px 0px;
      border-radius: 4px;

      & ${HeadAnchor} {
        padding: 10px;

        &:before {
          top: 0;
          bottom: 0;
          height: auto;
        }

        &:hover:before {
          opacity: 0.25;
        }
      }
    }

    ${NavSubItems} {
      border-radius: 4px;
      display: block;
      position: relative;
      top: auto;
      padding: 0px;
      margin: 0px;
      opacity: 0.8;
      background: transparent;
    }

    ${NavSubItem} {
      display: block;
      position: relative;
      top: 0;
      margin: 5px 0px;

      & ${HeadAnchor} {
        padding: 0px 10px;

        &:before {
          top: 0;
          bottom: 0;
          height: auto;
        }

        &:hover:before {
          opacity: 0.25;
        }
      }
    }
  }
`

// Export Default
export default Head;
