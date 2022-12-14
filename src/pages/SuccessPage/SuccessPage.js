import { Link } from "react-router-dom"
import { PageContainer, Title, TextContainer } from "./styled"

export default function SuccessPage({ successInfo }) {
    const { time, date, movieTitle, tickets, name, cpf } = successInfo

    return (
        <PageContainer>
            <Title>Pedido feito <br /> com sucesso!</Title>

            <TextContainer>
                <strong><p>Filme e sessão</p></strong>
                <p>{movieTitle}</p>
                <p>{date} - {time}</p>
            </TextContainer>

            <TextContainer>
                <strong><p>Ingressos</p></strong>
                {tickets.map(t => <p key={t}>Assento {t}</p>)}

            </TextContainer>

            <TextContainer>
                <strong><p>Comprador</p></strong>
                <p>Nome: {name}</p>
                <p>CPF: {cpf}</p>
            </TextContainer>

            <Link to="/">
                <button>Voltar para Home</button>
            </Link>

        </PageContainer>
    )
}

