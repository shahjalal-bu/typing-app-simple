import React from "react";
import { typingTestData } from "../../data/source";
import { randomElementSelector } from "../../helper/randomSelector";
import { testDetailsCalculator } from "../../helper/testDetailsCalculator";
import { TestContainer } from "../TestContainer/TestContainer";
import "./App.css";
const defaultState = {
  timerstarted: false,
  timervalue: 60,
  selectedPara: randomElementSelector(typingTestData),
  detailContainer: {
    words: 0,
    characters: 0,
    mistakes: 0,
  },
};
class App extends React.Component {
  constructor() {
    super();

    this.state = defaultState;
  }
  handleOnType = (inputValue) => {
    if (!this.state.timerstarted) this.startTimer();
    this.setState({
      detailContainer: testDetailsCalculator(
        this.state.selectedPara,
        inputValue
      ),
    });
  };
  handleTryAgain = () => {
    this.setState(defaultState);
  };
  startTimer = () => {
    this.setState({ timerstarted: true });
    const timer = setInterval(() => {
      if (this.state.timervalue > 0) {
        this.setState({ timervalue: this.state.timervalue - 1 });
      } else {
        clearInterval(timer);
      }
    }, 1000);
  };

  render() {
    return (
      <div className="app-container">
        <h1 className="main-heading">Speedy Type</h1>
        <div className="test-container-main">
          <TestContainer
            handleOnType={this.handleOnType}
            timerstarted={this.state.timerstarted}
            detailContainer={this.state.detailContainer}
            selectedPara={this.state.selectedPara}
            timervalue={this.state.timervalue}
            handleTryAgain={this.handleTryAgain}
          />
        </div>
      </div>
    );
  }
}

export default App;
