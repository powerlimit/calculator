import React from 'react'
import meals2 from '../assets/images/meal2.svg'
import meals3 from '../assets/images/meal3.svg'
import meals4 from '../assets/images/meal4.svg'
import meals5 from '../assets/images/meal5.svg'
import {getStepClass, STEP_MEALS} from "../utils";

export const StepMeals = ({handleChoseMeals, handleBack, handleNext, step, meals}) => {

  return (
    <div className={getStepClass(step, STEP_MEALS)}>
      <div className="step-title">
        <div className="colored">
          <span className="colored-first">Meals.</span>
          <span className="colored-second">Meals.</span>
          <span className="colored-third">Meals.</span>
        </div>
      </div>
      <div className="meals-wrap">
        <p className="text mt-0">How many meals do you want to eat per day?</p>
        <div className="step-content meals">
          <div onClick={() => handleChoseMeals(2)} className={meals === 2 ? 'meal chosen' : 'meal'}>
            <img src={meals2} alt=""/>
            <span>2 Meals A Day</span>
          </div>
          <div onClick={() => handleChoseMeals(3)} className={meals === 3 ? 'meal chosen' : 'meal'}>
            <img src={meals3} alt=""/>
            <span>3 Meals A Day</span>
          </div>
          <div onClick={() => handleChoseMeals(4)} className={meals === 4 ? 'meal chosen' : 'meal'}>
            <img src={meals4} alt=""/>
            <span>3 Meals & 1 Snack</span>
          </div>
          <div onClick={() => handleChoseMeals(5)} className={meals === 5 ? 'meal chosen' : 'meal'}>
            <img src={meals5} alt=""/>
            <span>3 Meals & 2 Snack</span>
          </div>
        </div>
      </div>
      <div className="buttons">
        <button className="button" onClick={handleBack}>Back</button>
        <button disabled={!meals} className="button filled" onClick={handleNext}>Next</button>
      </div>
    </div>
  )
};
