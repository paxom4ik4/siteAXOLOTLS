import React from 'react';

import './collage.css';

import collage1 from '../../assets/collage.png';

import {MyTimer} from "../timer/timer";

const DEFAULT_CLASSNAME = 'collage';

export const Collage = () => {
  const timeBeforeLaunch = new Date('November 10, 2021 03:24:00');
  return (
    <div className={DEFAULT_CLASSNAME}>
      <div className={`${DEFAULT_CLASSNAME}_wrapper`}>
        <img src={collage1} />
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
