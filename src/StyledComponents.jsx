import styled, {css} from 'styled-components'

export const Button = styled.button `
    background: transparent;
    border: none;
    color: #3EB489;
    margin: 1rem 1rem;
    padding: 0.25em 1em;
    font-size: 16px;

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
        font-family: Lato;
    }
`
export const TextArea = styled.textarea `
    background-color: #4B4B4B;
    border: none;
    border-radius: 4px;
    width: 100%;

    &::placeholder {
        font-size: 1rem;
        font-family: Lato;
    }
`