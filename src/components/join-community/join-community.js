import React from 'react';

import './join-community.css';

import axolotl1 from '../../assets/no-background/ax1-removebg-preview.png';
import axolotl2 from '../../assets/no-background/ax2-removebg-preview.png';
import axolotl3 from '../../assets/no-background/ax3-removebg-preview.png';
import axolotl4 from '../../assets/no-background/ax4-removebg-preview.png';
import axolotl5 from '../../assets/no-background/ax5-removebg-preview.png';
import axolotl6 from '../../assets/no-background/ax6rb.PNG';
import axolotl7 from '../../assets/no-background/ax7rb.png';

import Logo from '../../assets/Logo.PNG';

const DEFAULT_CLASSNAME =  'community';

export const Community = () => {
  return(
    <div className={DEFAULT_CLASSNAME}>
      <div className={`${DEFAULT_CLASSNAME}_wrapper`}>
        <span>{'Join the community'}</span>
        <span>{'Axolotls Discord already started and waiting for new AXO Owners! If you want to join the #Axoverse it’s here. Join our Discord to get the news as soon as possible !'}</span>
        <a target={'_blank'} href={'https://discord.com/invite/YM3RKA3z'}><div className={'join-discord'}>{'Join Our Discord'}</div></a>
        <img src={Logo} className={'axolotl-background-1'}/>
        {/*<img className={'axolotl-background-1'} src={axolotl1} alt={'axolotl'} />*/}
        {/*<img className={'axolotl-background-2'} src={axolotl2} alt={'axolotl'} />*/}
        {/*<img className={'axolotl-background-3'} src={axolotl3} alt={'axolotl'} />*/}
        {/*<img className={'axolotl-background-4'} src={axolotl4} alt={'axolotl'} />*/}
        {/*<img className={'axolotl-background-5'} src={axolotl5} alt={'axolotl'} />*/}
        {/*<img className={'axolotl-background-6'} src={axolotl6} alt={'axolotl'} />*/}
        {/*<img className={'axolotl-background-7'} src={axolotl7} alt={'axolotl'} />*/}
      </div>
    </div>
  )
}