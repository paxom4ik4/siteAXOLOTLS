import React from 'react';

import './collage.css';

import {MyTimer} from "../timer/timer";

import collage1 from '../../assets/collage1.JPG';
import collage2 from '../../assets/collage2.JPG';

const DEFAULT_CLASSNAME = 'collage';

export const Collage = () => {
  const timeBeforeLaunch = new Date('November 10, 2021 03:24:00');
  return (
    <div className={DEFAULT_CLASSNAME}>
      <div className={`${DEFAULT_CLASSNAME}_wrapper`}>
        <img src={collage1} />
        <img className={`${DEFAULT_CLASSNAME}_collage2`} src={collage2} />
      </div>
      <div className={`${DEFAULT_CLASSNAME}_filter`}>
        <div>
          {'Coming Soon'}
          {/*<MyTimer expiryTimestamp={timeBeforeLaunch} />*/}
        </div>
      </div>
    </div>
  )
}
