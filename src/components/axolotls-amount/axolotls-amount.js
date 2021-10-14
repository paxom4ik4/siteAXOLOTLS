import React from "react";

import axolotlGif from '../../assets/gif.gif';
import './axolotls-amount.css'

const DEFAULT_CLASSNAME = 'axolotls-amount';

export const AxolotlsAmount = () => {
  return (
    <div className={DEFAULT_CLASSNAME}>
      <div className={`${DEFAULT_CLASSNAME}_wrapper`}>
        <div className={`${DEFAULT_CLASSNAME}_text`}>
          <div>{'1,000 unique Axolotls'}</div>
          <div>{'The Winged Axolotls is a collection of 1,000 generative items with hundreds of elements inspired by the SeaWorld Universe.'}</div>
          <div>{'Each artwork is original, with its own color palette and creation. The objective was to make each item unique in order to prioritize quality above quantity.'}</div>
        </div>
        <div className={`${DEFAULT_CLASSNAME}_gif`}>
          <img src={axolotlGif} alt={'axolotls-gif'} />
        </div>
      </div>
    </div>
  )
}