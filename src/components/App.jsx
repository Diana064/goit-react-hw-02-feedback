import Feedback from 'components/feedback/Feedback.jsx';
import '../index.css';
import { Section } from 'components/title/Title.jsx';
import Buttons from 'components/buttons/Buttons.jsx';
import React, { Component } from 'react';
import Statistics from 'components/statistics/Statistics.jsx';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  clickGood = () => {
    console.log('click');
    this.setState(prevState => {
      //   console.log(prevState);
      return {
        good: prevState.good + 1,
      };
    });
  };
  clickNeutral = () => {
    console.log('click');
    this.setState(prevState => {
      //   console.log(prevState);
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  clickBad = () => {
    console.log('click');
    this.setState(prevState => {
      //   console.log(prevState);
      return {
        bad: prevState.bad + 1,
      };
    });
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.bad + this.state.neutral;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <h1>Please leave feedback</h1>
        <Buttons
          onClickGood={this.clickGood}
          onClickNeutral={this.clickNeutral}
          onClickBad={this.clickBad}
        />

        <h2>Statisticks</h2>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
        />
      </div>
    );
  }
}
