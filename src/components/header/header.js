import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons";

import './header.css'

const DEFAULT_CLASSNAME = 'header';

const twitterIcon = <FontAwesomeIcon icon={faTwitter} />;
const discordIcon = <FontAwesomeIcon icon={faDiscord} />;

export const Header = () => {
  return (
    <div className={DEFAULT_CLASSNAME}>
      <div className={`${DEFAULT_CLASSNAME}_wrapper`}>
        <div className={`${DEFAULT_CLASSNAME}_logo`}>
          {'Winged Axolotls'}
        </div>
        <div className={`${DEFAULT_CLASSNAME}_links`}>
          <div className={`${DEFAULT_CLASSNAME}_links-link`}>{twitterIcon}</div>
          <div className={`${DEFAULT_CLASSNAME}_links-link`}>{discordIcon}</div>
          <div className={`${DEFAULT_CLASSNAME}_links_connect-wallet`}>{'Connect Wallet'}</div>
        </div>
      </div>
    </div>
  )
}