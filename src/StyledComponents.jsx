import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';

export const Button = styled.button `
    color: #3EB489;
    text-decoration: none;
    background-color: inherit;
    border: none;
    padding: 0;
    ${ props => props.primary && css `
        border: 1px solid #3EB489;
        font-size: 1rem;
        padding: 0.7rem;
        border-radius: 4px;
    `};
` 

export const Input = styled.input `
    background-color: #4B4B4B;
    border: none;
    border-radius: 4px;
    height: 1.8rem;
    width: 100%;
    margin-bottom: 1rem;
    &::placeholder {
        font-size: 1rem;
    }
`
export const TextArea = styled.textarea `
    background-color: #4B4B4B;
    border: none;
    border-radius: 4px;
    width: 100%;

    &::placeholder {
        font-size: 1rem;
    }
`
export const StyledLink = styled(Link) `
    color: #3EB489;
    text-decoration: none;

    ${ props => props.primary && css `
        border: 1px solid #3EB489;
        font-size: 1rem;
        padding: 0.7rem;
        border-radius: 4px;
    `};
`