import React from 'react';
import build1    from '../assets/images/build1.png';
import build2    from '../assets/images/build2.png';
import build3    from '../assets/images/build3.png';
import build4    from '../assets/images/build4.png';
import build1dot from '../assets/images/build1dot.png';
import build2dot from '../assets/images/build2dot.png';
import build3dot from '../assets/images/build3dot.png';
import build4dot from '../assets/images/build4dot.png';

export const BundleBuild = ({openModal}) => {

  const description = 'Building lean muscle mass requires a lot of hard work and dedication. The right products can get you to your goals a lot faster. Providing your body with lean plant protein and our ultra-pure Creatine guarantees you fuel your body with what it needs to produce lean muscle. Our Energy Pre-workout will get you through your entire workout, guaranteed. And finally, our Vitamin will provide you with the right amount of micronutrients to ensure you stay healthy and on the right path.';

  const ids = {
    protein: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzQzODg5NjI4MjgzNjk=',
    creatine: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzQzODg5NjIzMzY4NDk=',
    vitamin: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzQzODg5NjE4MTI1NjE=',
    energy: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzQzODg5NjE5MTA4NjU=',
  };

  return (
    <div className="bundle-container">
      <p className="bundle-desc mb-80 show-tablet">{description}</p>
      <div className="bundle-left">
        <p>Build.</p>
        <div className="build-images">
          <div onClick={() => openModal(ids.protein)}><img src={build1dot} alt=""/></div>
          <div onClick={() => openModal(ids.creatine)}><img src={build2dot} alt=""/></div>
          <div onClick={() => openModal(ids.vitamin)}><img src={build3dot} alt=""/></div>
          <div onClick={() => openModal(ids.energy)}><img src={build4dot} alt=""/></div>
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
              <h4>Plant Protein</h4>
              <p>Learn More Now</p>
              <span className="cursor-pointer">Click Here</span>
            </div>
          </div>

          <div className="bundle-item" onClick={() => openModal(ids.creatine)}>
            <div className="bundle-item-img">
              <img src={build2} alt=""/>
            </div>
            <div className="bundle-item-text">
              <h4>Creatine</h4>
              <p>Learn More Now</p>
              <span className="cursor-pointer">Click Here</span>
            </div>
          </div>

          <div className="bundle-item" onClick={() => openModal(ids.vitamin)}>
            <div className="bundle-item-img">
              <img src={build3} alt=""/>
            </div>
            <div className="bundle-item-text">
              <h4>Vitamin</h4>
              <p>Learn More Now</p>
              <span className="cursor-pointer">Click Here</span>
            </div>
          </div>

          <div className="bundle-item" onClick={() => openModal(ids.energy)}>
            <div className="bundle-item-img">
              <img src={build4} alt=""/>
            </div>
            <div className="bundle-item-text">
              <h4>Energy</h4>
              <p>Learn More Now</p>
              <span>Click Here</span>
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
