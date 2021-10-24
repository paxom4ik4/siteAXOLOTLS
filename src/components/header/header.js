import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons";

import { Link as RouterLink } from "react-router-dom";

import { Link, animateScroll as scroll } from "react-scroll";

import './header.css'

import Logo from '../../assets/Logo.PNG';

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
          <RouterLink to="/lore" style={{color: '#fff'}}>{'Lore'}</RouterLink>
          <div className={'separator'} />
          <Link
            activeClass="active"
            to="roadmap"
            spy={true}
            smooth={true}
            offset={-30}
            duration={500}
            style={{color: '#fff'}}>{'Roadmap'}</Link>
          <div className={'separator'} />
          <Link
            activeClass="active"
            to="faq"
            spy={true}
            smooth={true}
            offset={-30}
            duration={500}
            style={{color: '#fff'}}>{'FAQ'}</Link>
          <a target={'_blank'} href={'https://twitter.com/wingedaxolotls'}><div className={`${DEFAULT_CLASSNAME}_links-link`}>{twitterIcon}</div></a>
          <a target={'_blank'} href={'https://discord.com/invite/YM3RKA3z'}><div className={`${DEFAULT_CLASSNAME}_links-link`}>{discordIcon}</div></a>
        </div>
      </div>
    </div>
  )
}