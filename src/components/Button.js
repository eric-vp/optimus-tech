import styled from "styled-components";

const Button = styled.button`
    border: none;
    padding: .8rem 1rem;
    border-radius: .5rem;
    font-size: 1rem;
    color: ${props => props.color || 'var(--text-color)'};
    background-color: ${props => props.backgroundcolor || '#fff'};
    text-decoration: none;

    &:hover {
        cursor: pointer;
    }

@media screen and (max-width: 500px) {
    color: #fff;
    background: none;
    padding: .8rem;
    text-align: start;
}
`;

export default Button;