import React from "react";

import styled, { css } from 'styled-components';
import {Section, Content, Item, ItemH, Image, Span, Anchor} from 'components/SharedStyling';

import { FiTwitter } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

// Create Header
function TeamMember( {img, type, name, title, twitter, linkedin, email }) {
  const [openFlag, setOpenFlag] = React.useState(false);

  React.useEffect(() => {

  });

  // to create blockies

  return (
    <Item margin="20px 0px" minWidth="240px">
      {(twitter || linkedin || email) &&
        <Converse margin="0px">
          <ConverseInner>
            {twitter && type != 6 &&
              <Anchor
                href={twitter}
                target="_blank"
                title={"Visit Twitter profile of " + name}
                bg="transparent"
                radius="4px"
              >
                <FiTwitter size={12} color="#e20880"/>
              </Anchor>
            }

            {linkedin && type != 6 &&
              <Anchor
                href={linkedin}
                target="_blank"
                title={"Visit LinkedIn profile of " + name}
                bg="transparent"
                radius="4px"
              >
                <FaLinkedinIn size={12} color="#35c5f3"/>
              </Anchor>
            }

            {email && type != 6 &&
              <Anchor
                href={email}
                target="_blank"
                title={"Send email to " + name}
                bg="transparent"
                radius="4px"
              >
                <AiOutlineMail size={12} color="#674c9f"/>
              </Anchor>
            }

            {type == 6 &&
              <Anchor
                href={twitter}
                target="_blank"
                title={"Visit Advisor profile of " + name}
                bg="transparent"
                radius="4px"
              >
                <Span color="#e20880" weight="400">Advisor</Span>
              </Anchor>
            }
          </ConverseInner>
        </Converse>
      }
      <Profile margin="0px">
        <ProfileBG type={type} />
        <ProfileImage src={img} />
      </Profile>
      <Span margin="5px 0px 2px 0px">{name}</Span>
      <Span weight="400">{title}</Span>
    </Item>
  );
}

// css styles
const Converse = styled(ItemH)`
  flex: unset;
  justify-content: center;
  align-items: center;
  column-gap: inherit;
  border: 1px solid #eee;
  border-radius: 20px;
  z-index: 1;

  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid #eeeeee;
    bottom: -10px;
    left: 12px;
    z-index: 1;
  }
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid #fff;
    bottom: -6px;
    left: 14px;
    z-index: 2;
  }
`

const ConverseInner = styled(ItemH)`
  flex: unset;
  justify-content: center;
  align-items: center;
  column-gap: inherit;
  border-radius: 20px;
  overflow: hidden;
`

const Profile = styled(ItemH)`
  max-width: 50%;
  margin: 20px 0px;
`

const ProfileBG = styled.div`
  border-radius: 100%;
  position: absolute;
  width: calc(100% + 12px);
  height: calc(100% + 12px);
  top: -6px;
  right: 0;
  left: -6px;
  bottom: 0;
  z-index: 1;

  ${({ type }) => type == 1 && css`
    background: "#e20880";
  `};

  ${({ type }) => type == 2 && css`
    background: rgb(226,8,128);
    background: linear-gradient(140deg, rgba(226,8,128,1) 0%, rgba(226,8,128,1) 50%, rgba(53,197,243,1) 50%, rgba(53,197,243,1) 100%);
  `};

  ${({ type }) => type == 3 && css`
    background: rgb(226,8,128);
    background: linear-gradient(140deg, rgba(226,8,128,1) 0%, rgba(226,8,128,1) 50%, rgba(103,76,159,1) 50%, rgba(103,76,159,1) 100%);
  `};

  ${({ type }) => type == 4 && css`
    background: #35c5f3;
  `};

  ${({ type }) => type == 5 && css`
    background: #674c9f;
  `};

  ${({ type }) => type == 6 && css`
    background: rgb(226,8,128);
    background: linear-gradient(140deg, rgba(226,8,128,1) 0%, rgba(226,8,128,1) 33%, rgba(53,197,243,1) 33%, rgba(53,197,243,1) 66%, rgba(103,76,159,1) 66%, rgba(103,76,159,1) 100%);
  `};
`

const ProfileImage = styled(Image)`
  border-radius: 100%;
  z-index: 2;
`

// Export Default
export default TeamMember;
