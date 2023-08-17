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

  const handleClickedOption = ()=>{
      
  }

  return (
    <div>
      {questionData && (
        <>
        <div>
        <h3>{questionData.question}</h3>
        <ul className="">
          <li>
            <button className='btn' onClick={handleClickedOption}>{questionData.option1}</button> <br />
          </li>
          <li>
            <button className='btn' >{questionData.option2}</button> <br />       
          </li>
          <li>
            <button className='btn'>{questionData.option3}</button>  <br />
          </li>
            <button className='btn'>{questionData.option4}</button>
        </ul>
        </div>
        </>
      )}
      
    </div>
  );
};

export default Question;
