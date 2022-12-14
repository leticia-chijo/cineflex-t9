import { Link } from "react-router-dom"
import { PageContainer, Title, TextContainer } from "./styled"

export default function SuccessPage({ successInfo }) {
    const { time, date, movieTitle, tickets, buyers } = successInfo

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
                {buyers.map((b) => (
                    <>
                        <strong><p>Comprador Assento {b.seatName}</p></strong>
                        <p>Nome: {b.name}</p>
                        <p>CPF: {b.cpf}</p>
                        <br />
                    </>
                ))}

            </TextContainer>

            <Link to="/">
                <button>Voltar para Home</button>
            </Link>

        </PageContainer>
    )
}

