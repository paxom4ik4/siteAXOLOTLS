import React from "react";

import './roadmap.css';

const DEFAULT_CLASSNAME = 'roadmap';

export const Roadmap = () => {
  return (
    <div className={DEFAULT_CLASSNAME}>
      <div className={`${DEFAULT_CLASSNAME}_wrapper`}>
        <div className={`${DEFAULT_CLASSNAME}_wrapper-progress-line`} />
        <div className={`${DEFAULT_CLASSNAME}_item`}>
          <span className={`${DEFAULT_CLASSNAME}_item-title`}>{'Launch Roadmap'}</span>
          <div className={`${DEFAULT_CLASSNAME}_item-text`}>
            {'Quality comes first. The goal is to make our first drop as cool as possible so we can have freedom to develop the universe. We\'re still working on a number of rarity criteria, as well as a lot of new Lore concepts. The drop release date will be announced as soon as the project\'s quality and technical aspects are fully progressed. We also need to work hard with our community to make Discord and Twitter even cooler with new additions throughout time.'}
          </div>
          <div className={`${DEFAULT_CLASSNAME}_item-stage`}>1</div>
        </div>
        <div className={`${DEFAULT_CLASSNAME}_item`}>
          <span className={`${DEFAULT_CLASSNAME}_item-title`}>{'Physical Part'}</span>
          <div className={`${DEFAULT_CLASSNAME}_item-text`}>
            {'Mekas have a huge potential as physical creations. We are passionate about 3D printing and want to bring our concept to life with high-quality materials. After several talks with famous art toys makers, we are currently working on some concepts but wait, let’s keep a little mystery for the moment! We also aim to create clothing and merchandise using high-quality materials and textiles with eco-friendly fabrics. Also, Matt. B would love to explore a new and ambitious 3D Art Direction about streetwear and fashion in general. By following our design principles, we will do everything possible to create something amazing before, during, and after the launch of the first Drop!'}
          </div>
          <div className={`${DEFAULT_CLASSNAME}_item-stage`}>2</div>
        </div>
        <div className={`${DEFAULT_CLASSNAME}_item`}>
          <span className={`${DEFAULT_CLASSNAME}_item-title`}>{'Axolotls x Artists'}</span>
          <div className={`${DEFAULT_CLASSNAME}_item-text`}>
            {'We know a lot of artists in the NFT community and beyond! We\'d like to develop a series in which each Meka is made in collaboration with artists we like and under their artistic direction. We would create a small collection of 1/1 unique Mekas by artists, with all proceeds going to them! This collection is incredibly important to us, and we are excited to see what we can accomplish together!'}
          </div>
          <div className={`${DEFAULT_CLASSNAME}_item-stage`}>3</div>
        </div>
        <div className={`${DEFAULT_CLASSNAME}_item`}>
          <span className={`${DEFAULT_CLASSNAME}_item-title`}>{'Axolotls Multiverse'}</span>
          <div className={`${DEFAULT_CLASSNAME}_item-text`}>
            {'After presenting our original Mekas, we want to explore more abstract subjects in order to present a second, very distinct drop. Our aim is simply to aesthetically enlarge the universe, and each relationship between the Meka Dimensions will be described and explained. We truly want to blend artistic disciplines, as well as move beyond our graphic style and look outside our comfort zone. We also want to see if it would be possible to collaborate with famous mecha licenses on future releases. That would be incredible!'}
          </div>
          <div className={`${DEFAULT_CLASSNAME}_item-stage`}>4</div>
        </div>
        <div className={`${DEFAULT_CLASSNAME}_item`}>
          <span className={`${DEFAULT_CLASSNAME}_item-title`}>{'Future of Axolotls'}</span>
          <div className={`${DEFAULT_CLASSNAME}_item-text`}>
            {'When all of these stages are completed, we’ll take care of maintaining the Meka Universe. We both come from the design industry, and we are truly passionate about Art, Short films, Physical and Digital Exploration, and we would like to explore even more, with the desire to always make events more impressive and ambitious. We are counting on your support! We look forward to seeing what happens in the future! Love from Mekas ♥'}
          </div>
          <div className={`${DEFAULT_CLASSNAME}_item-stage`}>5</div>
        </div>
      </div>
    </div>
  )
};
