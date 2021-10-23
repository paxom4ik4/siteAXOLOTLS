import React from "react";

import './roadmap.css';

const DEFAULT_CLASSNAME = 'roadmap';

export const Roadmap = () => {
  return (
    <div className={DEFAULT_CLASSNAME} id={DEFAULT_CLASSNAME}>
      <div className={`${DEFAULT_CLASSNAME}_wrapper`}>
        <div className={`${DEFAULT_CLASSNAME}_wrapper-progress-line`} />
        <div className={`${DEFAULT_CLASSNAME}_item`}>
          <span className={`${DEFAULT_CLASSNAME}_item-title`}>{'Current project'}</span>
          <div className={`${DEFAULT_CLASSNAME}_item-text`}>
            {'Currently, we are working on raising the quality of our first collection. We have already gone through a lot of iterations but we want to achieve quality standards that are undoubted can be named as one of the best in the NFT community. We are also working on expanding our community by marketing and improving social media presence as well as content quality. The drop release date will be announced as soon as we will be satisfied with the level of product.'}
          </div>
          <div className={`${DEFAULT_CLASSNAME}_item-stage`}>.01</div>
        </div>
        <div className={`${DEFAULT_CLASSNAME}_item`}>
          <span className={`${DEFAULT_CLASSNAME}_item-title`}>{'Expand and progress'}</span>
          <div className={`${DEFAULT_CLASSNAME}_item-text`}>
            {'We don’t want our univers to be a place only fo one collection. For this goal to be achieved we will expand it and add lore to all the details. And then we will develop it with breeding activity for axolotls and subsequent collection fitting in our world. We will take any opprtiunity to make it the most complex and interesting universe from all of the NFT. We also seeking to engage with different artist for cross-world integrations.'}
          </div>
          <div className={`${DEFAULT_CLASSNAME}_item-stage`}>.02</div>
        </div>
        <div className={`${DEFAULT_CLASSNAME}_item`}>
          <span className={`${DEFAULT_CLASSNAME}_item-title`}>{'Giving the love back'}</span>
          <div className={`${DEFAULT_CLASSNAME}_item-text`}>
            {'Becouse of you we can make our projects and develop our universe! So we want to return some love to you! First of all there will be drops for holder of a special collection (Baby Axolotls), also there will be give away for holders which contains our merch, as well as white priority list for our next collection.'}
          </div>
          <div className={`${DEFAULT_CLASSNAME}_item-stage`}>.03</div>
        </div>
        <div className={`${DEFAULT_CLASSNAME}_item`}>
          <span className={`${DEFAULT_CLASSNAME}_item-title`}>{'IRL Part'}</span>
          <div className={`${DEFAULT_CLASSNAME}_item-text`}>
            {'We want our creation to be present not only in the digital world but also to be physically present around our clients. We will achieve such a tusk by introducing 3D models and maybe even toys. Also, merchandise will be created as a part of our project of giving value back to our holders.'}
          </div>
          <div className={`${DEFAULT_CLASSNAME}_item-stage`}>.04</div>
        </div>
      </div>
    </div>
  )
};
