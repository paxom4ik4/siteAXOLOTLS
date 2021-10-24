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
          {'Ambistomid , the world previously warm and serene, now almost outlived its usefulness.\n' +
          'The planet, located at a considerable distance from its paired suns, once bloomed and smelled differently, completely differently. '}
          <br />
          <br />
          {'Even during the existence of a giant mono-continent called Estasia, the protoaxolotls settled throughout the then world, not reaching only the most remote corners of the planet. The animals are coastal, but almost blind, they tried to be protected by giant reefs, which in turn live by absorbing bacteria that live closer to thermal springs. However, over time, being in fact rudimentary, the third pair of limbs began to resemble fins, helping to swim faster, and in rare cases, to dive out of the water at speed. [As conditions changed, the protoaxolotls became more and more graceful, and the fins-wings became larger and stronger, giving great advantages to their owners, until they were allowed to turn an elongated jump into a flapping flight at one point. From that moment the countdown of a new chapter in the history of axolotls began] The plates of the planet, driven by eternal streams of heat, moved along their own routes known only to them. Constant geothermal activity warmed the planet from the inside.'}
          <br />
          <br />
          {'Centuries passed, geology changed, and with it geography. The underground crust floated dividing Estasia into 4 torn pieces. The environment itself followed the slabs, followed by the ancestors of the axolotls. Time passed, landscapes and species of creatures and plants inhabiting a wonderful world, so lonely in the whole Axoverse, and at the same time so alive, changed.'}
        </div>
      </div>
    </div>
  )
}