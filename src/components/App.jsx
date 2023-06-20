import React, { Component } from "react"
import { Statistics } from "./Statistics/Statistics"


export class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
  positivePercentage: '0%'
  }

  totalReview = () => {
    const {good, bad, neutral} = this.state
    return good + bad + neutral
  }
  
  calculatePositivePercentage = () => {
  const {good, bad, neutral, total} = this.state
  return total!== 0 ? (((good / (good + bad + neutral)) * 100).toFixed(2) + "%") : "0%"}


  reviewBtn = (e) => {
    this.setState((prevState) => {
      if (e.target.name === 'good') {
        return { good: prevState.good + 1 }
      }
      if (e.target.name === 'neutral') {
        return { neutral: prevState.neutral + 1 }
      }
      if (e.target.name === 'bad') {
        return { bad: prevState.bad + 1 }
      }
    }, () => {
      this.setState({ total: this.totalReview() });
      this.setState({ positivePercentage: this.calculatePositivePercentage() });
    });
  }

    render() {
      const { good, neutral, bad, total, positivePercentage } = this.state
      return <>
        <section>
          <h3>Please leave feedback</h3>
          <ul>
            <li><button name="good" onClick={this.reviewBtn}>Good</button></li>
            <li><button name="neutral" onClick={this.reviewBtn}>Neutral</button></li>
            <li><button name="bad" onClick={this.reviewBtn}>Bad</button></li>
          </ul>
        </section>
        <section>
          <h3>Please leave feedback</h3>
          {total !== 0 ? <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}/> : <p>There is no feedback</p>}
        </section>
      </>
    }
  }


//Statistics good={} neutral={} bad={} total={} positivePercentage={}