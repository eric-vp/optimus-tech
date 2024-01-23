import styled from "styled-components"

const DivCard = styled.div`
    width: 100%;
    border: 1px solid var(--border-color);
    border-radius: 20px;
    padding: 1.5rem;
    margin-bottom: 24px;

    &:last-child {
        margin-bottom: 0;
    }

    &:hover {
        cursor: pointer;
    }
`

const TituloCard = styled.h4`
    font-size: 18px;
    color: var(--title-color);
    font-weight: 600;
`

const InformacoesCard = styled.div`
    color: var(--text-color);
    display: flex;
    gap: 24px;
    margin-top: 2rem;
`

export default function VagasCard({ titulo, horario, salario }) {
    return (
        <DivCard>
            <TituloCard>{titulo}</TituloCard>
            <InformacoesCard>
                <span>{horario}</span>
                <span>Faixa salarial: {salario}</span>
            </InformacoesCard>
        </DivCard>
    )
}