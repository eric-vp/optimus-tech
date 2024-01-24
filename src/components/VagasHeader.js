import styled from "styled-components"

const VagasContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 4rem;

    @media screen and (max-width: 500px) {
        margin-bottom: 2rem;
    }
`

const VagasSpan = styled.span`
    color: var(--main-color);
    background-color: var(--main-color-transparent);
    font-size: 14px;
    padding: 4px 12px;
    border-radius: 20px;
    margin-bottom: 16px;
`

const VagasH3 = styled.h3`
    color: var(--title-color);
    font-size: 2.25rem;
    margin-bottom: 20px;

    @media screen and (max-width: 500px) {
        text-align: center;
    }
`

const VagasP = styled.p`
    font-size: 1.25rem;
    color: var(--text-color);
`

export default function VagasHeader() {
    return (
        <VagasContainer>
            <VagasSpan>Vagas abertas!</VagasSpan>
            <VagasH3>Estamos procurando por talentos</VagasH3>
            <VagasP>Somos uma equipe 100% remota com pessoas do Brasil inteiro.</VagasP>
        </VagasContainer>
    )
}