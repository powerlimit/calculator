import React from "react";

export const STEP_SEX = 1;
export const STEP_AGE = 2;
export const STEP_WEIGHT = 3;
export const STEP_HEIGHT = 4;
export const STEP_ACTIVITY = 5;
export const STEP_HEALTH_GOALS = 6;
export const STEP_DIET = 7;
export const STEP_MEALS = 8;
export const STEP_FINAL = 9;

export const healthOptions = [
  {value: 300, text: 'Gain Lean Muscle'},
  {value: -300, text: 'Lose Body Fat'},
  {value: 0, text: 'Maintain Weight & Improve'},
];

export const activityOptions = [
  {value: 1.2, text: 'Light to No Activity'},
  {value: 1.375, text: 'Light Activity'},
  {value: 1.55, text: 'Moderate Activity (Most Common)'},
  {value: 1.725, text: 'Heavy Activity'},
  {value: 1.9, text: 'Intense Activity'},
];

export const dietOptions = [
  {value: 2, text: 'Balanced Nutrition Diet'},
  {value: 3, text: 'Low carb / Keto diet'},
  {value: 1, text: 'High Protein Diet'},
];

export const getStepClass = (step, id) => {
  let stepWrapClass = 'step-wrap';

  return step === id ? stepWrapClass + ' current' : step > id ? stepWrapClass + ' past' : stepWrapClass
};

export const calculate = data => {
  const height = data.inches + data.feet * 12;

  let result = 0;

  if (data.gender === 'female') {
    result = ((655 + (4.35 * data.weight + 4.7 * height - 4.7 * data.age)) * data.activity) + data.health;
  }

  if (data.gender === 'male') {
    result = ((66 + (6.23 * data.weight + 12.7 * height - 6.76 * data.age)) * data.activity) + data.health;
  }

  result = Math.floor(result);

  let proteinPer, fatPer, carbsPer;

  switch (data.diet) {
    case 1:
      proteinPer = 30;
      fatPer = 30;
      carbsPer = 40;
      break;
    case 2:
      proteinPer = 25;
      fatPer = 25;
      carbsPer = 50;
      break;
    case 3:
      proteinPer = 30;
      fatPer = 55;
      carbsPer = 15;
      break;
  }

  let protein = Math.floor(result / 4 * proteinPer / 100);
  let fat = Math.floor(result / 9 * fatPer / 100);
  let carbs = Math.floor(result / 4 * carbsPer / 100);

  const total = protein + fat + carbs;


  let meals = [];

  for (let i = 1; i <= data.meals; i++) {
    let multiplier = 1 / data.meals;
    let mealTitle = `Meal #${i}`;

    if (data.meals === 4) {
      multiplier = .28;
      if (i === 2) {
        multiplier = .16;
        mealTitle = `Snack #1`
      }
      if (i === 3) {
        mealTitle = `Meal #2`;
      }
      if (i === 4) {
        mealTitle = `Meal #3`;
      }
    } else if (data.meals === 5) {
      multiplier = .24;
      if (i === 2 || i === 5) {
        multiplier = .14;
      }
      switch (i) {
        case 1:
          mealTitle = `Meal #1`;
          break;
        case 2:
          mealTitle = `Snack #1`;
          break;
        case 3:
          mealTitle = `Meal #2`;
          break;
        case 4:
          mealTitle = `Meal #3`;
          break;
        case 5:
        default:
          mealTitle = `Snack #2`;
          break;
      }
    }

    meals.push((
      <div className="meal-card" key={'meal' + i}>
        <h4>{mealTitle}</h4>
        <p>Protein: {Math.round(protein * multiplier)}g</p>
        <p>Carbs: {Math.round(carbs * multiplier)}g</p>
        <p>Fat: {Math.round(fat * multiplier)}g</p>
      </div>
    ))
  }

  return {total, protein, fat, carbs, meals, result}
};
