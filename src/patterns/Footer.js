import styled from "styled-components"
import Button from "../components/Button"

const FooterSection = styled.footer`
    background-color: var(--footer-bg-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 6rem;
`

const Titulo = styled.h3`
    font-size: 2.25rem;
    color: var(--title-color);
    margin-bottom: 20px;
`

const Descricao = styled.span`
    font-size: 1.25rem;
    color: var(--text-color);
    margin-bottom: 40px;
`

const Form = styled.form`
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
`

const Input = styled.input`
    font-size: 1rem;
    width: 360px;
    padding: .65rem;
    border: 2px solid var(--border-color);
    border-radius: 10px;
    margin-right: 1rem;
`

const Copyrights = styled.span`
    color: var(--text-color);
`

export default function Footer() {
    return (
        <FooterSection>
            <Titulo>Acompanhe as nossas oportunidades</Titulo>
            <Descricao>Seja o primeiro a saber quando novas vagas serão abertas!</Descricao>
            <Form action="">
                <Input type="email" placeholder="Seu e-mail" />
                <Button
                    color="#fff"
                    backgroundcolor="var(--main-color)"
                >
                    Cadastrar
                </Button>
            </Form>
            <Copyrights>© 2022 OptimusTech. Todos os direitos reservados.</Copyrights>
        </FooterSection>
    )
}