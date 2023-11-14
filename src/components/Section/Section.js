import {Title} from './Section.style'

export const Section = ({title, children})=> {
return (
    <Title>
        {title}
       { children}
    </Title>

)
}