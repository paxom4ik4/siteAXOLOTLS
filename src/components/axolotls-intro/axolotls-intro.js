import React, { useState } from "react";

import './axolotls-intro.css';

import axolotl1 from '../../assets/axolotl1.jpg';
import axolotl2 from '../../assets/demon.jpg';
import axolotl3 from '../../assets/drakonid.jpg';
import axolotl4 from '../../assets/axo-but.jpg';
import axolotl5 from '../../assets/dragonfly.jpg';
import axolotl6 from '../../assets/arch.jpg';

const DEFAULT_CLASSNAME = 'axolotls-intro';

export const AxolotlsIntro = () => {
  const [showView1, setShowView1] = useState(false);
  const [showView2, setShowView2] = useState(false);
  const [showView3, setShowView3] = useState(false);
  const [showView4, setShowView4] = useState(false);
  const [showView5, setShowView5] = useState(false);
  const [showView6, setShowView6] = useState(false);

  return (
    <div className={DEFAULT_CLASSNAME}>
      <div className={`${DEFAULT_CLASSNAME}_wrapper`}>
        <span className={`${DEFAULT_CLASSNAME}_title`}>{"Unreal Mystical Axolotls Divided into 6 Classes Included In Our NFT Collection"}</span>
        <div className={`${DEFAULT_CLASSNAME}_axolotls-item`} onMouseOut={() => setShowView1(false)} onMouseOver={() => setShowView1(true)}>
          <div className={`${DEFAULT_CLASSNAME}_axolotls-item-filter`} />
          <div className={showView1 ? `${DEFAULT_CLASSNAME}_axolotls-item_view-btn` : `${DEFAULT_CLASSNAME}_axolotls-item_view-btn-hidden`}>
            {'Angel'}
          </div>
          <img src={axolotl1} alt={'axolotl'} />
        </div>
        <div className={`${DEFAULT_CLASSNAME}_axolotls-item`} onMouseOut={() => setShowView2(false)} onMouseOver={() => setShowView2(true)}>
          <div className={`${DEFAULT_CLASSNAME}_axolotls-item-filter`} />
          <div className={showView2 ? `${DEFAULT_CLASSNAME}_axolotls-item_view-btn` : `${DEFAULT_CLASSNAME}_axolotls-item_view-btn-hidden`}>
            {'Demon'}
          </div>
          <img src={axolotl2} alt={'axolotl'} />
        </div>
        <div className={`${DEFAULT_CLASSNAME}_axolotls-item`} onMouseOut={() => setShowView3(false)} onMouseOver={() => setShowView3(true)}>
          <div className={`${DEFAULT_CLASSNAME}_axolotls-item-filter`} />
          <div className={showView3 ? `${DEFAULT_CLASSNAME}_axolotls-item_view-btn` : `${DEFAULT_CLASSNAME}_axolotls-item_view-btn-hidden`}>
            {'Draconid'}
          </div>
          <img src={axolotl3} alt={'axolotl'} />

        </div>
        <div className={`${DEFAULT_CLASSNAME}_axolotls-item`} onMouseOut={() => setShowView4(false)} onMouseOver={() => setShowView4(true)}>
          <div className={`${DEFAULT_CLASSNAME}_axolotls-item-filter`} />
          <div className={showView4 ? `${DEFAULT_CLASSNAME}_axolotls-item_view-btn` : `${DEFAULT_CLASSNAME}_axolotls-item_view-btn-hidden`}>
            {'Axo Butterfly'}
          </div>
          <img src={axolotl4} alt={'axolotl'} />
        </div>
        <div className={`${DEFAULT_CLASSNAME}_axolotls-item`} onMouseOut={() => setShowView5(false)} onMouseOver={() => setShowView5(true)}>
          <div className={`${DEFAULT_CLASSNAME}_axolotls-item-filter`} />
          <div className={showView5 ? `${DEFAULT_CLASSNAME}_axolotls-item_view-btn` : `${DEFAULT_CLASSNAME}_axolotls-item_view-btn-hidden`}>
            {'Axo Dragonfly'}
          </div>
          <img src={axolotl5} alt={'axolotl'} />
        </div>
        <div className={`${DEFAULT_CLASSNAME}_axolotls-item`} onMouseOut={() => setShowView6(false)} onMouseOver={() => setShowView6(true)}>
          <div className={`${DEFAULT_CLASSNAME}_axolotls-item-filter`} />
          <div className={showView6 ? `${DEFAULT_CLASSNAME}_axolotls-item_view-btn` : `${DEFAULT_CLASSNAME}_axolotls-item_view-btn-hidden`}>
            {'Supreme Angel'}
          </div>
          <img src={axolotl6} alt={'axolotl'} />
        </div>
      </div>
    </div>
  )
}