import React from 'react';
import '../roadmap.css'

function Roadmap({ steps }) {
  return (
    <div className="roadmap">
      <h2>
        Abstract-Dogs Utility
      </h2>

      <div className='roadmap-cont'>
        {steps.map((step, index) => (
          <div
            key={index}
            className='step-cont'
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            {/* Step Marker */}
            <div className='step-maker'>
              {index + 1}
            </div>

            {/* Step Content */}
            <div className='step-cont'>
              <h3>
                {step.title}
              </h3>
              <p>
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Vertical Timeline Line */}
      <div
        className='vert-line'
        style={{height: `calc(${steps.length * 5}rem)`}}
      ></div>
    </div>
  );
}

export default Roadmap;

