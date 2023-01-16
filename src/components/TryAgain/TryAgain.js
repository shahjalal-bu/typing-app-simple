import "./TryAgain.css";

export const TryAgain = ({ handleTryAgain, detailContainer }) => {
  const { words, characters, mistakes } = detailContainer;
  return (
    <div className="try-again-container">
      <h1>Test Results</h1>

      <div className="result-container">
        {/* Test Results */}
        <p>
          <b>Characters: {characters}</b>
        </p>
        <p>
          <b>Mistakes:{mistakes}</b>
        </p>
        <p>
          <b>Speed:{words}</b>
        </p>
      </div>

      <button className="start-again-btn" onClick={() => handleTryAgain()}>
        Start Again
      </button>
    </div>
  );
};
