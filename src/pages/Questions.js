import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Questions = () => {
  const [question, setQuestion] = useState([]);
  useEffect(()=>{
    Axios.get('http://localhost:4000/api/random-question').then((res)=>{
      console.log(res);
      setQuestion(res.data);
    });
  },[]);

  return (
    <>
      <p>{question.question}</p>
      <p>{question.option1}</p>
      <p>{question.option2}</p>
      <p>{question.option3}</p>
      <p>{question.option4}</p>
    </>
  );
};

export default Questions;
