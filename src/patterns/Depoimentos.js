import styled from "styled-components"
import avatar from "../assets/imagens/Avatar.png"

const DepoimentosContainer = styled.div`
    padding: 0 8rem;

    @media screen and (max-width: 500px) {
        padding: 0;
    }
`

const DepoimentosSection = styled.section`
    background-color: var(--main-color-transparent);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 4rem;
    margin-bottom: 6rem;

    @media screen and (max-width: 500px) {
        padding: 1.5rem;
        border-radius: 0;
        margin-bottom: 0;
    }
`

const Span = styled.span`
    color: var(--main-color);
    font-size: 14px;
    margin-bottom: 1rem;
    font-weight: 600;
`

const Paragrafo = styled.p`
    color: var(--title-color);
    font-size: 2.25rem;
    margin-bottom: 2rem;
    font-weight: 600;

    @media screen and (max-width: 500px) {
        text-align: start;
        font-size: 1.8rem;
    }
`

const Imagem = styled.img`
    height: 56px;
    margin-bottom: 1rem;
`

const NomeDepoimento = styled.span`
    color: var(--title-color);
    margin-bottom: .25rem;
`

const CargoDepoimento = styled.span`
    font-size: 14px;
    color: var(--text-color);
`

export default function Depoimentos() {
    return (
        <DepoimentosContainer>
            <DepoimentosSection>
                <Span>Veja o que nossos colaboradores falam sobre nós</Span>
                <Paragrafo>OptimusTech se importa com a saúde dos seus colaboradores e sempre procura nos dar todo tipo de auxílio possível.</Paragrafo>
                <Imagem src={avatar} alt="Imagem de uma pessoa" />
                <NomeDepoimento>Júlia Castro</NomeDepoimento>
                <CargoDepoimento>Desenvolvedora Web</CargoDepoimento>
            </DepoimentosSection>
        </DepoimentosContainer>
    )
}