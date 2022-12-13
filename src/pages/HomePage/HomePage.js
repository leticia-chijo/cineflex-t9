import { PageContainer, ListContainer } from "./styled"
import MovieCard from "../../components/MovieCard/MovieCard"
import { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL } from "../../constants/urls"
import { Link } from "react-router-dom"

export default function HomePage() {
    const [movies, setMovies] = useState(undefined)

    useEffect(() => {
        axios.get(`${BASE_URL}/movies`)
            .then((res) => setMovies(res.data))
            .catch((err) => console.log(err.response.data))
    }, [])

    if (movies === undefined) {
        return <div>Carregando...</div>
    }

    return (
        <PageContainer>
            Selecione o filme
            <ListContainer>
                {movies.map((m) => (
                    <Link key={m.id} to={`/sessoes/${m.id}`}>
                        <MovieCard  poster={m.posterURL} />
                    </Link>
                ))}
            </ListContainer>
        </PageContainer>
    )
}