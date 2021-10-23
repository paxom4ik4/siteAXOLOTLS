import React from "react";

import './axolotls-carousel.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import axolotl1 from '../../assets/axolotl1.jpg';
import axolotl2 from '../../assets/axolotl3.jpg';
import axolotl3 from '../../assets/axolotl2.jpg';
import axolotl4 from '../../assets/axolotl5.jpg';
import axolotl5 from '../../assets/axolotl6.jpg';

const DEFAULT_CLASSNAME = 'axolotls-carousel';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 425, min: 0 },
    items: 1
  }
};

export const AxolotlsCarousel = () => {
  return (
    <div className={DEFAULT_CLASSNAME}>
      <div className={`${DEFAULT_CLASSNAME}_wrapper`}>
        <div className={`${DEFAULT_CLASSNAME}_header`}>
          <div className={`${DEFAULT_CLASSNAME}_view-btn`}>{'Powered By Solana'}</div>
          <div className={`${DEFAULT_CLASSNAME}_title`}>{"Take your own Axolotl"}</div>
        </div>
        <Carousel arrows={false} keyBoardControl={false} showDots={false} autoPlay={true} infinite={true} autoPlaySpeed={2000} responsive={responsive} className={`${DEFAULT_CLASSNAME}_carousel`}>
          <div className={`${DEFAULT_CLASSNAME}_content-item`}>
            <img src={axolotl1} alt={'axolotl'} />
          </div>
          <div className={`${DEFAULT_CLASSNAME}_content-item`}>
            <img src={axolotl2} alt={'axolotl'} />
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

