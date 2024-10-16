import { useState } from "react";

const messages = ["Learn React", "Apply for jobs", "Invest your new income"];

export default function App() {
  return (
    <>
      <Steps />;
    </>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((o) => !o)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          {/* creating a reusable component that we can use anywhere and give it any content that we want */}
          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          {/* we are gonna create a reusable button that we can use instead of the two buttons that we had created in version one */}
          <div className="buttons">
            <Button textColor="#fff" bgColor="#7950f2" onClick={handlePrevious}>
              <span>⬅️</span> Previous
            </Button>
            <Button textColor="#fff" bgColor="#7950f2" onClick={handleNext}>
              Next <span>➡️</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}

/* we can keep adding more props to customize this button even more but we should avoid adding so much props and instead make use of the children prop so instead of passing text and emoji here which are basically content of the button so we simply pass the content in the button element above down here meaning passing in the JSX in the component down here so we can display it */
function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

/* to give the button element access to whatever content we wrote into the opening and closing tag we use the children prop which also makes our component more easy to reuse */

/* the children prop us a prop that each react component automatically recieves and the value of the children prop is exactly what is between the opening and the closing tag of the component and we do that by using the children keyword */

/* this technique is really useful for building generic components that don't know about their content before actually being used such as a modal window, a slider or a button */
