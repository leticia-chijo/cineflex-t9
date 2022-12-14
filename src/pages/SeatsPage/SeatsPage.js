import { Form, PageContainer, SeatsContainer, CaptionCircle, CaptionContainer, CaptionItem } from "./styled"
import Seat from "../../components/Seat/Seat"
import Footer from "../../components/Footer/Footer"
import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL } from "../../constants/urls"
import { useNavigate, useParams } from "react-router-dom"

export default function SeatsPage({ setSuccessInfo }) {
    const { idSessao } = useParams()
    const [session, setSession] = useState(undefined)
    const [selectedSeats, setSelectedSeats] = useState([])
    const [form, setForm] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${BASE_URL}/showtimes/${idSessao}/seats`)
            .then((res) => setSession(res.data))
            .catch((err) => console.log(err.response.data))
    }, [])

    function handleForm(e) {
        const { value, name } = e.target
        setForm({ ...form, [name]: value })
    }

    function handleSeat(seat) {
        if (!seat.isAvailable) {
            alert("Esse assento não está disponível")
        } else {
            const isSelected = selectedSeats.some((s) => s.id === seat.id)

            if (isSelected) {
                const unselect = window.confirm("tem certeza que quer retirar esse assento?")

                if (unselect) {
                    const newList = selectedSeats.filter((s) => s.id !== seat.id)
                    setSelectedSeats(newList)

                    const newForm = {...form}
                    delete newForm[`name${seat.name}`]
                    delete newForm[`cpf${seat.name}`]
                    setForm(newForm)
                }

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
            compradores: selectedSeats.map((seat) => {
                return { idAssento: seat.id, nome: form[`name${seat.name}`], cpf: form[`cpf${seat.name}`] }
            })
        }

        if (ids.length === 0) {
            alert("Selecione pelo menos um assento")
        } else {
            console.log(form)
            axios.post(`${BASE_URL}/seats/book-many`, body)
                .then(res => {
                    setSuccessInfo({
                        time: session.name,
                        date: session.day.date,
                        movieTitle: session.movie.title,
                        tickets: selectedSeats.map(s => s.name),
                        buyers: selectedSeats.map((seat) => {
                            return { seatName: seat.name, name: form[`name${seat.name}`], cpf: form[`cpf${seat.name}`] }
                        })

                    })
                    navigate("/sucesso")
                })
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

                {selectedSeats.map((seat) => (
                    <div key={seat.id}>
                        <label htmlFor="name">Nome do Comprador {seat.name}</label>
                        <input
                            id="name"
                            placeholder="Digite seu nome..."
                            name={`name${seat.name}`}
                            value={form[`name${seat.name}`]}
                            onChange={handleForm}
                            required
                        />

                        <label htmlFor="cpf">CPF do Comprador {seat.name}</label>
                        <input
                            id="cpf"
                            placeholder="Digite seu CPF..."
                            name={`cpf${seat.name}`}
                            value={form[`cpf${seat.name}`]}
                            onChange={handleForm}
                            required
                        />
                    </div>
                ))}

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