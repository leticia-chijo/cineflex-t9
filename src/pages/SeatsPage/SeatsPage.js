import { Form, PageContainer, SeatsContainer, CaptionCircle, CaptionContainer, CaptionItem } from "./styled"
import Seat from "../../components/Seat/Seat"
import Footer from "../../components/Footer/Footer"
import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL } from "../../constants/urls"
import { useNavigate, useParams } from "react-router-dom"

export default function SeatsPage() {
    const { idSessao } = useParams()
    const [session, setSession] = useState(undefined)
    const [selectedSeats, setSelectedSeats] = useState([])
    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${BASE_URL}/showtimes/${idSessao}/seats`)
            .then((res) => setSession(res.data))
            .catch((err) => console.log(err.response.data))
    }, [])

    function handleSeat(seat) {
        if (!seat.isAvailable) {
            alert("Esse assento não está disponível")
        } else {
            const isSelected = selectedSeats.some((s) => s.id === seat.id)

            if (isSelected) {
                const newList = selectedSeats.filter((s) => s.id !== seat.id)
                setSelectedSeats(newList)
            } else {
                setSelectedSeats([...selectedSeats, seat])
            }
        }
    }

    function buyTickets(e) {
        e.preventDefault()
        const ids = selectedSeats.map(s => s.id)

        const body = {
            ids: ids,
            name: name,
            cpf: cpf
        }
        if (ids.length === 0) {
            alert("Selecione pelo menos um assento")
        } else {
            axios.post(`${BASE_URL}/seats/book-many`, body)
                .then(res => navigate("/success"))
                .catch(err => console.log(err.response.data))

        }
    }

    if (session === undefined) {
        return <div>Carregando...</div>
    }

    return (
        <PageContainer>
            Selecione o(s) assento(s)

            <SeatsContainer>
                {session.seats.map((seat) => (
                    <Seat
                        key={seat.id}
                        seat={seat}
                        handleSeat={handleSeat}
                        isSelected={selectedSeats.some((s) => s.id === seat.id)}
                    />
                ))}
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

            <Form onSubmit={buyTickets}>
                <label htmlFor="name">Nome do Comprador</label>
                <input
                    id="name"
                    placeholder="Digite seu nome..."
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />

                <label htmlFor="cpf">CPF do Comprador</label>
                <input
                    id="cpf"
                    placeholder="Digite seu CPF..."
                    value={cpf}
                    onChange={e => setCpf(e.target.value)}
                    required
                />

                <button type="submit">Reservar Assento(s)</button>
            </Form>

            <Footer
                movieTitle={session.movie.title}
                poster={session.movie.posterURL}
                weekday={session.day.weekday}
                time={session.name}
            />
        </PageContainer>
    )
}