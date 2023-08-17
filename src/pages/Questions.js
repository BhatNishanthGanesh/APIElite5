import React, { useState, useEffect } from "react";
import axios from "axios";

const Question=()=>{
  const [questionData, setQuestionData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:4000/api/random-question")
      .then((response) => {
        setQuestionData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleClickedOption = (option) => {
    if (option === questionData.correctOption) {
      alert('Correct!');
    } else {
      alert('Incorrect!');
    }
  };

  return (
    <div>
      {questionData && (
        <>
        <div>
        <h3>{questionData.question}</h3>
        <ul className="">
          <li>
            <button className='btn btn-outline-dark form-control' onClick={() => handleClickedOption(questionData.option1)}>{questionData.option1}</button> <br />
          </li>
          <li>
            <button className='btn btn-outline-dark form-control' onClick={() => handleClickedOption(questionData.option2)}>{questionData.option2}</button> <br />       
          </li>
          <li>
            <button className='btn btn-outline-dark form-control' onClick={() => handleClickedOption(questionData.option3)}>{questionData.option3}</button>  <br />
          </li>
            <button className='btn btn-outline-dark form-control' onClick={() => handleClickedOption(questionData.option4)}>{questionData.option4}</button>
        </ul>
        </div>
        </>
      )}
      
    </div>
  );
};

export default Question;
