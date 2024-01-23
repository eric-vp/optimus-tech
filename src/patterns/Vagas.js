import VagasHeader from "../components/VagasHeader"
import styled from "styled-components"
import imagem from "../assets/imagens/Image.png"
import VagasCard from "../components/VagasCard"
import VagasTitulo from "../components/VagasTitulo"
import designVagas from "../designVagas.json"
import devVagas from "../devVagas.json"

const Section = styled.section`
    padding: 6rem;
`

const Imagem = styled.img`
    width: 100%;
`

const VagasDiv = styled.div`
    margin-bottom: 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 768px;
    margin: 0 auto;
`

export default function Vagas() {    
    return (
        <Section>
            <VagasHeader />
            <Imagem src={imagem} alt="Grupo de pessoas em uma sala de reunião." />
            <VagasDiv>
                <VagasTitulo>Design</VagasTitulo>
                {designVagas.map(vaga => {
                    return <VagasCard
                        key={vaga.titulo}
                        titulo={vaga.titulo}
                        horario={vaga.horario}
                        salario={vaga.salario}
                    />
                })}
                <VagasTitulo>Desenvolvimento de Software</VagasTitulo>
                {devVagas.map(vaga => {
                    return <VagasCard
                        key={vaga.titulo}
                        titulo={vaga.titulo}
                        horario={vaga.horario}
                        salario={vaga.salario}
                    />
                })}
            </VagasDiv>
        </Section>
    )
}