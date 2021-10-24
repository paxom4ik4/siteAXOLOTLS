import React from 'react';
import { Link } from "react-router-dom";

import './Lore.css';

const DEFAULT_CLASSNAME = 'lore';

export const Lore = () => {
  return (
    <div className={DEFAULT_CLASSNAME}>
      <div className={`${DEFAULT_CLASSNAME}_wrapper`}>
        <div className={`${DEFAULT_CLASSNAME}_links`}>
          <Link style={{color: '#000000'}} to={'/'}>{'Back to Home'}</Link>
          <div>{'Lore'}</div>
        </div>
        <div className={`${DEFAULT_CLASSNAME}_content`}>
          {'It is known for certain that the first continent to break off was Dravolin ( DRAco VOLans LINNaeus), which became home to the Draconid axolotl genus. Breaking away from the eastern part of Estasia, it extends from the very north and goes far beyond the equator. The harsh semi-tundra of this continent smoothly flows into the stony steppes, and from there into the sultry plains in the very south. The poor variety of life, coupled with difficult conditions, gave rise to this genus of axolotls, which are extremely hardy and resistant to external influences. The bodies of representatives of this genus are covered with strong scales, and the membranous wings are crowned with sharp tips on the lunges.'}
          <br />
          <br />
          {'Separating from the parent continent, Dravolin pulled hundreds and thousands of separate patches of land also boiling with life, thereby laying out an interrupted path from the islands to Estasia.  The name of this path is the Fiends-Islands Archipelago.  Unlike its eastern neighbor, the landscape here is less depressing - the islands cross mountain ranges in all directions, the peaks of the mountains stretch upward through the clouds.  Through the massifs there are countless natural channels filled with sea water.'}
          <br />
          <br />
          {'The local inhabitants partly resemble their Draconic counterparts with curve membranous wings, topped with single thorns, but their appearance is deceiving - their wings are smaller, their swing is more frequent, and their temper is more cunning.  Most of them are loners, however, there are also collective representations with a clear hierarchy.'}
          <br />
          <br />
          {'But not only life is subject to change. The constant activity of the bowels has turned the cold desert into a piece of summer among the endless expanses of space. Gave life to the planet itself, mixing chemical ingredients into a weird cocktail for millions of years. This same activity now threatened to take life. The shifted balance of the earth\'s crust, caused by the movement of the plates, now spewed out only destructive heat in some places, while in others it gave rise to a fierce frost. Crazy balance of the universe. Conditions are critical enough to force life to seek new paths. Migration of the now dominant species was not long in coming'}
        </div>
      </div>
    </div>
  )
}