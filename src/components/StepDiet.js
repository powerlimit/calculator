import React from 'react'
import Img from '../assets/images/diet-img.png'
import {getStepClass, STEP_DIET, dietOptions} from "../utils";
import {Select} from "./Select";

export const StepDiet = ({handleChoseDiet, handleBack, handleNext, step, diet}) => {

  const placeholder = dietOptions.find(el => el.value === diet)?.text || 'Choose One That Best Fits';

  return (
    <div className={getStepClass(step, STEP_DIET)}>
      <div className="step-title two-rows diet">
        <div className="colored">
          <span className="colored-first">Diet Style<br /> Preference.</span>
          <span className="colored-second">Diet Style<br /> Preference.</span>
          <span className="colored-third">Diet Style<br /> Preference.</span>
        </div>
      </div>
      <div className="step-content">
        <Select
          placeholder={placeholder}
          options={dietOptions}
          onSelect={handleChoseDiet}
        />
        <p className="text mt-7">Please Choose Best Option</p>
        <img src={Img} className="step-img mt-2 img-fluid" alt=""/>
        <div className="buttons">
          <button className="button" onClick={handleBack}>Back</button>
          <button disabled={!diet} className="button filled" onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  )
};
