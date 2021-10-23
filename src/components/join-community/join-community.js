import React from 'react';

import './join-community.css';

import axolotl1 from '../../assets/no-background/ax1-removebg-preview.png';
import axolotl2 from '../../assets/no-background/ax2-removebg-preview.png';
import axolotl3 from '../../assets/no-background/ax3-removebg-preview.png';
import axolotl4 from '../../assets/no-background/ax4-removebg-preview.png';
import axolotl5 from '../../assets/no-background/ax5-removebg-preview.png';

const DEFAULT_CLASSNAME =  'community';

export const Community = () => {
  return(
    <div className={DEFAULT_CLASSNAME}>
      <div className={`${DEFAULT_CLASSNAME}_wrapper`}>
        <span>{'Join the community'}</span>
        <span>{'Axolotls Discord already has over 150,000 members! If you want to join the #MEKAGANG it’s here. Join us to get the news as soon as possible and follow our latest announcements.'}</span>
        <a target={'_blank'} href={'https://discord.com/invite/YM3RKA3z'}><div className={'join-discord'}>{'Join Our Discord'}</div></a>
        <img className={'axolotl-background-1'} src={axolotl1} alt={'axolotl'} />
        <img className={'axolotl-background-2'} src={axolotl2} alt={'axolotl'} />
        <img className={'axolotl-background-3'} src={axolotl3} alt={'axolotl'} />
        <img className={'axolotl-background-4'} src={axolotl4} alt={'axolotl'} />
        <img className={'axolotl-background-5'} src={axolotl5} alt={'axolotl'} />
      </div>
    </div>
  )
}