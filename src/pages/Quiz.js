import React, {useState, useEffect} from 'react';

import yel from '../assets/images/yel.png';
import c2 from '../assets/images/2c.png';

import {Cart} from "../components/Cart";
import {Progress} from "../components/Progress";
import {StepSex} from "../components/StepSex";
import {StepAge} from "../components/StepAge";
import {StepWeight} from "../components/StepWeight";
import {StepHeight} from "../components/StepHeight";
import {StepActivity} from "../components/StepActivity";
import {StepHealth} from "../components/StepHealth";
import {StepDiet} from "../components/StepDiet";
import {StepMeals} from "../components/StepMeals";
import {StepFinal} from "../components/StepFinal";
import {STEP_FINAL} from "../utils";

import { useShopify } from "../hooks"


export const Quiz = () => {

  const [gender, setGender] = useState(null);
  const [age, setAge] = useState(null);
  const [weight, setWeight] = useState(null);
  const [step, setStep] = useState(1);
  const [feet, setFeet] = useState(null);
  const [inches, setInches] = useState(null);
  const [activity, setActivity] = useState(null);
  const [health, setHealth] = useState(null);
  const [diet, setDiet] = useState(null);
  const [meals, setMeals] = useState(null);

  const {
    createShop,
    createCheckout,
    fetchProducts,
  } = useShopify();

  const data = {gender, age, weight, feet, inches, activity, health, diet, meals};

  useEffect(() => {
    createShop();
    fetchProducts();
    createCheckout();
  }, []);

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleNext = () => {
    setStep(step +1);
  };

  const handleChoseGender = _gender => {
    setGender(_gender);
    setTimeout(() => {
      setStep(step + 1);
    }, 300);
  };

  let shadowClass = 'shadow flex-box';
  let wrapClass = 'quiz-wrap overflow';

  if (step === STEP_FINAL) {
    shadowClass += ' shadow-final';
    wrapClass = 'quiz-wrap';
  }

  return (
    <div className={wrapClass}>
      <div className={shadowClass}>
        <Progress step={step} />
        <StepSex step={step} handleChoseGender={handleChoseGender} gender={gender} />
        <StepAge
          handleBack={handleBack}
          handleNext={handleNext}
          age={age}
          step={step}
          handleChoseAge={setAge}
        />
        <StepWeight
          handleBack={handleBack}
          handleNext={handleNext}
          weight={weight}
          step={step}
          handleChoseWeight={setWeight}
        />
        <StepHeight
          handleBack={handleBack}
          handleNext={handleNext}
          step={step}
          handleChoseFeet={setFeet}
          handleChoseInches={setInches}
          feet={feet}
          inches={inches}
        />
        <StepActivity
          handleBack={handleBack}
          handleNext={handleNext}
          step={step}
          handleChoseActivity={setActivity}
          activity={activity}
        />
        <StepHealth
          handleBack={handleBack}
          handleNext={handleNext}
          step={step}
          handleChoseHealthGoals={setHealth}
          health={health}
        />
        <StepDiet
          handleBack={handleBack}
          handleNext={handleNext}
          step={step}
          handleChoseDiet={setDiet}
          diet={diet}
        />
        <StepMeals
          handleBack={handleBack}
          handleNext={handleNext}
          step={step}
          handleChoseMeals={setMeals}
          meals={meals}
        />
        {step === STEP_FINAL && <StepFinal handleBack={handleBack} step={step} data={data} setStep={setStep} />}
      </div>
      {step === 1 && ([
        <img key="c1" src={yel} className="yel" alt=""/>,
        <img key="c2" src={c2} className="c2" alt=""/>
      ])}
      <Cart />
    </div>
  )
};
