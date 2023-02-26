import { Component } from "react";
import { FeedbackOptions } from "./feedbackOptions/FeedbackOptions";
import { Section } from "./section/Section";
import { Statistics } from "./statistics/Statatistics";
import { Notification } from "./notification/Notification";

export class App extends Component {
state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  onLeaveFeedback = (value) => {
    this.setState((prevState) => ({
      [value]: prevState[value] + 1,
    }));
  };
  countTotalFeedBack = () => {
    const { good, bad, neutral } = this.state;
      return good + bad + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedBack());
  };

  render() {
    const { good, neutral, bad } = this.state;
    const keys = Object.keys(this.state);
    return (
      <>
        <Section title='Please leave feedback'>
        <FeedbackOptions
          options={keys}
          onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section>
          {good || neutral || bad > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedBack()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
            />
            ) : (
              <Notification message="No feedback given" />
            )}
        </Section>
      </>
    )
  }
}
