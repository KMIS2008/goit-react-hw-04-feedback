import styled from 'styled-components';

export const ButtonContainer = styled.div`
width: 400px;
display: flex;
justify-content: center;
margin: 0 auto;
margin-bottom: 50px;
margin-top: 20px;
gap: 20px;
`

export const Button = styled.button`
width: 100px;
display: block;
margin: 0 auto;
padding: 5px 5px;
text-align: center;
font-size: 18px;
border: 1px solid ${p=>p.theme.colors.border};
border-radius: 5px;
box-shadow: rgb(169, 158, 158) 0px 2px 5px 0px;
`