import React     from 'react';
import build1    from '../assets/images/main1.png';
import build2    from '../assets/images/main2.png';
import build3    from '../assets/images/main3.png';
import build4    from '../assets/images/main4.png';
import build1dot from '../assets/images/main1dot.png';
import build2dot from '../assets/images/main2dot.png';
import build3dot from '../assets/images/main3dot.png';
import build4dot from '../assets/images/main4dot.png';

export const BundleMaintain = ({openModal}) => {

  const description = 'Reaching your fitness goals is great but maintaining a healthy lifestyle is even more important. Maintain your health requires that you regularly exercise and maintain a healthy diet. But in doing all this the body, especially your cells, get a little overworked. This is why we’ve made you a custom bundle designed to reinvigorate and rehydrate your entire body. Every single one of these products will help you stay in the best health of your life.';

  const ids = {
    protein: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzQzODg5NjI4MjgzNjk=',
    vitamin: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzQzODg5NjE4MTI1NjE=',
    acv: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzQzODg5NjIyNzEzMTM=',
    hydrate: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzQzODg5NjI0MDIzODU=',
  };

  return (
    <div className="bundle-container">
      <p className="bundle-desc mb-80 show-tablet">
        {description}
      </p>
      <div className="bundle-left">
        <p>Maintain.</p>
        <div className="build-images">
          <div onClick={() => openModal(ids.protein)}><img src={build1dot} alt=""/></div>
          <div onClick={() => openModal(ids.vitamin)}><img src={build2dot} alt=""/></div>
          <div onClick={() => openModal(ids.acv)}><img src={build3dot} alt=""/></div>
          <div onClick={() => openModal(ids.hydrate)}><img src={build4dot} alt=""/></div>
        </div>
        <button className="button filled">
          Buy this bundle & save
        </button>
      </div>
      <div className="bundle-right">
        <div className="bundle-items">

          <div className="bundle-item" onClick={() => openModal(ids.protein)}>
            <div className="bundle-item-img">
              <img src={build1} alt="" className="big"/>
            </div>
            <div className="bundle-item-text">
              <h4>Protein</h4>
              <p>Learn More Now</p>
              <span className="cursor-pointer">Click Here</span>
            </div>
          </div>

          <div className="bundle-item" onClick={() => openModal(ids.vitamin)}>
            <div className="bundle-item-img">
              <img src={build2} alt=""/>
            </div>
            <div className="bundle-item-text">
              <h4>Vitamin</h4>
              <p>Learn More Now</p>
              <span className="cursor-pointer">Click Here</span>
            </div>
          </div>

          <div className="bundle-item" onClick={() => openModal(ids.acv)}>
            <div className="bundle-item-img">
              <img src={build3} alt=""/>
            </div>
            <div className="bundle-item-text">
              <h4>ACV</h4>
              <p>Learn More Now</p>
              <span className="cursor-pointer">Click Here</span>
            </div>
          </div>

          <div className="bundle-item" onClick={() => openModal(ids.hydrate)}>
            <div className="bundle-item-img">
              <img src={build4} alt=""/>
            </div>
            <div className="bundle-item-text">
              <h4>Hydrate</h4>
              <p>Learn More Now</p>
              <span className="cursor-pointer">Click Here</span>
            </div>
          </div>

        </div>
        <p className="bundle-desc pb-200 hide-tablet">
          {description}
        </p>
      </div>
    </div>
  )
};
