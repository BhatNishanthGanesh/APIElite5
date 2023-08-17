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
    for (const button of document.querySelectorAll('.opt')) {
      button.disabled = true;
    }
    if (option === questionData.correctOption) {
      alert('Correct ✔️')
    } else {
      alert('InCorrect ❌')
    }
  };
  const [isNextQuestionAvailable, setIsNextQuestionAvailable] = useState(true);
  const handleNextQuestionClick = () => {
    for (const button of document.querySelectorAll('.opt')) {
      button.disabled = false;
    }
    if (isNextQuestionAvailable) {
      axios.get("http://localhost:4000/api/random-question")
        .then((response) => {
          setQuestionData(response.data);
          setIsNextQuestionAvailable(true);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      alert('No more questions available');
    }
  };

  return (
    <div>
      {questionData && (
        <>
        <div className="d-flex">
        <ul className="">
          <h3>{questionData.question}</h3>
          <li>
            <button className='opt btn btn-outline-dark form-control' onClick={() => handleClickedOption(questionData.option1)}>{questionData.option1}</button> <br />
          </li>
          <li>
            <button className='opt btn btn-outline-dark form-control' onClick={() => handleClickedOption(questionData.option2)}>{questionData.option2}</button> <br />       
          </li>
          <li>
            <button className='opt btn btn-outline-dark form-control' onClick={() => handleClickedOption(questionData.option3)}>{questionData.option3}</button>  <br />
          </li>
            <button className='opt btn btn-outline-dark form-control' onClick={() => handleClickedOption(questionData.option4)}>{questionData.option4}</button>
        </ul>
        </div>
          <button className="btn" onClick={handleNextQuestionClick}>Next Question</button>
        </>
      )}
    </div>
  );
};

export default Question;
