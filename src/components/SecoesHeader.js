import styled from "styled-components";

const Lista = styled.ul`
    display: flex;
    flex-grow: 2;
    gap: .8rem;
    list-style: none;
    
    :hover {
        cursor: pointer;
        color: var(--main-color);
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

export default function SecoesHeader() {
    const listaMenu = ["Home", "Produtos", "Recursos", "Sobre nós"];

    return (
        <Lista>{
            listaMenu.map((item) => {
                return <Item key={item}><Anchor href="/">{item}</Anchor></Item>
            })
        }</Lista>
    )
}