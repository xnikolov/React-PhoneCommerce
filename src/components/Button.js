import styled from 'styled-components'

export const ButtonContainer = styled.button`
text-transford: capitalized;
font-size: 1.4rem;
background: transparent;
color: ${props => (props.cart ? "var(--mainYellow)" : "var(--lightBlue)")};
border: .5px solid var(--lightBlue);
border-color: ${props => (props.cart ? "var(--mainYellow)" : "var(--lightBlue)")};
border-radius: 10px;
padding: 0.2rem 0.5rem;
cursor: pointer;
transition: all .5s ease-in-out;
&:hover{
    background: ${props => (props.cart ? "var(--mainYellow)" : "var(--lightBlue)")};
    color: var(--mainWhite);
}
&:focus{
    outline:none;
}
`;