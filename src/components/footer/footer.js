import React from 'react';

import './footer.css';
import OpenSeaLogo from "../../assets/OpenSea.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDiscord, faTwitter} from "@fortawesome/free-brands-svg-icons";

import Logo from '../../assets/Logo.PNG';

const twitterIcon = <FontAwesomeIcon icon={faTwitter} />;
const discordIcon = <FontAwesomeIcon icon={faDiscord} />;

const DEFAULT_CLASSNAME = 'footer';

export const Footer = () => {
  return (
    <div className={DEFAULT_CLASSNAME}>
      <div className={`${DEFAULT_CLASSNAME}_wrapper`}>
        <div className={`${DEFAULT_CLASSNAME}-text`}>
          <div className={'footer-logo'}>
            <div>
              <img src={Logo} alt={'logo'} />
              <span>{'Axolotls NFT'}</span>
            </div>
            <span>{'1,000 Unique NFT - Axolotls NFT'}</span>
          </div>
          <span className={'terms'}>{'©2021 Axolotls. All rights reserved.'}</span>
        </div>
        <div className={`${DEFAULT_CLASSNAME}-links`}>
          <span>{'FAQ'}</span>
          <span>{'Terms & Conditions'}</span>
          <span>{'Smart Contract'}</span>
          <div className={`${DEFAULT_CLASSNAME}_links`}>
            <a target={'_blank'} href={'https://twitter.com/wingedaxolotls'}><div className={'header_links-link'}>{twitterIcon}</div></a>
            <a target={'_blank'} href={'https://discord.com/invite/YM3RKA3z'}><div className={'header_links-link'}>{discordIcon}</div></a>
            <div className={`header_links_connect-wallet`}>{'See Lore'}</div>
            <img src={OpenSeaLogo} alt={'opensea'} />
          </div>
        </div>
      </div>
    </div>
  )
}