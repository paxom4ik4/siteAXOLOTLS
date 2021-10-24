import React from "react";

import './axolotls-carousel.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import axolotl1 from '../../assets/axo-but.jpg';
import axolotl2 from '../../assets/arch.jpg';
import axolotl3 from '../../assets/dragonfly.jpg';
import axolotl4 from '../../assets/drakonid.jpg';
import axolotl5 from '../../assets/axolotl1.jpg';

const DEFAULT_CLASSNAME = 'axolotls-carousel';

export const AxolotlsCarousel = () => {
  return (
    <div className={DEFAULT_CLASSNAME}>
      <div className={`${DEFAULT_CLASSNAME}_wrapper`}>
        <div className={`${DEFAULT_CLASSNAME}_header`}>
          <div className={`${DEFAULT_CLASSNAME}_view-btn`}>{'Powered By Solana'}</div>
          <div className={`${DEFAULT_CLASSNAME}_title`}>{"Take your own Axolotl"}</div>
        </div>
        <Carousel autoPlay={true} infiniteLoop={true} autoPlaySpeed={2000} className={`${DEFAULT_CLASSNAME}_carousel`} showIndicators={false} showThumbs={false} showStatus={false}>
          <div className={`${DEFAULT_CLASSNAME}_content-item`}>
            <img src={axolotl2} alt={'axolotl'} />
          </div>
          <div className={`${DEFAULT_CLASSNAME}_content-item`}>
            <img src={axolotl1} alt={'axolotl'} />
          </div>
          <div className={`${DEFAULT_CLASSNAME}_content-item`}>
            <img src={axolotl3} alt={'axolotl'} />
          </div>
          <div className={`${DEFAULT_CLASSNAME}_content-item`}>
            <img src={axolotl4} alt={'axolotl'} />
          </div>
          <div className={`${DEFAULT_CLASSNAME}_content-item`}>
            <img src={axolotl5} alt={'axolotl'} />
          </div>
        </Carousel>
      </div>
    </div>
  )
}

