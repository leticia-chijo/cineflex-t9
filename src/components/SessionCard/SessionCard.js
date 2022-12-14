import { Link } from "react-router-dom"
import { SessionContainer, ButtonsContainer } from "./styled"

export default function SessionCard({ session }) {
    const { id, weekday, date, showtimes } = session

    return (
        <SessionContainer>
            {weekday} - {date}
            <ButtonsContainer>
                {showtimes.map((show) => (
                    <Link key={show.id} to={`/assentos/${show.id}`}>
                        <button >{show.name}</button>
                    </Link>

                ))}
            </ButtonsContainer>
        </SessionContainer >
    )
}