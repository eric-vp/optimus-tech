import styled from "styled-components";

const ItemDiv = styled.div`
    width: 280px;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: start;
`

const ItemH2 = styled.h2`
    color: var(--main-color);
    font-size: 60px;
`

const ItemSpan = styled.span`
    color: var(--title-color);
    font-size: 18px;
`

const ItemP = styled.p`
    color: var(--text-color);
    line-height: 24px;
`

export default function MetricaItem({dados, descricao, children}) {
    return (
        <ItemDiv>
            <ItemH2>{dados}</ItemH2>
            <ItemSpan>{descricao}</ItemSpan>
            <ItemP>{children}</ItemP>
        </ItemDiv>
    )
}