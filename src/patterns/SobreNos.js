import styled from "styled-components"

const SecaoDiv = styled.div`
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
    align-items: center;
    padding: 6rem 0;

    @media screen and (max-width: 500px) {
        padding: 5rem 1.5rem;
    }
`

const Span = styled.span`
    color: var(--main-color);
    font-weight: bold;
`

const Titulo = styled.h2`
    font-size: 3rem;
    font-weight: bold;
    color: var(--title-color);
    
    @media screen and (max-width: 500px) {
        text-align: center;
    }
`

const Paragrafo = styled.p`
    text-align: center;
    max-width: 792px;
    font-size: 1.2rem;
    line-height: 30px;
    color: var(--text-color);

    @media screen and (max-width: 500px) {
        text-align: start;
    }
`

export default function SobreNos() {
    return (
        <SecaoDiv>
            <Span>Sobre nós</Span>
            <Titulo>Por que somos diferentes?</Titulo>
            <Paragrafo>Nós focamos nos detalhes de tudo que fazemos. Tudo para ajudar as empresas de todo o mundo a se concentrarem naquilo que é realmente importante para elas.</Paragrafo>
        </SecaoDiv>
    )
}