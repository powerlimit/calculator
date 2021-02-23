import React from 'react'
import Img from '../assets/images/al-img.png'
import {getStepClass, STEP_ACTIVITY, activityOptions} from "../utils";
import {Select} from "./Select";

export const StepActivity = ({handleChoseActivity, handleBack, handleNext, step, activity}) => {

  const placeholder = activityOptions.find(el => el.value === activity)?.text || 'Choose Your Activity Level';

  return (
    <div className={getStepClass(step, STEP_ACTIVITY)}>
      <div className="step-title two-rows">
        <div className="colored">
          <span className="colored-first">Activity<br /> level.</span>
          <span className="colored-second">Activity<br /> level.</span>
          <span className="colored-third">Activity<br /> level.</span>
        </div>
      </div>
      <div className="step-content">
        <Select
          placeholder={placeholder}
          options={activityOptions}
          onSelect={handleChoseActivity}
        />
        <p className="text mt-7">Please Choose Best Option</p>
        <img src={Img} className="step-img mt-2 img-fluid" alt=""/>
        <div className="buttons">
          <button className="button" onClick={handleBack}>Back</button>
          <button disabled={!activity} className="button filled" onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  )
};
