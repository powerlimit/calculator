import React from 'react'
import heightImg from '../assets/images/height-img.png'
import {getStepClass, STEP_HEIGHT} from "../utils";
import {Select} from "./Select";

export const StepHeight = ({handleChoseFeet, handleChoseInches, handleBack, handleNext, step, feet, inches}) => {

  return (
    <div className={getStepClass(step, STEP_HEIGHT)}>
      <div className="step-title">
        <div className="colored">
          <span className="colored-first">Height.</span>
          <span className="colored-second">Height.</span>
          <span className="colored-third">Height.</span>
        </div>
      </div>
      <div className="step-content">
        <div className="height-select">
          <Select
            placeholder={feet ?? 'Feet'}
            feet
            onSelect={handleChoseFeet}
          />
          <Select
            placeholder={inches ?? 'Inches'}
            inches
            onSelect={handleChoseInches}
          />
        </div>
        <img src={heightImg} className="step-img mt-2 img-fluid" alt=""/>
        <div className="buttons">
          <button className="button" onClick={handleBack}>Back</button>
          <button disabled={!feet} className="button filled" onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  )
};
