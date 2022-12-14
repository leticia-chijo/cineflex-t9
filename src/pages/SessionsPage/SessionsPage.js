import { PageContainer, ListContainer } from "./styled"
import SessionCard from "../../components/SessionCard/SessionCard"
import Footer from "../../components/Footer/Footer"
import { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL } from "../../constants/urls"
import { useParams } from "react-router-dom"

export default function SessionsPage() {
    const { idFilme } = useParams()
    const [movie, setMovie] = useState(undefined)

    useEffect(() => {
        axios.get(`${BASE_URL}/movies/${idFilme}/showtimes`)
            .then((res) => setMovie(res.data))
            .catch((err) => console.log(err.response.data))
    }, [])

    if (movie === undefined) {
        return <div>Carregando...</div>
    }

    return (
        <PageContainer>
            Selecione o horário
            <ListContainer>
                {movie.days.map((s) => <SessionCard key={s.id} session={s} />)}
            </ListContainer>
            <Footer movieTitle={movie.title} poster={movie.posterURL}/>
        </PageContainer>
    )
}