import styled from "styled-components"
import Logo from "../components/Logo"
import SecoesHeader from "../components/SecoesHeader"
import Button from "../components/Button"

const NavCabecalho = styled.nav`
    color: var(--text-color);
    display: flex;
    gap: 8rem;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 8rem;
`

const DivBotoes = styled.div`
    display: flex;
    gap: 1rem;

    :hover {
        cursor: pointer;
    }
`

export default function Header() {
    return (
        <header>
            <NavCabecalho>
                <Logo />
                <SecoesHeader />
                <DivBotoes>
                    <Button>Entrar</Button>
                    <Button
                        color="#fff"
                        backgroundcolor="var(--main-color)"
                    >
                        Cadastrar
                    </Button>
                </DivBotoes>
            </NavCabecalho>
        </header>
    )
}