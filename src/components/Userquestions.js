import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
const Userquestions = () => {
  const [questions, setQuestions] = useState([]);
  const { user } = useAuth0();
  const username = user.name;
  useEffect(() => {
    fetchQuestions();
  },);

  const fetchQuestions = () => {
    axios.get(`https://api-stpn.onrender.com/questions/${username}`)
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const deleteHandler = (id) => {
  axios.delete(`https://api-stpn.onrender.com/questions/${id}`)
    .then((response) => {
      console.log("Question deleted successfully");
      alert("Question deleted successfully");
    })
    .catch((error) => {
      console.error(error);
      alert("Error deleting data");
    });
};

  
  
  const cardGradient = "linear-gradient(to right, #1ABC9C, #2ECC71)";
const cardShadow = "0px 5px 15px rgba(46, 204, 113, 0.3)";
  return (
    <div className="container mt-5 " style={{background:cardGradient,boxShadow:cardShadow}}>
      <h2 className="mb-4 text-secondary fw-bold">Your Questions</h2>
      <div className="row">
        {questions.map((question) => (
          <div key={question.id} className="col-md-4 mb-4">
            <div className="card threed-card"> 
              <div className="card-body">
                <h3 className="card-title">{question.question}</h3>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{question.option1}</li>
                  <li className="list-group-item">{question.option2}</li>
                  <li className="list-group-item">{question.option3}</li>
                  <li className="list-group-item">{question.option4}</li>
                </ul>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <span className="mr-2">
                      ❤️: {question.likesnumber}
                    </span>
                    <i className="far fa-heart"></i>
                  </div>
                  <div>
                    <span>Answered: {question.answered}</span>
                  </div>
                  <div>
                    <span>✔️: {question.correct}</span>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-danger mt-3"
                  onClick={() => deleteHandler(question._id)}
                >
                  DELETE
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Userquestions;
