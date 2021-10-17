import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons";

import './header.css'

import Logo from '../../assets/Logo.PNG';
import OpenSeaLogo from '../../assets/OpenSea.svg';

const DEFAULT_CLASSNAME = 'header';

const twitterIcon = <FontAwesomeIcon icon={faTwitter} />;
const discordIcon = <FontAwesomeIcon icon={faDiscord} />;

export const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const setter = scrollYValue => setScrollY(scrollYValue);

    document.addEventListener('scroll', () => {
      setter(window.scrollY);
    });

    return () => {
      document.removeEventListener('scroll', () => {
        setter(window.scrollY);
      });
    }
  }, [])


  return (
    <div className={scrollY > 100 ? `${DEFAULT_CLASSNAME}-small` : DEFAULT_CLASSNAME}>
      <div className={`${DEFAULT_CLASSNAME}_wrapper`}>
        <div className={`${DEFAULT_CLASSNAME}_logo`}>
          <img src={Logo} alt={'Logo'} />
          <span>{'Winged Axolotls'}</span>
        </div>
        <div className={scrollY > 100 ? `${DEFAULT_CLASSNAME}-small_links` : `${DEFAULT_CLASSNAME}_links`}>
          <div className={`${DEFAULT_CLASSNAME}_links-link`}>{twitterIcon}</div>
          <div className={`${DEFAULT_CLASSNAME}_links-link`}>{discordIcon}</div>
          <div className={`${DEFAULT_CLASSNAME}_links_connect-wallet`}>{'See Lore'}</div>
        </div>
      </div>
    </div>
  )
}