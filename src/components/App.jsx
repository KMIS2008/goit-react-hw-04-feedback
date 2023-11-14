import { GlobalStyle } from './GlobalStyle';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import {Statistics} from './Statistics/Statistics';
import { Section } from './Section/Section';
import {Notification} from './Notification/Notification';
import { useState } from 'react';

export const App =()=> {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral]= useState(0);
  const [bad, setBad] = useState (0);

  const countTotalFeedback = ()=>{
    return good + neutral + bad};
    
  const countPositiveFeedbackPercentage = ()=> 
   {return Math.round((good*100)/(good + neutral + bad))};

  const onLeaveFeedback =state=>{
    switch (state){
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral=>prevNeutral+1);
        break;
        case 'bad':
          setBad(prevBad=>prevBad+1);
          break;
        default:
          return;
    }
  }
   
    const countTotal = countTotalFeedback();
  return (
    <div>
      <Section title="Please leave feadback">
        <FeedbackOptions onLeaveFeedback = {onLeaveFeedback} options = {Object.keys({good, neutral, bad})}/>
      </Section>

      <Section title="Statistics">
       {countTotal !==0 ? 
       (<Statistics good = {good} 
                    neutral = {neutral} 
                    bad = {bad}
                    countTotalFeedback = {countTotalFeedback()}
                    countPositiveFeedbackPercentage = {countPositiveFeedbackPercentage()} /> ):
        (<Notification messege = "There is no feedback"/>)}
      </Section>

      <GlobalStyle/>

    </div>
  );
};
