import React from "react";


const ApiDocumentation = () => {
  return (
    <div className="container blog-page">
      <header className="my-5 text-center">
        <h1>API Documentation</h1>
        <p className="lead">
          Welcome to the API documentation for the Question Management API. This
          API allows you to manage questions, retrieve information about
          questions, and perform various actions related to question management.
        </p>
      </header>

      <section className="base-url mb-5">
        <h2>Base URL</h2>
        <code>https://api-stpn.onrender.com</code>
      </section>

      <section className="endpoints">
        <h2>Endpoints</h2>

        <div className="endpoint card mb-4">
          <div className="card-body">
            <h3 className="card-title">Get All Questions</h3>
            <p className="card-text">Retrieve a list of all questions.</p>
            <p className="card-text">
              <strong>URL:</strong> <code>/questions</code>
            </p>
            <p className="card-text">
              <strong>Method:</strong> <code>GET</code>
            </p>
            <p className="card-text">
              <strong>Response:</strong>
              <br />
              <code>Status Code: 200 (OK)</code>
              <br />
              <code>
                Body:
                <pre>
                  {`
                    [
                    {
                        "question": "Sample question",
                        "option1": "Option 1",
                        // ... other properties
                    },
                    // ... other questions
                    ]
                  `}
                </pre>
              </code>
            </p>
          </div>
        </div>

        {/* Other endpoints */}
        {/* Add New Question */}
        <div className="endpoint card mb-4">
          <div className="card-body">
            <h3 className="card-title">Add New Question</h3>
            <p className="card-text">Add a new question to the system.</p>
            <p className="card-text">
              <strong>URL:</strong> <code>/questions</code>
            </p>
            <p className="card-text">
              <strong>Method:</strong> <code>POST</code>
            </p>
            <p className="card-text">
              <strong>Request Body:</strong>
              <pre>
                {`
                  {
                    "question": "Sample question",
                    "option1": "Option 1",
                    // ... other properties
                  }
                `}
              </pre>
            </p>
            <p className="card-text">
              <strong>Response:</strong>
              <br />
              <code>Status Code: 201 (Created)</code>
              <br />
              <code>
                Body:
                <pre>
                  {`
                    {
                      "message": "Question added successfully"
                    }
                  `}
                </pre>
              </code>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApiDocumentation;
