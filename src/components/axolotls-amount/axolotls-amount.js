import React from "react";

import axolotlGif from '../../assets/gif.gif';
import './axolotls-amount.css'

const DEFAULT_CLASSNAME = 'axolotls-amount';

export const AxolotlsAmount = () => {
  return (
    <div className={DEFAULT_CLASSNAME}>
      <div className={`${DEFAULT_CLASSNAME}_wrapper`}>
        <div className={`${DEFAULT_CLASSNAME}_text`}>
          <div>{'3,333 unique Axolotls'}</div>
          <div>{'The Winged Axolotls is a NFT collection of 3333 unique Axolotls inspired by our Axoverse. Each axolotl has its own unique trait, and also belongs to one of 6 classes.'}</div>
        </div>
        <div className={`${DEFAULT_CLASSNAME}_gif`}>
          <img src={axolotlGif} alt={'axolotls-gif'} />
        </div>
      </div>
    </div>
  )
}