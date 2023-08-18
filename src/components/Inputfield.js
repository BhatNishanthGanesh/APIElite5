import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";


const QuestionForm=()=>{
  const { user } = useAuth0();

  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [correctOption, setCorrectOption] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      question: question,
      option1: option1,
      option2: option2,
      option3: option3,
      option4: option4,
      correctOption: correctOption,
      likesnumber:0,
      answered:0,
      correct:0,
      username: user.name,
    };
    await axios.post('https://api-stpn.onrender.com/questions', data);
    alert('Question added successfully');
  };

  return (
    <div>
      <h3>Add Question</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Question" value={question} onChange={(event) => setQuestion(event.target.value)} required/> <br />
        <input type="text" placeholder="Option 1" value={option1} onChange={(event) => setOption1(event.target.value)} required/> <br />
        <input type="text" placeholder="Option 2" value={option2} onChange={(event) => setOption2(event.target.value)} required/> <br />
        <input type="text" placeholder="Option 3" value={option3} onChange={(event) => setOption3(event.target.value)} required/> <br />
        <input type="text" placeholder="Option 4" value={option4} onChange={(event) => setOption4(event.target.value)} required/> <hr />
        <input type="text" placeholder="Enter Correct Oprion" value={correctOption} onChange={(event) => setCorrectOption(event.target.value)} required/>
         <br />
        <button type="submit">Publish it</button>
      </form>
    </div>
  );
};

export default QuestionForm;
