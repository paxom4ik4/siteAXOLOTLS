import React from 'react';

import './faq.css';

const DEFAULT_CLASSNAME = 'faq';

export const FAQ = () => {
  return (
    <div className={DEFAULT_CLASSNAME} id={DEFAULT_CLASSNAME}>
      <div className={`${DEFAULT_CLASSNAME}_wrapper`}>
        <span className={`${DEFAULT_CLASSNAME}_title`}>{'FAQ'}</span>
        <div className={`${DEFAULT_CLASSNAME}_content`}>
          <div>
            <div className={`${DEFAULT_CLASSNAME}_item`}>
              <span>{'-Q: How much does an Axolotl cost?'}</span>
              <span>{'-A: 0.5 Solana'}</span>
            </div>
            <div className={`${DEFAULT_CLASSNAME}_item`}>
              <span>{'-Q: When Mint?'}</span>
              <span>{'-A: Mid November (more info soon)'}</span>
            </div>
            <div className={`${DEFAULT_CLASSNAME}_item`}>
              <span>{'-Q: What is the total supply?'}</span>
              <span>{'-A: 3333'}</span>
            </div>
          </div>
          <div>
            <div className={`${DEFAULT_CLASSNAME}_item`}>
              <span>{'-Q: Will there be a pre-sale?'}</span>
              <span>{'-A: No'}</span>
            </div>
            <div className={`${DEFAULT_CLASSNAME}_item`}>
              <span>{'-Q: What is the Winged Axolotls lore about ?'}</span>
              <span>{'-A: The wondrous world of intertwining axolotl variations'}</span>
            </div>
            <div className={`${DEFAULT_CLASSNAME}_item`}>
              <span>{'-Q: How often do you update the lore?'}</span>
              <span>{'-A: We are working on creating a huge detailed universe, as well as on daily additions'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}