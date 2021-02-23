import React from 'react'
import Img from '../assets/images/health-img.png'
import {getStepClass, STEP_HEALTH_GOALS, healthOptions} from "../utils";
import {Select} from "./Select";

export const StepHealth = ({handleChoseHealthGoals, handleBack, handleNext, step, health}) => {


  const placeholder = healthOptions.find(el => el.value === health)?.text || 'Choose One That Best Fits';

  return (
    <div className={getStepClass(step, STEP_HEALTH_GOALS)}>
      <div className="step-title two-rows">
        <div className="colored">
          <span className="colored-first">Health<br /> Goals.</span>
          <span className="colored-second">Health<br /> Goals.</span>
          <span className="colored-third">Health<br /> Goals.</span>
        </div>
      </div>
      <div className="step-content">
        <Select
          placeholder={placeholder}
          options={healthOptions}
          onSelect={handleChoseHealthGoals}
        />
        <p className="text mt-7">Please Choose Best Option</p>
        <img src={Img} className="step-img mt-2 img-fluid" alt=""/>
        <div className="buttons">
          <button className="button" onClick={handleBack}>Back</button>
          <button disabled={health === null} className="button filled" onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  )
};
