import styled from "styled-components"
import { seatColors } from "../../constants/colors"

export const SeatItem = styled.div`
    border: 1px solid ${seatColors.available.border};
    background-color: ${seatColors.available.background};
    height: 25px;
    width: 25px;
    border-radius: 25px;
    font-family: 'Roboto';
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`