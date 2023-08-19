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
 

  const handleDeleteQuestion = (questionId) => {
    axios.post("http://localhost:4000/questions/delete", { id: questionId })
      .then((res) => {
        if (res.status === 204) {
          alert("Data deleted successfully");
          // You might also want to update the UI here to reflect the deleted question
          fetchQuestions(); // This will refresh the questions list after deletion
        } else {
          alert("Error deleting data");
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Error deleting data");
      });
  };
  
    
  
  

  return (
    <>
      <span>Total Questions: </span><span>{questions.length}</span>
    <div className="container mt-5">
      {questions  && (
        <div className="row">
          {questions.map((question) => (
            <div key={question.id} className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">{question.question}</h3>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">{question.option1}</li>
                    <li className="list-group-item">{question.option2}</li>
                    <li className="list-group-item">{question.option3}</li>
                    <li className="list-group-item">{question.option4}</li>
                  </ul>
                  <div>
                  <span>Likes:</span>
                  <span>{question.likesnumber}</span>
                  </div>
                  <div>
                    <span>Answered:</span>
                    <span>{question.answered}</span>
                  </div>
                  <div>
                  <span>Correct:</span>
                  <span>{question.correct}</span>
                  </div>
                  <button type="button" class="btn btn-dark" onClick={() => handleDeleteQuestion(question._id)}>DELETE</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default Userquestions;
