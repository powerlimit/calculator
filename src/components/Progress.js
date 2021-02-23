import React from 'react';
import '../assets/scss/_progress.scss';

export const Progress = ({step}) => {
  const steps = ['Sex', 'Age', 'Weight', 'Height', 'Activity Level', 'Health Goals', 'Diet', 'Meals', 'Final'];

  let layout = [];

  for (let i = 1; i < steps.length; i++) {
    layout.push(
      [
        <span key={Math.random()} className={step >= i ? 'dot complete' : 'dot'}><span>{steps[i-1]}</span></span>,
        <span key={Math.random()} className={step >= i + 1 ? 'divider complete' : 'divider'}/>
      ]
    )
  }


  return (
    <div className="progress-wrap">
      <div className="progress-line">
        <span className="progress-status" style={{width: (step / (steps.length) * 100) + '%'}} />
      </div>
      <div className="progress">
        {layout}
        <span className={step >= steps.length ? 'dot complete' : 'dot'}>
          <span>{steps[steps.length - 1]}</span>
        </span>
      </div>
    </div>
  )
};
