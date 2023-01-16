import { TypingChallengeContainer } from "../TypingChallengeContainer/TypingChallengeContainer";
import { TryAgain } from "./../TryAgain/TryAgain";
import "./TestContainer.css";

export const TestContainer = ({
  handleOnType,
  timerstarted,
  timervalue,
  handleTryAgain,
  selectedPara,
  detailContainer
}) => {
  
  return (
    <div className="test-container">
      {/* Show the try again or start screen */}
      
      {timervalue > 0 ? (
        <div className="typing-challenge-cont">
          <TypingChallengeContainer handleOnType={handleOnType}
          timervalue={timervalue}
          timerstarted={timerstarted}
          selectedPara={selectedPara}
          detailContainer={detailContainer}
          />
        </div>
      ) : (
        <div className="try-again-cont">
          <TryAgain handleTryAgain={handleTryAgain} detailContainer={detailContainer} />
        </div>
      )}
    </div>
  );
};
