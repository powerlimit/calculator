import React from 'react'
import man from '../assets/images/man.png'
import woman from '../assets/images/woman.png'
import {getStepClass, STEP_SEX} from "../utils";

export const StepSex = ({handleChoseGender, gender, step}) => {

  return (
    <div className={getStepClass(step, STEP_SEX)}>
      <div className="step-title">
        <div className="colored mb-2">
          <span className="colored-first">Sex.</span>
          <span className="colored-second">Sex.</span>
          <span className="colored-third">Sex.</span>
        </div>
        <p className="choose">Please choose <br/> one to start</p>
      </div>
      <p className="gender-text">
        Gender At Birth
      </p>
      <div className="chooses">
        <div
          onClick={() => handleChoseGender('male')}
          className={gender === 'male' ? 'choose-gender chosen' : 'choose-gender'}>
          <img src={man} alt=""/>
          <span>Male.</span>
        </div>
        <div
          onClick={() => handleChoseGender('female')}
          className={gender === 'female' ? 'choose-gender chosen' : 'choose-gender'}>
          <img src={woman} alt=""/>
          <span>Female.</span>
        </div>
      </div>
    </div>
  )
}
