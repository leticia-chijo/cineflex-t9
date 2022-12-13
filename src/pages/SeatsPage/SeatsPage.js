import { Form, PageContainer, SeatsContainer, CaptionCircle, CaptionContainer, CaptionItem } from "./styled"
import Seat from "../../components/Seat/Seat"
import Footer from "../../components/Footer/Footer"

export default function SeatsPage() {
    return (
        <PageContainer>
            Selecione o(s) assento(s)

            <SeatsContainer>
                <Seat />
                <Seat />
                <Seat />
                <Seat />
                <Seat />
                <Seat />
                <Seat />
                <Seat />
                <Seat />
                <Seat />
                <Seat />
                <Seat />
            </SeatsContainer>

            <CaptionContainer>
                <CaptionItem>
                    <CaptionCircle status="selected" />
                    Selecionado
                </CaptionItem>
                <CaptionItem>
                    <CaptionCircle status="available" />
                    Disponível
                </CaptionItem>
                <CaptionItem>
                    <CaptionCircle status="unavailable" />
                    Indisponível
                </CaptionItem>
            </CaptionContainer>

            <Form>
                <input placeholder="Digite seu nome..." />
                <input placeholder="Digite seu CPF..." />
            </Form>

            <Footer />
        </PageContainer>
    )
}