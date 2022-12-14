import { useEffect, useState } from "react"
import { SeatItem } from "./styled"

export default function Seat({ seat, handleSeat, isSelected }) {
    const [status, setStatus] = useState("available")
    // available, selected, unavailable

    useEffect(() => {
        if (isSelected) {
            setStatus("selected")
        } else if (seat.isAvailable) {
            setStatus("available")
        } else {
            setStatus("unavailable")
        }
    }, [isSelected])

    return (
        <SeatItem status={status} onClick={() => handleSeat(seat)}>
            {seat.name}
        </SeatItem>
    )
}