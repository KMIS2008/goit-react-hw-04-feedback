import {
        Button,
        ButtonContainer} from './FeedbackOptions.style.js'

export const FeedbackOptions = ({onLeaveFeedback, options})=>{
    return (
       
            <ButtonContainer>
                {options.map(option =>{
                    return (
                       <Button key = {option} 
                               type="button" 
                               onClick={()=>onLeaveFeedback(option)}>{option}</Button> 
                    )
                })}
                
               
            </ButtonContainer>
            
    )
}