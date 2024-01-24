import styled from "styled-components";
import { bool } from 'prop-types';
import Button from "./Button";

const Div = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    @media screen and (max-width:500px) {
        width: 70vw;
        height: 100vh;
        padding: 4rem 1rem;
        background-color: var(--main-color);
        flex-direction: column;
        color: #fff;
        position: fixed;
        top: 0;
        right: 0;
        z-index: 3;
        justify-content: flex-start;
        transition: .2s;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    }
`

const Lista = styled.ul`
    display: flex;
    flex-grow: 2;
    gap: .8rem;
    list-style: none;
    
    :hover {
        cursor: pointer;
        color: var(--main-color);
    }

    @media screen and (max-width:500px) {
        flex-direction: column;
        flex-grow: 0;
        color: #fff;
        margin-bottom: .8rem;

        :hover {
            color: inherit;
        }
    }
`

const Item = styled.li`
    padding: .8rem;
    border-radius: 5px;
    
    &:hover {
        background-color: var(--main-color-transparent);
    }
`

const Anchor = styled.a`
    text-decoration: none;
    color: inherit;
`

const DivBotoes = styled.div`
    display: flex;
    gap: 1rem;

    :hover {
        cursor: pointer;
    }

    @media screen and (max-width:500px) {
        flex-direction: column;
        color: #fff;
        align-self: flex-start;
        gap: .8rem;
    }
`

export default function SecoesHeader({ open }) {
    const listaMenu = ["Home", "Produtos", "Recursos", "Sobre nós"];

    return (
        <Div open={open}>
            <Lista>{
                listaMenu.map((item) => {
                    return <Item key={item}><Anchor href="/">{item}</Anchor></Item>
                })
            }
            </Lista>
            <DivBotoes>
                <Button>
                    <Anchor href="/">Entrar</Anchor>
                </Button>
                <Button
                    color="#fff"
                    backgroundcolor="var(--main-color)"
                >
                    <Anchor href="/">Cadastrar</Anchor>
                </Button>
            </DivBotoes>
        </Div>
    )
}

SecoesHeader.propTypes = {
    open: bool.isRequired,
}