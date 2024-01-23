import styled from 'styled-components'
import logo from '../assets/icones/logo.svg'

const LogoContainer = styled.div`
    color: var(--logo-color);
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    gap: .5rem;

    :hover {
        cursor: pointer;
    }
`

export default function Logo() {
    return (
        <LogoContainer>
            <img src={logo} alt='Logo da OptimusTech'/>
            <p>OptimusTech</p>
        </LogoContainer>
    )
}