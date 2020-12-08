import React from "react";

import styled, { css } from 'styled-components';
import {ItemH} from 'components/SharedStyling';

import Loader from 'react-loader-spinner';

import config from 'config/config';
import EPNSHelperAPI from 'helpers/EPNSHelperAPI';

import EPNSChannelItem from 'components/EPNSChannelItem';

// Create
function EPNSChannelItems({ numberOfChannels }) {
  const [epnsInteactable, setEPNSInteractable] = React.useState(null);
  const [channelsLoaded, setChannelsLoaded] = React.useState(false);
  const [channels, setChannels] = React.useState([]);

  React.useEffect(() => {
    if (numberOfChannels) {
      // Create contract first
      let epns;

      if (!epnsInteactable) {
        epns = createEPNSContract();
        setEPNSInteractable(epns);
      }
    }

  }, [numberOfChannels]);

  React.useEffect(() => {
    if (epnsInteactable) {
      // Just assign ids to channels
      EPNSHelperAPI.getTotalNumberOfChannels(epnsInteactable.contract).then(totalChannelsCount => {
        let channelsDummy = [];
        for (let i = totalChannelsCount - 1; i > totalChannelsCount - 1 - numberOfChannels; i--) {
          channelsDummy.push({channelID: i, loaded:true});
        }
        setChannels(channelsDummy);
        setChannelsLoaded(true);
      });
    }
  }, [epnsInteactable]);

  const createEPNSContract = () => {
    // Call Helper function to get interactableContracts
    const epns = EPNSHelperAPI.getInteractableContracts(
      config.web3RopstenNetwork,                                      // Network for which the interactable contract is req
      {                                                               // API Keys
        etherscanAPI: config.etherscanAPI,
        infuraAPI: null, //config.infuraAPI,
        alchemyAPI: config.alchemyAPI
      },
      null,                                                           // Private Key of the Wallet
      config.deployedContract,                                        // The contract address which is going to be used
      config.deployedContractABI                                      // The contract abi which is going to be useds
    );

    return epns;
  }

  // RENDER
  return (
    <ItemH margin="0px 20px" self="stretch" align="stretch" width="100%">
      {!channelsLoaded &&
        <Loader
         type="Oval"
         color="#e20880"
         height={32}
         width={32}
        />
      }

      {channelsLoaded &&
        channels.map(function(item, id){
          return (
            <EPNSChannelItem
              channelID={item.channelID}
              loaded={item.loaded}
              key={id}
              epnsContract={epnsInteactable.contract}
            />
          );
        })
      }
    </ItemH>
  );
}

// css style


// Export Default
export default EPNSChannelItems;
