import React from 'react'
import ageImg from '../assets/images/age-img.png'
import {getStepClass, STEP_AGE} from "../utils";
import {Select} from "./Select";

export const StepAge = ({handleChoseAge, handleBack, handleNext, step, age}) => {

  return (
    <div className={getStepClass(step, STEP_AGE)}>
      <div className="step-title">
        <div className="colored">
          <span className="colored-first">Age.</span>
          <span className="colored-second">Age.</span>
          <span className="colored-third">Age.</span>
        </div>
      </div>
      <div className="step-content">
        <Select
          placeholder={age ?? 'What’s Your Age?'}
          age
          onSelect={handleChoseAge}
        />
        <p className="text">Yes, Your Real Age 😜</p>
        <img src={ageImg} className="step-img img-fluid" alt=""/>
        <div className="buttons">
          <button className="button" onClick={handleBack}>Back</button>
          <button disabled={!age} className="button filled" onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  )
};
