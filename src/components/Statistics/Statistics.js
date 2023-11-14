import{StatisticsScore} from './Statistics.styled';

export const Statistics = ({good, neutral, bad, countTotalFeedback, countPositiveFeedbackPercentage})=>{
      
return(
    <div>
        <StatisticsScore>
           <p>Good: {good}</p>
           <p>Neutral: {neutral}</p>
           <p>Bad: {bad}</p>  
           <p>Total: {countTotalFeedback}</p> 
           <p>Positive feedback: {countPositiveFeedbackPercentage}%</p>
        </StatisticsScore>
        
    </div>
)
}