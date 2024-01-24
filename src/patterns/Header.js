import styled from "styled-components"
import Logo from "../components/Logo"
import SecoesHeader from "../components/SecoesHeader"
import Menu from "../components/Menu"
import { useState } from "react"

const NavCabecalho = styled.nav`
    color: var(--text-color);
    display: flex;
    gap: 8rem;
    align-items: center;
    padding: 1rem 8rem;

    @media screen and (max-width: 500px) {
        padding: 1rem;
        gap: .5rem;
        justify-content: space-between;
    }
`

const Overlay = styled.div`
@media screen and (max-width: 500px){
    position: fixed;
    display: ${props => props.open ? "block" : "none"};
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.5);
    z-index: 2;
    cursor: pointer;
}
`

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header>
            <NavCabecalho>
                <Overlay open={open} onClick={() => setOpen(!open)} />
                <Logo />
                <Menu open={open} setOpen={setOpen} />
                <SecoesHeader open={open} setOpen={setOpen} />
            </NavCabecalho>
        </header>
    )
}