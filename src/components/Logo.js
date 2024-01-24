import styled from 'styled-components'
import logo from '../assets/icones/logo.svg'

const LogoContainer = styled.a`
    color: var(--logo-color);
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    gap: .5rem;
    text-decoration: none;

    :hover {
        cursor: pointer;
    }
`

export default function Logo() {
    return (
        <LogoContainer href='/'>
            <img src={logo} alt='Logo da OptimusTech'/>
            <p>OptimusTech</p>
        </LogoContainer>
    )
}