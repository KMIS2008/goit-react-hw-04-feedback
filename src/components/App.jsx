import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import {Statistics} from './Statistics/Statistics';
import { Section } from './Section/Section';
import {Notification} from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

   countTotalFeedback = ()=>{
    const { good, neutral, bad } = this.state;
    return good + neutral + bad};
    
   countPositiveFeedbackPercentage = ()=> 
   {const { good, neutral, bad } = this.state;
    return Math.round((good*100)/(good + neutral + bad))};

   onLeaveFeedback = state => {
     this.setState(prevState => {
      return ({[state]: prevState[state] + 1})
      })
     }

  render(){
    const {good, neutral, bad} = this.state;
    const countTotal = this.countTotalFeedback();
  return (
    <div>
      <Section title="Please leave feadback">
        <FeedbackOptions onLeaveFeedback = {this.onLeaveFeedback} options = {Object.keys(this.state)}/>
      </Section>

      <Section title="Statistics">
       {countTotal !==0 ? 
       (<Statistics good = {good} 
                    neutral = {neutral} 
                    bad = {bad}
                    countTotalFeedback = {this.countTotalFeedback()}
                    countPositiveFeedbackPercentage = {this.countPositiveFeedbackPercentage()} /> ):
        (<Notification messege = "There is no feedback"/>)}
      </Section>

      <GlobalStyle/>

    </div>
  );
  }
};
