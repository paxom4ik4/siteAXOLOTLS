import React from 'react';
import { useTimer } from 'react-timer-hook';

export function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

  return (
    <div style={{textAlign: 'center', color: "#ffffff", height: '240px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
      <div style={{fontSize: '100px', display: 'flex', flexDirection: 'row'}}>
        <span className={'time-container'}>
          <span>{days.toString().length > 1 ? days : `0${days}`}</span>
          <span>{'days'}</span>
        </span>
        :
        <span className={'time-container'}>
          <span>{hours.toString().length > 1 ? hours : `0${hours}`}</span>
          <span>{'hours'}</span>
        </span>
        :
        <span className={'time-container'}>
          <span>{minutes.toString().length > 1 ? minutes : `0${minutes}`}</span>
          <span>{'minutes'}</span>
        </span>
        :
        <span className={'time-container'}>
          <span>{seconds.toString().length > 1 ? seconds : `0${seconds}`}</span>
          <span>{'seconds'}</span>
        </span>
      </div>
      <div className={'nft-buttons'}>
        <div className={'btn-connect-wallet'}>{'Connect Wallet'}</div>
        <div className={'btn-mint'}>{'Mint'}</div>
      </div>
    </div>
  );
}
