import React, { useState } from 'react';
import '../faq.css'

const FAQ = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      id='faq'
      style={{
        width: '90%',
        margin: '2rem auto',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          fontSize: '2.5rem',
          marginBottom: '1.5rem',
          color: '#F5F7F5',
        }}
      >
        Abstract Dogs FAQ
      </h2>
      <div>
        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{
              background: '#ADA493',
              margin: '1rem 0',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
            }}
          >
            <div
              onClick={() => toggleFAQ(index)}
              style={{
                padding: '1rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer',
                background: '#4CAF50',
                color: '#fff',
                fontWeight: 'bold',
              }}
            >
              <span style={{background: "transparent"}}>{faq.question}</span>
              <span style={{ fontSize: '1.5rem', background: "transparent" }}>
                {activeIndex === index ? '-' : '+'}
              </span>
            </div>
            {activeIndex === index && (
              <div
                style={{
                  padding: '1rem',
                  background: '#F8F9FA',
                  color: '#333',
                  fontSize: '1rem',
                  lineHeight: '1.5',
                }}
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
