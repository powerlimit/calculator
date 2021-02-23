import React, {useRef, useState} from 'react'
import angle from "../assets/images/angle-down.png";
import {useClickOutside} from '../hooks/useClickOutside';

export const Select = ({placeholder, age, weight, onSelect, feet, inches, options}) => {
  const wrapperRef = useRef(null);
  const [show, setShow] = useState(false);

  useClickOutside(wrapperRef, () => {
    setShow(false)
  });

  let items = [];

  if (options) {
    items = options.map(el => <span key={el.text} onClick={() => onSelect(el.value)}>{el.text}</span>)
  }

  if (age) {
    for (let i = 13; i <= 99; i++) {
      items.push(<span key={i} onClick={() => onSelect(i)}>{i}</span>)
    }
  }

  if (weight) {
    for (let i = 65; i <= 350; i++) {
      items.push(<span key={i} onClick={() => onSelect(i)}>{i} lbs.</span>)
    }
  }

  if (feet) {
    for (let i = 3; i <= 8; i++) {
      items.push(<span key={i} onClick={() => onSelect(i)}>{i}</span>)
    }
  }

  if (inches) {
    for (let i = 0; i <= 11; i++) {
      items.push(<span key={i} onClick={() => onSelect(i)}>{i}</span>)
    }
  }
  return (
    <div ref={wrapperRef} className="select-wrap" onClick={() => setShow(!show)}>
      <span>{placeholder}</span>
      <img src={angle} alt=""/>
      {show && <div className="select-items">
        {items}
      </div>}
    </div>
  )
}
