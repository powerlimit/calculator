import React from 'react'
import weightImg from '../assets/images/weight-img.png'
import {getStepClass, STEP_WEIGHT} from "../utils";
import {Select} from "./Select";

export const StepWeight = ({handleChoseWeight, handleBack, handleNext, step, weight}) => {

  return (
    <div className={getStepClass(step, STEP_WEIGHT)}>
      <div className="step-title">
        <div className="colored">
          <span className="colored-first">Weight.</span>
          <span className="colored-second">Weight.</span>
          <span className="colored-third">Weight.</span>
        </div>
      </div>
      <div className="step-content">
        <Select
          placeholder={weight ? weight + ' lbs.' : 'What’s Your Weight?'}
          weight
          onSelect={handleChoseWeight}
        />
        <img src={weightImg} className="step-img mt-2 img-fluid" alt=""/>
        <div className="buttons">
          <button className="button" onClick={handleBack}>Back</button>
          <button disabled={!weight} className="button filled" onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  )
};
