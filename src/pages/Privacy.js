import React from "react";
import ReactGA from 'react-ga';

import styled from 'styled-components';
import {Section, SectionHero, Content, Item, WaveOuter, WaveInner, H1, H2, H3, Image, P, Para, UL, LI, A, B, Span, Anchor, Button} from 'components/SharedStyling';

import Wave from 'react-wavify';

// Create Header
function Privacy() {
  ReactGA.pageview('/privacy');

  React.useEffect(() => {

  });

  // RENDER
  return (
    <>
      {/* HERO SECTION */}
      <SectionHero padding="50px 0px 80px 0px">
        <Content className="contentBox">
          <Item margin="0px 20px">
            <H1>Privacy Policy</H1>
            <Span color="#fff" margin="-20px 0 0 0" size="1rem">Defines how EPNS collects, handles and processes data.</Span>
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
                <Span bg="#e20880" color="#fff" weight="600" padding="0px 8px">Privacy</Span><Span weight="200"> Policy</Span>
              </H2>
              <H3 maxWidth="400px">Last Updated: 15th October 2020</H3>
            </Item>

            {/* SUMMARY */}
            <Item align="stretch" align="flex-start" margin="-20px 0px 20px 0px">
              <Para weight="400" spacing="0.2em" color="#000" textTransform="uppercase" size="1.2em">
                SUMMARY
              </Para>
              <Para margin="-10px 0px 0px">
                At EPNS, we know you care about your privacy and how your personal information is used and shared. This Privacy Policy is designed to help you better understand how we treat your personal information.
              </Para>

              <Para margin="20px 0px 0px 0px">
                <B>You should understand that by using or accessing our Services in any manner, you are acknowledging that you understand and accept the practices and policies outlined in this Privacy Policy, and you are agreeing to how we may collect, use, and share your information as described in this Privacy Policy.</B>
              </Para>

              <Para>
                You should also remember that your use of our Services is at all times subject to our <A href="./terms" t>Terms of Service</A>, which incorporates this Privacy Policy. Any capitalized terms we use in this Privacy Policy without defining them have the definitions given to them in our Terms of Service.
              </Para>


              {/* What this Privacy Policy covers */}
              <Para weight="400" spacing="0.2em" color="#000" textTransform="uppercase" size="1.2em">
                What this Privacy Policy covers
              </Para>
              <Para margin="-10px 0px 0px 0px">
                This Privacy Policy covers our treatment of personally identifiable information (“Personal Information”) that we gather when you are accessing or using our Services, but not to the practices of companies we don’t own or control, or people that we don’t manage.
              </Para>

              <Para margin="20px 0px 0px 0px">
                We understand that users of our Services value their privacy, and one of our core values is to minimize our collection of Personal Information. There are instances where we do collect Personal Information, however, and this Privacy Policy explains those instances.
              </Para>

              <Para margin="20px 0px 0px 0px">
                As we’ll describe further, we may gather different kinds of Personal Information from our users, and we use this Personal Information internally in connection with our Services, including to personalize, provide, and improve our services, to fulfill your requests for certain products and services, and to analyze how you use the Services. This Privacy Policy will also cover how we may share some Personal Information with third parties in specific circumstances.
              </Para>

              <Para margin="20px 0px 0px 0px">
                If you are under the age of majority where you reside, you may use our Services only with the consent of or under the supervision of your parent or legal guardian. Consistent with the requirements of the Childrens Online Privacy Protection Act (COPPA), if we learn that we have received any Personal Information directly from a child under age 13 without first receiving their parents verified consent, we will use that Personal Information only to respond directly to that child (or their parent or legal guardian) to inform them that they cannot use our Services and we will delete that Personal Information.
              </Para>

              <Para margin="20px 0px 20px 0px">
                We understand that users of our Services value their privacy, and one of our core values is to minimize our collection of Personal Information. There are instances where we do collect Personal Information, however, and this Privacy Policy explains those instances.
              </Para>


              {/* Changes to this Privacy Policy */}
              <Para weight="400" spacing="0.2em" color="#000" textTransform="uppercase" size="1.2em">
                Changes to this Privacy Policy
              </Para>
              <Para margin="-10px 0px 0px">
                We are constantly trying to improve our Services and always want to adopt best practices with our privacy practices, so we may make changes to our Privacy Policy from time to time. When these are significant, we will alert you to changes and you will be required to agree to our new Privacy Policy in order to keep using your Services.
              </Para>

              <Para margin="20px 0px 20px 0px">
                If you continue to use our Services after changes to the Privacy Policy have been posted, you understand that you are agreeing to all of those changes. Use of Personal Information we collect is subject to the Privacy Policy in effect at the time such Personal Information is used.
              </Para>


              {/* Information EPNS Collects */}
              <Para weight="400" spacing="0.2em" color="#000" textTransform="uppercase" size="1.2em">
                Information EPNS Collects
              </Para>
              <Para margin="-10px 0px 0px">
                We collect different kinds of Personal Information and describe each category below.
              </Para>

              <Para margin="20px 0px 0px 0px">
                <B>Information You Provide to Us:</B> We receive and store Personal Information you knowingly provide to us. For example, this includes information you provide when you import your Wallet and use it with our Services, such as information regarding your transactional history on the Ethereum network, or information you provide each time you make a transfer of Virtual Currency. It also includes (i) contact information you elect to provide to us such as your email address, (ii) feedback and correspondence, such as information you provide when you report a problem with our Services or otherwise correspond with us, and (iii) marketing information, such as your preferences for receiving marketing communications like our newsletter and details about how you engage with them.
              </Para>

              <Para margin="20px 0px 0px 0px">
                However, other than the information required to associate your Wallet with our Services, you are not required to provide any other Personal Information to use the core features of our Services. But understand that you may be required to provide additional Personal Information to access certain features or offerings.
              </Para>

              <Para margin="20px 0px 0px 0px">
                <B>You should also understand that, unless you use certain privacy preserving tools, your entire transactional history conducted from your Wallet is publicly available on the Ethereum network by default to us and any other network participants.</B>
              </Para>

              <Para margin="20px 0px 0px 0px">
                <B>Information Collected from Other Sources:</B> We may obtain information from other sources, such as third- party applications you use our Services with. We may combine this with information previously collected when using our Services. In these cases, our Privacy Policy governs the handling of any combined Personal Information.
              </Para>

              <Para margin="20px 0px 0px 0px">
                <B>Information Collected Automatically:</B> Whenever you interact with certain parts of our Services such as our landing page or blog, we automatically receive and record information on our server logs from your browser or device, which may include your IP address, geolocation data, device identification, “cookie” information, the type of browser and/or device you’re using to access our Services, and the page or feature you requested.
              </Para>

              <Para margin="20px 0px 0px 0px">
                We typically collect this information through a variety of tracking technologies, including cookies, embedded scripts, web beacons, file information and similar technology (collectively, “tracking technologies”). “Cookies” are identifiers we transfer to your browser or device that allow us to recognize your browser or device and tell us how and when pages and features in our Site are visited and by how many people. You may be able to change the preferences on your browser or device to prevent or limit your device’s acceptance of cookies, but this may prevent you from taking advantage of some of our features.
              </Para>

              <Para margin="20px 0px 0px 0px">
                We may use this data to customize content for you that we think you might like, based on your usage patterns. We may also use it to improve the Services - for example, this data can tell us what topics or features are most interesting to potential users of our Services, and we can use that knowledge to make the Services interesting to as many users as possible. For more about how we use Cookies and other tracking technologies, see our Cookies Policy.
              </Para>

              <Para margin="20px 0px 0px 0px">
                <B>We do not automatically collect Personal Information when you conduct transactions on the Ethereum network using our Services, and we do not use any automatic tracking technologies in these parts of our Services unless you explicitly agree.</B>
              </Para>

              <Para margin="20px 0px 20px 0px">
                We understand that users of our Services value their privacy, and one of our core values is to minimize our collection of Personal Information. There are instances where we do collect Personal Information, however, and this Privacy Policy explains those instances.
              </Para>


              {/* 5. Disclaimers and Associated Risks */}
              <Para weight="400" spacing="0.2em" color="#000" textTransform="uppercase" size="1.2em">
                5. Disclaimers and Associated Risks
              </Para>

                {/* 5.1 Risk of Cryptographic Systems */}
                <Para weight="400" spacing="0.2em" color="#000" margin="0px 0px 20px 20px" textTransform="uppercase" size="1.1em">
                  5.1 Risk of Cryptographic Systems
                </Para>
                <Para margin="-10px 0px 0px 20px">
                  By utilizing the Services or interacting with the Content or platform in any way, you represent that you understand the inherent risks associated with cryptographic systems; and warrant that you have an understanding of the usage and intricacies of native cryptographic tokens such as Ether (ETH) and Bitcoin (BTC), smart contract based tokens such as those that follow an Ethereum token standard (e.g. <A href="https://github.com/ethereum/EIPs/issues/20" tarrget="_blank">github.com/ethereum/EIPs/issues/20</A>), and blockchain-based software systems.
                </Para>

                {/* 5.2 Risk of Regulatory Actions */}
                <Para weight="400" spacing="0.2em" color="#000" margin="20px 0px 20px 20px" textTransform="uppercase" size="1.1em">
                  5.2 Risk of Regulatory Actions
                </Para>
                <Para margin="-10px 0px 0px 20px">
                  EPNS and any supported cryptographic token and blockchain could be impacted by one or more regulatory inquiries or regulatory action, which could impede or limit the ability of EPNS to continue to develop, or which could impede or limit your ability to access or use the Services or the underlying blockchain network.
                </Para>

                {/* 5.3 Warranty Disclaimer */}
                <Para weight="400" spacing="0.2em" color="#000" margin="20px 0px 20px 20px" textTransform="uppercase" size="1.1em">
                  5.3 Warranty Disclaimer
                </Para>

                <Para margin="-10px 0px 0px 20px">
                  You expressly understand and agree that your use of the Services is at your sole risk. The Services (including the Site, the App and the Content) are provided on an “as is” and “as available” basis, without warranties of any kind, either express or implied, including, without limitation, implied warranties of merchantability, fitness for a particular purpose or non-infringement. You acknowledge that EPNS has no control over, and no duty to take any action regarding: which users gain access to or use the Services; what effects the Content may have on you; how you may interpret or use the Content; or what actions you may take as a result of having been exposed to the Content. You release EPNS from all liability for you having acquired or not acquired Content through the Services. EPNS makes no representations concerning any Content contained in or accessed through the Services, and EPNS will not be responsible or liable for the accuracy, copyright compliance, legality or decency of material contained in or accessed through the Services.
                </Para>

                <Para margin="20px 0px 0px 20px">
                  We do not represent or warrant that access to the Services will be continuous, uninterrupted, timely or secure. You acknowledge and accept that the Services (a) may contain bugs, errors and defects, (b) may behave improperly or be subject to periods of downtime and unavailability, (c) may result in total or partial loss or corruption of data and (d) may be modified at any time, including through the release of subsequent versions, all with or without notice to you.
                </Para>

                <Para margin="20px 0px 0px 20px">
                  You acknowledge that EPNS is not responsible for transferring, safeguarding, or maintaining your private keys or any digital currency associated therewith. If you lose, mishandle or have stolen associated digital currency private keys, you acknowledge that you may not be able to recover associated digital currency, and that EPNS is not responsible for such loss. You acknowledge that EPNS is not responsible for any loss, damage or liability arising from your failure to comply with the terms hereunder.
                </Para>

                <Para margin="20px 0px 0px 20px">
                  <B>THE SERVICES AND CONTENT ARE PROVIDED BY EPNS (AND ITS LICENSORS AND SUPPLIERS) ON AN “AS-IS” BASIS, WITHOUT WARRANTIES OR ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON- INFRINGEMENT, THAT USE OF THE SERVICES WILL BE UNINTERRUPTED OR ERROR- FREE, OR THE SECURITY ASSOCIATED USE OF, OR TRANSMISSION OF INFORMATION THROUGH, THE SERVICES. SOME JURISDICTIONS DO NOT ALLOW LIMITATIONS ON HOW LONG AN IMPLIED WARRANTY LASTS, SO THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU.</B>
                </Para>

                {/* 5.4 Risk of Exploits and Weaknesses in Cryptography Field */}
                <Para weight="400" spacing="0.2em" color="#000" margin="20px 0px 20px 20px" textTransform="uppercase" size="1.1em">
                  5.4 Risk of Exploits and Weaknesses in Cryptography Field
                </Para>
                <Para margin="-10px 0px 0px 20px">
                  You acknowledge and understand that Cryptography is a progressing field. Advances in code cracking or technical advances such as the development of quantum computers may present risks to cryptocurrencies and Services of Content, which could result in the theft or loss of your cryptographic tokens or property. To the extent possible, EPNS intends to update the protocol underlying Services to account for any advances in cryptography and to incorporate additional security measures, but does not guarantee or otherwise represent full security of the system. By using the Services or accessing Content, you acknowledge these inherent risks.
                </Para>

                {/* 5.5 Cryptocurrency and Volatility */}
                <Para weight="400" spacing="0.2em" color="#000" margin="20px 0px 20px 20px" textTransform="uppercase" size="1.1em">
                  5.5 Cryptocurrency and Volatility
                </Para>
                <Para margin="-10px 0px 0px 20px">
                  You understand that Ethereum and other blockchain technologies and associated cryptographic tokens are highly volatile due to many factors including but not limited to adoption, speculation, technology and security risks. You also acknowledge that the cost of transacting on such technologies is variable and may increase at any time causing impact to any activities taking place on the blockchain network. You acknowledge these risks and agree that EPNS cannot be held liable for such fluctuations or increased costs.
                </Para>

                {/* 5.6 Application Security */}
                <Para weight="400" spacing="0.2em" color="#000" margin="20px 0px 20px 20px" textTransform="uppercase" size="1.1em">
                  5.6 Application Security
                </Para>
                <Para margin="-10px 0px 0px 20px">
                  You further acknowledge that blockchain applications are code subject to flaws and acknowledge that you are solely responsible for evaluating any code provided by the Services or Content and the trustworthiness of any third-party websites, products, smart-contracts, or Content you access or use through the Services. You further expressly acknowledge and represent that blockchain applications can be written maliciously or negligently, that EPNS cannot be held liable for your interaction with such applications and that such applications may cause the loss of property or even identity. This warning and others later provided by EPNS in no way evidence or represent an on-going duty to alert you to all of the potential risks of utilizing the Services or Content.
                </Para>

                {/* 5.7 Affiliated Service / Third Party Service */}
                <Para weight="400" spacing="0.2em" color="#000" margin="20px 0px 20px 20px" textTransform="uppercase" size="1.1em">
                  5.7 Affiliated Service / Third Party Service
                </Para>
                <Para margin="-10px 0px 0px 20px">
                  Software and services provided by our affiliates (“Affiliated Services”) and third party software and services (“Third Party Services” and, together with Affiliated Services, “Additional Services”) included in, integrated into, or made accessible through, the Services, including through the Snap System, are made available to you under the terms of use of such service providers (collectively, “Service Providers”) (for example, Infura, Google Analytics, etc). Please review the applicable terms of use on their websites prior to using or accessing their services.
                </Para>

                <Para margin="20px 0px 0px 20px">
                  Service Providers may charge you a fee for use of, or access to, such Additional Services. You acknowledge that EPNS may earn fees from Service Providers in connection with your use of such Additional Services.
                </Para>

                <Para margin="20px 0px 0px 20px">
                  You agree that EPNS and its affiliates are not in any way associated with the owner or operator of any Third Party Services or responsible or liable for the software and services offered by them or for anything in connection with such Third Party Services. EPNS does not endorse or approve and makes no warranties, representations or undertakings relating to the software, service or content of any Third Party Services.
                </Para>

                <Para margin="20px 0px 0px 20px">
                  In addition, EPNS disclaims liability for any loss, damage and any other consequence resulting directly or indirectly from or relating to your use or access of Third Party Services or any information that you may provide or any transaction conducted with or through the Third Party Services or the failure of any information, software or services posted or offered by such Service Providers or any error, omission or misrepresentation by such Service Providers or any computer virus arising from or system failure associated with the Third Party Services.
                </Para>

                <Para margin="20px 0px 20px 20px">
                  In the event of any inconsistency between the terms herein and the terms of the Additional Services, the terms herein will prevail.
                </Para>


              {/* 6. Intellectual Property */}
              <Para weight="400" spacing="0.2em" color="#000" textTransform="uppercase" size="1.2em">
                6. Intellectual Property
              </Para>

                {/* 6.1 Ownership and Intellectual Property */}
                <Para weight="400" spacing="0.2em" color="#000" margin="0px 0px 20px 20px" textTransform="uppercase" size="1.1em">
                  6.1 Ownership and Intellectual Property
                </Para>
                <Para margin="-10px 0px 0px 20px">
                  All title, ownership and intellectual property rights in and to the Services are owned by EPNS or its licensors. You acknowledge and agree that the Services contains proprietary and confidential information that is protected by applicable intellectual property and other laws. Except as expressly authorized by EPNS, you agree not to copy, modify, rent, lease, loan, sell, distribute, perform, display or create derivative works based on the Site, the App or the Services, in whole or in part.
                </Para>

                {/* 6.2 Limited and Revocable License */}
                <Para weight="400" spacing="0.2em" color="#000" margin="20px 0px 20px 20px" textTransform="uppercase" size="1.1em">
                  6.2 Limited and Revocable License
                </Para>
                <Para margin="-10px 0px 0px 20px">
                  We grant you limited, non-exclusive, revocable permission to make use of the Site, the App and the Services (collectively, “Access”). This Access shall remain in effect until and unless terminated by you or us. You promise and agree that you will not redistribute or transfer the Services.
                </Para>

                <Para margin="20px 0px 0px 20px">
                  The EPNS software application, including without limitation the Site, the App and the Services, are not sold or transferred to you, and EPNS and its licensors retain ownership of all copies of the software applications even after installation on your personal computers, mobile handsets, tablets, wearable devices, speakers and/or other devices (“Devices”).
                </Para>

                <Para margin="20px 0px 0px 20px">
                  All EPNS trademarks, service marks, trade names, logos, domain names, and any other features of the EPNS brand (“EPNS Brand Features”) are the sole property of EPNS or its licensors. The Terms do not grant you any rights to use any EPNS Brand Features whether for commercial or non-commercial use.
                </Para>

                <Para margin="20px 0px 0px 20px">
                  You agree to abide by our user guidelines and not to use the Services or any part thereof in any manner not expressly permitted by the Terms. Except for the rights expressly granted to you in the Terms, EPNS grants no right, title, or interest to you in the Site, the App or the Services.
                </Para>

                <Para margin="20px 0px 0px 20px">
                  Third party software (for example, open source software libraries) included in the Services are made available to you under the relevant third party software library’s license terms.
                </Para>

                <Para margin="20px 0px 20px 20px">
                  Notwithstanding anything herein to the contrary, nothing in the Terms entitles you to copy, modify, fork, merge, combine with another program or create a derivative work of the Services, including without limitation the Site and the App.
                </Para>

              {/* 7. Links */}
              <Para weight="400" spacing="0.2em" color="#000" margin="20px 0px 20px 0px" textTransform="uppercase" size="1.1em">
                7. Links
              </Para>
              <Para margin="-10px 0px 20px 0px">
                The Services provide, or third parties may provide, links to other World Wide Web or accessible sites, applications or resources. Because EPNS has no control over such sites, applications and resources, you acknowledge and agree that EPNS is not responsible for the availability of such external sites, applications or resources, and does not endorse and is not responsible or liable for any content, advertising, products or other materials on or available from such sites or resources. You further acknowledge and agree that EPNS shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such site or resource.
              </Para>


              {/* 8. Indemnity */}
              <Para weight="400" spacing="0.2em" color="#000" margin="20px 0px 20px 0px" textTransform="uppercase" size="1.1em">
                8. Indemnity
              </Para>
              <Para margin="-10px 0px 20px 0px">
                You agree to release and to indemnify, defend and hold harmless EPNS and its parents, subsidiaries, affiliates and agencies, as well as the officers, directors, employees, shareholders and representatives of any of the foregoing entities, from and against any and all losses, liabilities, expenses, damages, costs (including attorneys’ fees and court costs) claims or actions of any kind whatsoever arising or resulting from your use of the Services, your violation of these Terms, and any of your acts or omissions that implicate publicity rights, defamation or invasion of privacy. EPNS reserves the right, at its own expense, to assume exclusive defense and control of any matter otherwise subject to indemnification by you and, in such case, you agree to cooperate with EPNS in the defense of such matter.
              </Para>

              {/* 9. Limitation on Liability */}
              <Para weight="400" spacing="0.2em" color="#000" margin="20px 0px 20px 0px" textTransform="uppercase" size="1.1em">
                9. Limitation on Liability
              </Para>
              <Para margin="-10px 0px 0px 0px">
                <B>YOU ACKNOWLEDGE AND AGREE THAT YOU ASSUME FULL RESPONSIBILITY FOR YOUR USE OF THE SITE, THE APP AND THE SERVICES. YOU ACKNOWLEDGE AND AGREE THAT ANY INFORMATION YOU SEND OR RECEIVE DURING YOUR USE OF THE SITE, THE APP AND THE SERVICES MAY NOT BE SECURE AND MAY BE INTERCEPTED OR LATER ACQUIRED BY UNAUTHORIZED PARTIES. YOU ACKNOWLEDGE AND AGREE THAT YOUR USE OF THE SITE, THE APP AND THE SERVICES IS AT YOUR OWN RISK. RECOGNIZING SUCH, YOU UNDERSTAND AND AGREE THAT, TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, NEITHER EPNS NOR ITS SUPPLIERS OR LICENSORS WILL BE LIABLE TO YOU FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, EXEMPLARY OR OTHER DAMAGES OF ANY KIND, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA OR OTHER TANGIBLE OR INTANGIBLE LOSSES OR ANY OTHER DAMAGES BASED ON CONTRACT, TORT, STRICT LIABILITY OR ANY OTHER THEORY (EVEN IF EPNS HAD BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES), RESULTING FROM THE SITE, THE APP OR SERVICES; THE USE OR THE INABILITY TO USE THE SITE, THE APP OR THE SERVICES; UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR TRANSMISSIONS OR DATA; STATEMENTS OR CONDUCT OF ANY THIRD PARTY ON THE SITE, THE APP OR THE SERVICES; ANY ACTIONS WE TAKE OR FAIL TO TAKE AS A RESULT OF COMMUNICATIONS YOU SEND TO US; HUMAN ERRORS; TECHNICAL MALFUNCTIONS; FAILURES, INCLUDING PUBLIC UTILITY OR TELEPHONE OUTAGES; OMISSIONS, INTERRUPTIONS, LATENCY, DELETIONS OR DEFECTS OF ANY DEVICE OR NETWORK, PROVIDERS, OR SOFTWARE (INCLUDING, BUT NOT LIMITED TO, THOSE THAT DO NOT PERMIT PARTICIPATION IN THE SERVICES); ANY INJURY OR DAMAGE TO COMPUTER EQUIPMENT; INABILITY TO FULLY ACCESS THE SITE, THE APP OR THE SERVICES OR ANY OTHER WEBSITE; THEFT, TAMPERING, DESTRUCTION, OR UNAUTHORIZED ACCESS TO, IMAGES OR OTHER CONTENT OF ANY KIND; DATA THAT IS PROCESSED LATE OR INCORRECTLY OR IS INCOMPLETE OR LOST; TYPOGRAPHICAL, PRINTING OR OTHER ERRORS, OR ANY COMBINATION THEREOF; OR ANY OTHER MATTER RELATING TO THE SITE, THE APP OR ANY OTHER ASPECT OF THE SERVICES.</B>
              </Para>

              <Para margin="20px 0px 20px 0px">
                <B>SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES OR THE LIMITATION OR EXCLUSION OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES. ACCORDINGLY, SOME OF THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU.</B>
              </Para>


              {/* 10. No Other Beneficary (Third Party) */}
              <Para weight="400" spacing="0.2em" color="#000" margin="20px 0px 20px 0px" textTransform="uppercase" size="1.1em">
                10. No Other Beneficary (Third Party)
              </Para>
              <Para margin="-10px 0px 20px 0px">
                You agree that, except as otherwise expressly provided in these Terms, there shall be no third party beneficiaries to the Terms.
              </Para>


              {/* 11. Termination and Suspension */}
              <Para weight="400" spacing="0.2em" color="#000" margin="20px 0px 20px 0px" textTransform="uppercase" size="1.1em">
                11. Termination and Suspension
              </Para>
              <Para margin="-10px 0px 0px 0px">
                EPNS may terminate or suspend all or part of the Services and your EPNS access immediately, without prior notice or liability, if you breach any of the terms or conditions of the Terms. Upon termination of your access, your right to use the Services will immediately cease.
              </Para>

              <Para margin="20px 0px 20px 0px">
                The following provisions of the Terms survive any termination of these Terms: WARRANTY DISCLAIMERS; OWNERSHIP AND INTELLECTUAL PROPERTY; LINKS; INDEMNITY; LIMITATION ON LIABILITY; NO OTHER BENEFICARY (THIRD PARTY); TERMINATION; GENERAL INFORMATION (Schedule A); BINDING ARBITRATION AND CLASS ACTION WAIVER (Schedule B);
              </Para>


              {/* 12. Termination and Suspension */}
              <Para weight="400" spacing="0.2em" color="#000" margin="20px 0px 20px 0px" textTransform="uppercase" size="1.1em">
                12. Notice and Procedure For Making Claims
              </Para>
              <Para margin="-10px 0px 0px 0px">
                If you believe that your copyright or the copyright of a person on whose behalf you are authorized to act has been infringed, please provide EPNS’s Copyright Agent a written Notice containing the following information:
              </Para>

              <Para margin="10px 0px 20px 0px">
                <UL>
                  <LI>
                    <B>An electronic (or) physical signature of the person authorized to act on behalf of the owner (or) the owner themselves of the copyright or other intellectual property interest.</B>
                  </LI>
                  <LI>
                    <B>A detailed description of the copyrighted work in question or the intellectual property that you claim has been infringed.</B>
                  </LI>
                  <LI>
                    <B>A detailed description of where the material that you claim is infringing and where it is located on the Services.</B>
                  </LI>
                  <LI>
                    <B>Your address, Phone Number, and Email.</B>
                  </LI>
                  <LI>
                    <B>A statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law.</B>
                  </LI>
                  <LI>
                    <B>A statement by you, made under penalty of perjury, that the above information in your Notice is accurate and that you are the copyright or intellectual property owner or authorized to act on the copyright or intellectual property owner’s behalf.</B>
                  </LI>
                </UL>
              </Para>

              <Para margin="0px 0px 20px 0px">
                The following information should be sent to: <A href="mailto://support@epns.io">support@epns.io</A>
              </Para>
            </Item>


            {/* Schedule A */}
            <Item align="stretch" align="flex-start" margin="0px 0px 20px 0px">
              <H2 textTransform="uppercase" spacing="0.1em">
                <Span bg="#000" color="#fff" weight="600" padding="0px 8px">Schedule</Span><Span weight="600" color="#fff" bg="#e20880" padding="0px 8px">A</Span>
              </H2>
            </Item>

            <Item align="stretch" align="flex-start" margin="-30px 0px 20px 0px">
              {/* A. General Information */}
              <Para weight="400" spacing="0.2em" color="#000" textTransform="uppercase" size="1.2em">
                GENERAL INFORMATION
              </Para>

              {/* 1. Entire Agreement */}
              <Para weight="400" spacing="0.2em" color="#000" margin="0px 0px 20px 0px" textTransform="uppercase" size="1.1em">
                1. Entire Agreement
              </Para>
              <Para margin="-10px 0px 0px 20px">
                These Terms (and any additional terms, rules and conditions of participation that EPNS may post on the Services) constitute the entire agreement between you and EPNS with respect to the Services and supersedes any prior agreements, oral or written, between you and EPNS. In the event of a conflict between these Terms and the additional terms, rules and conditions of participation, the latter will prevail over the Terms to the extent of the conflict.These Terms (and any additional terms, rules and conditions of participation that EPNS may post on the Services) constitute the entire agreement between you and EPNS with respect to the Services and supersedes any prior agreements, oral or written, between you and EPNS. In the event of a conflict between these Terms and the additional terms, rules and conditions of participation, the latter will prevail over the Terms to the extent of the conflict.
              </Para>

              {/* 2. Waiver and Severability */}
              <Para weight="400" spacing="0.2em" color="#000" margin="20px 0px 20px 0px" textTransform="uppercase" size="1.1em">
                2. Waiver and Severability
              </Para>
              <Para margin="-10px 0px 0px 20px">
                The failure of EPNS to exercise or enforce any right or provision of the Terms shall not constitute a waiver of such right or provision. If any provision of the Terms is found by an arbitrator or court of competent jurisdiction to be invalid, the parties nevertheless agree that the arbitrator or court should endeavor to give effect to the parties’ intentions as reflected in the provision, and the other provisions of the Terms remain in full force and effect.
              </Para>

              {/* 3. Statute of Limitations */}
              <Para weight="400" spacing="0.2em" color="#000" margin="20px 0px 20px 0px" textTransform="uppercase" size="1.1em">
                3. Statute of Limitations
              </Para>
              <Para margin="-10px 0px 0px 20px">
                You agree that regardless of any statute or law to the contrary, any claim or cause of action arising out of or related to the use of the Services or the Terms must be filed within one (1) year after such claim or cause of action arose or be forever barred.
              </Para>

              {/* 4. Miscellaneous */}
              <Para weight="400" spacing="0.2em" color="#000" margin="20px 0px 20px 0px" textTransform="uppercase" size="1.1em">
                4. Miscellaneous
              </Para>
              <Para margin="-10px 0px 0px 20px">
                The section subject in the Terms are only for your convenience and have no legal or contractual effect.
              </Para>
            </Item>


            {/* Schedule B */}
            <Item align="stretch" align="flex-start" margin="20px 0px 20px 0px">
              <H2 textTransform="uppercase" spacing="0.1em">
                <Span bg="#000" color="#fff" weight="600" padding="0px 8px">Schedule</Span><Span weight="600" color="#fff" bg="#e20880" padding="0px 8px">B</Span>
              </H2>
            </Item>

            <Item align="stretch" align="flex-start" margin="-30px 0px 20px 0px">
              {/* A. General Information */}
              <Para weight="400" spacing="0.2em" color="#000" textTransform="uppercase" size="1.2em">
                Binding Arbitration and Class Action Waiver
              </Para>

              <Para color="#000" margin="-10px 0px 20px 0px" textTransform="uppercase">
                <B>PLEASE READ THIS SECTION CAREFULLY – IT MAY SIGNIFICANTLY AFFECT YOUR LEGAL RIGHTS, INCLUDING YOUR RIGHT TO FILE A LAWSUIT IN COURT</B>
              </Para>

              {/* 1. Initial Dispute Resolution */}
              <Para weight="400" spacing="0.2em" color="#000" margin="0px 0px 20px 0px" textTransform="uppercase" size="1.1em">
                1. Initial Dispute Resolution
              </Para>
              <Para margin="-10px 0px 0px 0px">
                The parties shall use their best efforts to engage directly to settle any dispute, claim, question, or disagreement and engage in good faith negotiations which shall be a condition to either party initiating an arbitration or lawsuit.
              </Para>

              {/* 2. Binding Arbitration */}
              <Para weight="400" spacing="0.2em" color="#000" margin="20px 0px 20px 0px" textTransform="uppercase" size="1.1em">
                2. Binding Arbitration
              </Para>
              <Para margin="-10px 0px 20px 0px">
                If the parties do not reach an agreed upon solution within a period of 30 days from the time informal dispute resolution under the Initial Dispute Resolution provision begins, then either party may initiate binding arbitration as the sole means to resolve claims, subject to the terms set forth below. Specifically, all claims arising out of or relating to these Terms (including their formation, performance and breach), the parties’ relationship with each other and/or your use of the Services shall be finally settled by binding arbitration.
              </Para>
              <Para margin="0px 0px 20px 0px">
                You may not assign, delegate or transfer these Terms or your rights or obligations hereunder, in any way (by operation of law or otherwise) without our prior written consent. We may transfer, assign, or delegate these Terms and our rights and obligations without consent. Choice of Law; Arbitration. These Terms are governed by and will be construed under the laws of the CONFIRM, without regard to the conflicts of laws provisions thereof. Any dispute arising from or relating to the subject matter of these Terms shall be finally settled in [San Francisco] County, California, in English, in accordance with the Streamlined Arbitration Rules and Procedures of Judicial Arbitration and Mediation Services, Inc. (“JAMS”) then in effect, by one commercial arbitrator with substantial experience in resolving intellectual property and commercial contract disputes, who shall be selected from the appropriate list of JAMS arbitrators in accordance with such Rules.
              </Para>
              <Para margin="0px 0px 20px 0px">
                Judgment upon the award rendered by such arbitrator may be entered in any court of competent jurisdiction. Despite the foregoing obligation to arbitrate disputes, each party shall have the right to pursue injunctive or other equitable relief at any time, from any court of competent jurisdiction. For all purposes of this Agreement, the parties consent to exclusive jurisdiction and venue in the state or federal courts located in, respectively, [San Francisco] County, California, or the Northern District of California. <B>Any arbitration under these Terms will take place on an individual basis: class arbitrations and class actions are not permitted. YOU UNDERSTAND AND AGREE THAT BY ENTERING INTO THESE TERMS, YOU AND EPNS ARE EACH WAIVING THE RIGHT TO TRIAL BY JURY OR TO PARTICIPATE IN A CLASS ACTION.</B>
              </Para>


              {/* 3. Class Action Waiver */}
              <Para weight="400" spacing="0.2em" color="#000" margin="0px 0px 20px 0px" textTransform="uppercase" size="1.1em">
                3. Class Action Waiver
              </Para>
              <Para margin="-10px 0px 20px 0px">
                The parties further agree that any arbitration shall be conducted in their individual capacities only and not as a class action or other representative action, and the parties expressly waive their right to file a class action or seek relief on a class basis. YOU AND EPNS AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING. If any court or arbitrator determines that the class action waiver set forth in this paragraph is void or unenforceable for any reason or that an arbitration can proceed on a class basis, then the arbitration provision set forth above shall be deemed null and void in its entirety and the parties shall be deemed to have not agreed to arbitrate disputes.
              </Para>


              {/* 4. Exception - Litigation of Intellectual Property and Small Claims Court Claims */}
              <Para weight="400" spacing="0.2em" color="#000" margin="0px 0px 20px 0px" textTransform="uppercase" size="1.1em">
                4. Exception - Litigation of Intellectual Property and Small Claims Court Claims
              </Para>
              <Para margin="-10px 0px 20px 0px">
                Notwithstanding the parties’ decision to resolve all disputes through arbitration, either party may bring an action in state or federal court to protect its intellectual property rights (“intellectual property rights” means patents, copyrights, moral rights, trademarks, and trade secrets, but not privacy or publicity rights). Either party may also seek relief in a small claims court for disputes or claims within the scope of that court’s jurisdiction.
              </Para>
            </Item>

          </Item>
        </Content>
      </Section>
    </>
  );
}

// css style


// Export Default
export default Privacy;
