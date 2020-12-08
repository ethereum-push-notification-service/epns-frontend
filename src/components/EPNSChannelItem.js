import React from "react";

import styled, { css } from 'styled-components';
import {Item, Image, Span, Anchor} from 'components/SharedStyling';

import Skeleton from '@yisheng90/react-loading';
import Tilt from 'react-tilt'

import config from 'config/config';
import EPNSHelperAPI from 'helpers/EPNSHelperAPI';

// Create Header
function EPNSChannelItem({ channelID, loaded, epnsContract }) {

  const [address, setAddress] = React.useState(null);
  const [meta, setMeta] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const enableLogs = 0;

    if (loaded && channelID && epnsContract) {
      // Get channels
      // Get channel meta
      let channelAddress;

      EPNSHelperAPI.getChannelAddressFromID(channelID, epnsContract).then(async (channelAddress) => {
        if (enableLogs) console.log("getChannelMetaAsync() [Channel id: %d] --> [Address: %o]", channelID, channelAddress);

        EPNSHelperAPI.getChannelJsonFromChannelAddress(channelAddress, epnsContract).then(channelMeta => {
          setAddress(channelAddress);
          setMeta(channelMeta);
          setLoading(false);
        })
        .catch(err => {
          if (enableLogs) console.log("!!!Error, getChannelMetaAsync() inside ChannelJSON --> %o", err);
          throw err;
        })
      })
      .catch(err => {
        console.log("!!!Error, getChannelMetaAsync() --> %o", err);
        throw err;
      })
    }
  }, [channelID, epnsContract]);

  // RENDER
  return (
    <ChannelItem justify="stretch" align="stretch" margin="10px">
      <Anchor
        href="https://app.epns.io"
        self="stretch"
        align="stretch"
        width="80%"
        margin="0 auto"
        direction="column"
        target="_blank"
        radius="12px"
        title={loading ? "Loading Channel..." : meta.info}
      >
        <ChannelLogo>
          <ChannelLogoOuter>
            <ChannelLogoInner>
              {loading &&
                <Skeleton color="#eee" width={'100%'} height={'100%'} />
              }
              {!loading &&
                <Image src={`${meta.icon}`} />
              }
            </ChannelLogoInner>
          </ChannelLogoOuter>
        </ChannelLogo>

        <Item self="stretch" align="center" margin="10px 0px 0px 0px">
          {loading &&
            <Skeleton color="#eee" width={'80%'} height={24} />
          }
          {!loading &&
            <Span textAlign="center">{meta.name}</Span>
          }
        </Item>
      </Anchor>
    </ChannelItem>
  );
}

// css style
// box-shadow: rgb(35 29 46 / 0.2) 0px 10px 40px;
const ChannelItem = styled(Item)`
  min-width: 160px;
  max-width: 256px;
`

const SkeletonWrapper = styled.div`
  overflow: hidden;
  width: ${props => props.atW + '%' || '100%'};
  height: ${props => props.atH}px;
  border-radius: ${props => props.borderRadius || 10}px;
  margin-bottom: ${props => props.marginBottom || 5}px;
  margin-right: ${props => props.marginRight || 0}px;
`

const ChannelLogo = styled.div`
  flex: none;
  margin: 5px 30px 10px 30px;
  overflow: hidden;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
`

const ChannelLogoOuter = styled.div`
  padding-top: 100%;
  position: relative;
`

const ChannelLogoInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ChannelLogoImg = styled.img`
  object-fit: contain;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
`



// Export Default
export default EPNSChannelItem;
