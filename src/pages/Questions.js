import React, { useState, useEffect } from "react";
import axios from "axios";

const Question = () => {
  const [questionData, setQuestionData] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [isNextQuestionAvailable, setIsNextQuestionAvailable] = useState(false);

  useEffect(() => {
    fetchQuestion();
  }, []);

  const fetchQuestion = () => {
    axios.get("https://api-stpn.onrender.com/api/random-question")
      .then((response) => {
        setQuestionData(response.data);
        setIsAnswerCorrect(null); // Clear previous answer feedback
        setIsNextQuestionAvailable(false); // Next question is not available until answered
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleClickedOption = (option) => {
    if (option === questionData.correctOption) {
      setIsAnswerCorrect(true);
    } else {
      setIsAnswerCorrect(false);
    }

    setIsNextQuestionAvailable(true); // Enable next question after answering
  };

  const handleNextQuestionClick = () => {
    fetchQuestion();
  };

  return (
    <div className="container mt-5">
      {questionData && (
        <div className={` shading-animation`}>
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">{questionData.question}</h3>
            <div className="d-flex flex-column">
              <button
                className="opt btn btn-outline-dark mb-2"
                onClick={() => handleClickedOption(questionData.option1)}
                disabled={isAnswerCorrect !== null}
              >
                {questionData.option1}
              </button>
              <button
                className="opt btn btn-outline-dark mb-2"
                onClick={() => handleClickedOption(questionData.option2)}
                disabled={isAnswerCorrect !== null}
              >
                {questionData.option2}
              </button>
              <button
                className="opt btn btn-outline-dark mb-2"
                onClick={() => handleClickedOption(questionData.option3)}
                disabled={isAnswerCorrect !== null}
              >
                {questionData.option3}
              </button>
              <button
                className="opt btn btn-outline-dark mb-2"
                onClick={() => handleClickedOption(questionData.option4)}
                disabled={isAnswerCorrect !== null}
              >
                {questionData.option4}
              </button>
            </div>
            {isAnswerCorrect !== null && (
              <p className={`answer-feedback ${isAnswerCorrect ? 'text-success' : 'text-danger shake'}`}>
                {isAnswerCorrect ? 'Correct ✔️' : 'Incorrect ❌'}
              </p>
            )}
            <div className="d-flex">
              <button
                className="btn btn-primary"
                onClick={handleNextQuestionClick}
                disabled={!isNextQuestionAvailable}
              >
                <p className={`fw-bold zoom-in ${!isNextQuestionAvailable?'text-danger':'text-white'}`}>Next Question</p>
              </button>
            </div>
          </div>
        </div>
        </div>
      )}
    </div>

  );
};

export default Question;
