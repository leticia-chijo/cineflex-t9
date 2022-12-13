import { PageContainer, ListContainer } from "./styled"
import SessionCard from "../../components/SessionCard/SessionCard"
import Footer from "../../components/Footer/Footer"

export default function SessionsPage() {
    return (
        <PageContainer>
            Selecione o horário
            <ListContainer>
                <SessionCard />
                <SessionCard />
                <SessionCard />
                <SessionCard />
            </ListContainer>
            <Footer />
        </PageContainer>
    )
}