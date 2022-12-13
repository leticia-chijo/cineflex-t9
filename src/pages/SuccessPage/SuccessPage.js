import { PageContainer, Title, TextContainer } from "./styled"

export default function SuccessPage() {
    return (
        <PageContainer>
            <Title>Pedido feito <br /> com sucesso!</Title>

            <TextContainer>
                <strong><p>Filme e sessão</p></strong>
                <p>Titanic</p>
                <p>12/13/2022 - 18h00</p>
            </TextContainer>

            <TextContainer>
                <strong><p>Ingressos</p></strong>
                <p>Assento 01</p>
            </TextContainer>

            <TextContainer>
                <strong><p>Comprador</p></strong>
                <p>Nome: Daenerys Targaryen</p>
                <p>CPF: 123.456.789-dracarys</p>
            </TextContainer>

            <button>Voltar para Home</button>

        </PageContainer>
    )
}

