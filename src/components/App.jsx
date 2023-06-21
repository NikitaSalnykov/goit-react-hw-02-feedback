import React, { Component } from "react"
import { Statistics } from "./Statistics/Statistics"
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions"
import { Notification } from "./Notification/Notification"
import { Section } from "./Section/Section"


export class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
  positivePercentage: '0%'
  }

  countTotalFeedback = () => {
    const {good, bad, neutral} = this.state
    return good + bad + neutral
  }
  
  countPositiveFeedbackPercentage = () => {
  const {good, bad, neutral, total} = this.state
  return total !== 0 ? (((good / (good + bad + neutral)) * 100).toFixed(2)) : 0}


  onLeaveFeedback = async (e) => {
    await this.setState((prevState) => {
      switch (e.target.name) {
        case 'good':
          return { good: prevState.good + 1 };
        case 'neutral':
          return { neutral: prevState.neutral + 1 };
        case 'bad':
          return { bad: prevState.bad + 1 };
        default:
          return prevState;
      }
    });
    
    await this.setState({ total: this.countTotalFeedback() });
    this.setState({ positivePercentage: this.countPositiveFeedbackPercentage() });
    };


  render() {
      const { good, neutral, bad, total, positivePercentage} = this.state
      const feedbackOptions  = ['Good','Neutral','Bad']

      return <>
        <Section title="Please leave feedback">
        <FeedbackOptions options={feedbackOptions } onLeaveFeedback={this.onLeaveFeedback}/>
        </Section>
        <Section title="Statistics">
          {total !== 0 ? <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}/> : <Notification message="There is no feedback"/>}
        </Section>
      </>
  }
  
  }

