import React from 'react';

function Roadmap({ steps }) {
  return (
    <div
      className="roadmap"
      style={{
        width: '90%',
        margin: '3rem auto 0',
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        background: '#222',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          fontSize: '2.5rem',
          marginBottom: '2rem',
          color: '#F5F7F5',
          background: '#222',
        }}
      >
        Abstract-Dogs Utility
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          rowGap: '2rem',
          position: 'relative',
          padding: '1rem',
          background: '#222', /*change here back to default*/
        }}
      >
        {steps.map((step, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem',
              position: 'relative',
              padding: '1rem',
              background: '#222',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            {/* Step Marker */}
            <div
              style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#4CAF50', /*number background*/
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',
                fontSize: '1rem',
                fontWeight: 'bold',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
              }}
            >
              {index + 1}
            </div>

            {/* Step Content */}
            <div style={{ background: '#222' }}>
              <h3
                style={{
                  fontSize: '1.5rem',
                  margin: 0,
                  color: '#F5F7F5',
                  background: '#222'
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: '1rem',
                  margin: '0.5rem 0',
                  color: '#F5F7F5',
                  background: '#222'
                }}
              >
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Vertical Timeline Line */}
      <div
        style={{
          position: 'absolute',
          top: '3rem',
          left: '50%',
          transform: 'translateX(-50%)',
          height: `calc(${steps.length * 5}rem)`,
          width: '4px',
          background: 'linear-gradient(180deg, #4CAF50 0%, #ADA493 100%)',
          zIndex: -1,
        }}
      ></div>
    </div>
  );
}

export default Roadmap;

