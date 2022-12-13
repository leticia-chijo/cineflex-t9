import { MovieContainer, MovieImage } from "./styled"

export default function MovieCard({ poster }) {
    return (
        <MovieContainer>
            <MovieImage src={poster} alt="poster" />
        </MovieContainer>
    )
}

