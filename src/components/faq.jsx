import React, { useState } from 'react';
import '../faq.css'

const FAQ = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      className='FAQ'
      id='faq'
    >
      <h2>
        Abstract Dogs FAQ
      </h2>
      <div>
        {faqs.map((faq, index) => (
          <div
            className='faq-cont'
            key={index}
          >
            <div
              className='faq-toggle'
              onClick={() => toggleFAQ(index)}
            >
              <span className='faq-question'>{faq.question}</span>
              <span className='faq-icon'>
                {activeIndex === index ? '-' : '+'}
              </span>
            </div>
            {activeIndex === index && (
              <div
                className='faq-answer'
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
