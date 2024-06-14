import React, { useState, useEffect } from "react";

const Question = (props) => {
  const [qno, setQno] = useState(parseInt(localStorage.getItem("qno")) || 0);
  const [selectedOption, setSelectedOption] = useState(
    localStorage.getItem("selectedOption") || null
  );
  const [answeredCorrectly, setAnsweredCorrectly] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(
    JSON.parse(localStorage.getItem("quizCompleted")) || false
  );
  const [score, setScore] = useState(
    parseInt(localStorage.getItem("score")) || props.score
  );

  function selected(e) {
    setSelectedOption(e.target.value);
    localStorage.setItem("selectedOption", e.target.value);
  }

  function submitHandler() {
    if (qno === props.question.length - 1) {
      setQuizCompleted(true);
      localStorage.setItem("quizCompleted", true);
      localStorage.removeItem("selectedOption"); // Clear selected option
    } else {
      setAnsweredCorrectly(selectedOption === props.question[qno].answer);
      setSelectedOption(null); // Reset selected option for the next question
      setQno(qno + 1);
      localStorage.setItem("qno", qno + 1);
      localStorage.removeItem("selectedOption"); // Clear selected option
    }
  }

  useEffect(() => {
    if (answeredCorrectly) {
      setScore(score + 1);
      localStorage.setItem("score", score + 1);
      setAnsweredCorrectly(false); // Reset flag
    }
  }, [answeredCorrectly, score]);

  useEffect(() => {
    // Retain selected option for the next question
    const preselectedOption = props.question[qno].preselectedOption;
    if (preselectedOption) {
      setSelectedOption(preselectedOption);
    }
  }, [qno, props.question]);

  return (
    <div className="question-container flex flex-col items-center mt-10 h-screen">
      {quizCompleted ? (
        <div className="quiz-completion-message flex flex-col items-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Congrats! You have scored {score}.
          </h1>
        </div>
      ) : (
        <>
          <header className="question-header flex items-center justify-between py-4 px-8 bg-gray-200 rounded-t-md">
            <div className="text-center flex-col items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-700">
                Score: {score} / {props.question.length}
              </h2>
              <h3 className="text-lg text-gray-600">
                Question {qno + 1} of {props.question.length}
              </h3>
            </div>
          </header>

          <main className="question-body flex flex-col items-start p-8 space-y-4">
            <h2 className="text-xl font-medium text-gray-800 question-text">
              {props.question[qno].question}
            </h2>
            <ul className="options-list space-y-2 options-container">
              {props.question[qno].options.map((item, key) => (
                <li
                  key={key}
                  className="option-item flex items-center space-x-4"
                >
                  <input
                    onClick={selected}
                    value={item}
                    type="radio"
                    name="question"
                    id={key}
                    checked={selectedOption === item} // Make sure the option is preselected
                  />
                  <label htmlFor={key} className="text-gray-700 break-words">
                    {item}
                  </label>
                </li>
              ))}
            </ul>
            <button
              type="submit"
              onClick={submitHandler}
              disabled={selectedOption === null}
              className="btn px-4 py-2 rounded-md font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline disabled:opacity-50"
            >
              {qno === props.question.length - 1 ? "Submit" : "Next"}
            </button>
          </main>
        </>
      )}
    </div>
  );
};

export default Question;
