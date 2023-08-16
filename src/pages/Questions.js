import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-fetch';

const Questions = () => {
  const [question, setQuestion] = useState('');

  async function fetchQuestion() {
    const response = await fetch('http://localhost:4000/api/random-question', {
      mode: 'no-cors',
    });
    const data = await response.json();
    setQuestion(data.question);
  }

  useEffect(() => {
    fetchQuestion();
  }, []);

  return (
    <>
      <h1>{question}</h1>
    </>
  );
};

export default Questions;
