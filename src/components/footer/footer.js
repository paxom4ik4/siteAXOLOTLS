import React from 'react';

import './footer.css';

import Logo from '../../assets/Logo.PNG';

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
          </div>
        </div>
        <div className={`${DEFAULT_CLASSNAME}-links`}>
          <span className={'terms'}>{'©2021 Axolotls. All rights reserved.'}</span>
        </div>
      </div>
    </div>
  )
}