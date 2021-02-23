import React     from 'react';
import build1    from '../assets/images/burn1.png';
import build2    from '../assets/images/burn2.png';
import build3    from '../assets/images/burn3.png';
import build4    from '../assets/images/burn4.png';
import build1dot from '../assets/images/burn1dot.png';
import build2dot from '../assets/images/burn2dot.png';
import build3dot from '../assets/images/burn3dot.png';
import build4dot from '../assets/images/burn4dot.png';

export const BundleBurn = ({openModal}) => {

  const description = 'If your goal is to burn fat, then this bundle is perfect for you. The main reason: Metabolism, our advanced fat loss supplement. The secret to eliminating body fat is to burn more than you consume. This requires intense dieting and long cardio sessions. But what if we told you that Metabolism is clinically proven to reverse the fat gene expression and trigger the body to burn more fat all while blocking any new fat from storing in your body? That is exactly what Metabolism does. But the benefits don\'t stop there. Combining Metabolism with ACV, our powerful and pure Apple Cider Vinegar supplement in addition to our Detox, which will help detox your body and reduce bloating, you’ll be sure to reach your weight loss goals in no time.';

  const ids = {
    bcaa: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzQzODg5NjIwNDE5Mzc=',
    metabolism: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzQzODg5NjE4NDUzMjk=',
    acv: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzQzODg5NjIyNzEzMTM=',
    detox: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzQzODg5NjIzMDQwODE=',
  };

  return (
    <div className="bundle-container">
      <p className="bundle-desc mb-80 show-tablet">
        {description}
      </p>
      <div className="bundle-left">
        <p>Burn.</p>
        <div className="build-images">
          <div onClick={() => openModal(ids.bcaa)}><img src={build1dot} alt=""/></div>
          <div onClick={() => openModal(ids.metabolism)}><img src={build2dot} alt=""/></div>
          <div onClick={() => openModal(ids.acv)}><img src={build3dot} alt=""/></div>
          <div onClick={() => openModal(ids.detox)}><img src={build4dot} alt=""/></div>
        </div>
        <button className="button filled">
          Buy this bundle & save
        </button>
      </div>
      <div className="bundle-right">
        <div className="bundle-items">

          <div className="bundle-item" onClick={() => openModal(ids.bcaa)}>
            <div className="bundle-item-img">
              <img src={build1} alt="" className="big"/>
            </div>
            <div className="bundle-item-text">
              <h4>BCAA</h4>
              <p>Learn More Now</p>
              <span className="cursor-pointer">Click Here</span>
            </div>
          </div>

          <div className="bundle-item" onClick={() => openModal(ids.metabolism)}>
            <div className="bundle-item-img">
              <img src={build2} alt=""/>
            </div>
            <div className="bundle-item-text">
              <h4>Metabolism</h4>
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

          <div className="bundle-item" onClick={() => openModal('')}>
            <div className="bundle-item-img">
              <img src={build4} alt=""/>
            </div>
            <div className="bundle-item-text">
              <h4>Detox</h4>
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
