import styled from "styled-components";
import MetricaItem from "../components/MetricaItem";

const MetricaContainer = styled.section`
    display: flex;
    justify-content: space-between;
    margin-bottom: 6rem;
    padding: 0 8rem;

    @media screen and (max-width: 500px) {
        flex-direction: column;
        padding: 0 1.5rem;
        gap: 2rem;
        margin-bottom: 2rem;
    }
`

export default function Metricas() {
    return (
        <MetricaContainer>
            <MetricaItem
                dados="400+"
                descricao="Projetos concluídos"
            >
                Nós ajudamos a construir mais de 400 projetos incríveis.
            </MetricaItem>
            <MetricaItem
                dados="100+"
                descricao="Colaboradores"
            >
                Temos mais de 100 colaboradores no nosso time que se preocupam com nossos clientes.
            </MetricaItem>
            <MetricaItem
                dados="20k"
                descricao="Downloads"
            >
                Nossos projetos que estão disponíveis em lojas já foram baixados mais de 20.000 vezes.
            </MetricaItem>
            <MetricaItem
                dados="500+"
                descricao="Reviews 5 estrelas"
            >
                Estamos orgulhosos de contar com mais de 500 reviews 5 estrelas em nossos produtos.
            </MetricaItem>
        </MetricaContainer>
    )
}