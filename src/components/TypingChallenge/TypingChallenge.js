import "./TypingChallenge.css";

export const TypingChallenge = ({
  handleOnType,
  timervalue,
  timerstarted,
  selectedPara,
}) => {
  return (
    <div className="typing-challenge">
      <div className="timer-container">
        <p className="timer">00:{timervalue}</p>
        {!timerstarted && (
          <p className="timer-info">Start Typing to Start Test</p>
        )}
      </div>

      <div className="textarea-container">
        <div className="textarea-left ">
          <textarea
            className="textarea"
            disabled={true}
            value={selectedPara}
          ></textarea>
        </div>
        <div className="textarea-right">
          <textarea
            className="textarea"
            placeholder="Start Typing"
            onChange={(e) => handleOnType(e.target.value)}
          ></textarea>
        </div>
      </div>
    </div>
  );
};
