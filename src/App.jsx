import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

const INITIAL_INPUT = {
  initialInvestment: 15000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [userInputContent, setUserInputContent] = useState(INITIAL_INPUT);

  const isInputValid = userInputContent.duration > 0 ? true : false;

  function ChangeUserInput(inputIdentifier, newUserInput) {
    setUserInputContent((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newUserInput,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput onChangeInput={ChangeUserInput} userInput={userInputContent} />
      {!isInputValid && <p className="center">Please input valid data!</p>}
      {isInputValid && <Results userInput={userInputContent} />}
    </>
  );
}

export default App;
