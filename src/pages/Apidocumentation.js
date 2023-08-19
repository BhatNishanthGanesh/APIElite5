import React from "react";

const ApiDocumentation = () => {
  return (
    <div className=" blue-grey lighten-4 blog-page">
      <header>
        <h1>API Documentation</h1>
        <p>
          Welcome to the API documentation for the Question Management API. This
          API allows you to manage questions, retrieve information about
          questions, and perform various actions related to question management.
        </p>
      </header>

      <section className="base-url">
        <h2>Base URL</h2>
        <code>https://api-stpn.onrender.com</code>
      </section>

      <section className="endpoints">
        <h2>Endpoints</h2>

        <div className="endpoint">
          <h3>Get All Questions</h3>
          <p>Retrieve a list of all questions.</p>
          <p>
            <strong>URL:</strong> <code>/questions</code>
          </p>
          <p>
            <strong>Method:</strong> <code>GET</code>
          </p>
          <p>
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

        {/* Other endpoints */}
        {/* Add New Question */}
        <div className="endpoint">
          <h3>Add New Question</h3>
          <p>Add a new question to the system.</p>
          <p>
            <strong>URL:</strong> <code>/questions</code>
          </p>
          <p>
            <strong>Method:</strong> <code>POST</code>
          </p>
          <p>
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
          <p>
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
      </section>
    </div>
  );
};

export default ApiDocumentation;
