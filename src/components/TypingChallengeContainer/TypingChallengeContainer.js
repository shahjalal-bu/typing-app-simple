import { ChallengeDetailsCard } from "../ChallengeDetailsCard/ChallengeDetailsCard";
import { TypingChallenge } from "../TypingChallenge/TypingChallenge";
import "./TypingChallengeContainer.css";

export const TypingChallengeContainer = ({
  handleOnType,
  timervalue,
  timerstarted,
  selectedPara,
  detailContainer,
}) => {
  const { words, characters, mistakes } = detailContainer;
  return (
    <div className="typing-challenge-container">
      <div className="details-container">
        {/* Words Typed */}
        <ChallengeDetailsCard cardName="Words" cardValue={words} />
        {/* Characters Typed */}
        <ChallengeDetailsCard cardName="Characters" cardValue={characters} />
        {/* Mistakes */}
        <ChallengeDetailsCard cardName="Mistakes" cardValue={mistakes} />
      </div>

      {/* Typing Challenge */}
      <div className="type-challenge-cont">
        <TypingChallenge
          handleOnType={handleOnType}
          timervalue={timervalue}
          timerstarted={timerstarted}
          selectedPara={selectedPara}
        />
      </div>
    </div>
  );
};
