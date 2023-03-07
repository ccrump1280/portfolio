import styled, {css} from 'styled-components';

export const Button = styled.button `
    color: #3EB489;
    text-decoration: none;
    background-color: inherit;
    border: none;
    padding: 10px;
    display: block;
    width: fit-content;
    margin: 0 1.5rem;
    ${ props => props.primary && css `
        border: 1px solid #3EB489;
        font-size: 1rem;
        padding: 0.7rem;
        border-radius: 4px;
        margin: auto;

        &:hover {
            background: #3EB489;
            color: white;
            cursor: pointer; 
        }
    `};
    ${ props => props.isActive && css `
        background: #3EB489;
        color: white;
    `};
    ${ props => props.activeNav && css `
        color: white;
        background-color: #3EB489;
        border-radius: 4px;
    `};
    ${ props => props.mobileButton && css `
        padding: 0;
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