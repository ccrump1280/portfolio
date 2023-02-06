import styled, {css} from 'styled-components'

export const Button = styled.button `
    background: transparent;
    border: none;
    color: #3EB489;
    margin: 0 1em;
    padding: 0.25em 1em;
    font-size: 16px;

    ${ props => props.primary && css `
        border: 1px solid #3EB489;
        font-size: 1rem;
        padding: 0.7rem;
        border-radius: 4px;
    `};
`
