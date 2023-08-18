import React, { useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { BsPlusCircle } from "react-icons/bs";

const QuestionForm = () => {
  const { user } = useAuth0();

  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([""]);
  const [correctOption, setCorrectOption] = useState("");

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const handleAddOption = () => {
    setOptions([...options, ""]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!user || !user.name) {
      alert("User information not available.");
      return;
    }
    const data = {
      question: question,
      option:options,
      correctOption: correctOption,
      likesnumber:0,
      answered:0,
      correct:0,
      username: user.name,
    };
   
  try {
    await axios.post("https://api-stpn.onrender.com/questions", data);
    alert("Question added successfully");
  } catch (error) {
    console.error("Error adding question:", error);
    alert("An error occurred while adding the question.");
  }
  };

  return (
    <div className="question-form card card-sm m-5">
      <div className="card-body">
        <div className="d-flex align-items-center mb-3">
          <BsPlusCircle className="plus-icon me-2" size={24} onClick={handleAddOption} />
          <h3 className="card-title">Add MCQ Question</h3>
        </div>
        <form className="question-form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Question"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              required
            />
          </div>
          {options.map((option, index) => (
            <div className="mb-3 option-container" key={index}>
              <input
                type="text"
                className="form-control"
                placeholder={`Option ${index + 1}`}
                value={option}
                onChange={(event) => handleOptionChange(index, event.target.value)}
                required
              />
            </div>
          ))}
          <div className="mb-3">
            <input
              type="number"
              min="1"
              max={options.length}
              className="form-control"
              placeholder="Enter Correct Option Number (1-4)"
              value={correctOption}
              onChange={(event) => setCorrectOption(event.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Publish
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuestionForm;
