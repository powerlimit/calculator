import React, {useRef, useEffect, useState} from 'react'

export const Circle = ({total, value, label}) => {

  const canvasEl = useRef(null);

  const [val, setVal] = useState(0);

  useEffect(() => {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
    const duration = 2000;
    let start = 0;

    const timer = setInterval(() => {
      if (start === value) {
        clearInterval(timer);
      } else {
        start += 1;
      }
      setVal(start)
    }, duration / value);


    if (canvasEl.current) {
      const canvas = canvasEl.current;
      const context = canvas.getContext('2d');
      var x = canvas.width / 2;
      var y = canvas.height / 2;
      var radius = 75;
      var endPercent = value / total * 100;
      var curPerc = 0;
      var circ = Math.PI * 2;
      var quart = Math.PI / 2;

      const animate = (current) => {
        context.clearRect(0, 0, canvas.width, canvas.height);

        context.beginPath();
        context.arc(x, y, radius, 0, circ, false);
        context.lineWidth = 7;
        context.strokeStyle = '#eeeeee';
        context.stroke();
        context.closePath();

        context.beginPath();
        context.arc(x, y, radius, -(quart), ((circ) * current) - quart, false);
        context.lineWidth = 7;
        context.strokeStyle = '#87d0c7';
        context.stroke();
        curPerc++;
        if (curPerc < endPercent) {
          requestAnimationFrame(function () {
            animate(curPerc / 100)
          });
        }
      }

      animate();

    }
  }, [canvasEl]);

  return (
    <div className="res-circle-block">
      <span className="res-circle-title">{label}</span>
      <div className="position-relative">
        <canvas className="res-circle-canvas" ref={canvasEl} width="185" height="185" />
        <span className="res-circle-val">{val}</span>
      </div>
    </div>
  )
};
