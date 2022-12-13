import styled from "styled-components"
import { accentColor, baseColor } from "../../constants/colors"

export const NavContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${baseColor};
    color: ${accentColor};
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    position: fixed;
    top: 0;
    a {
        text-decoration: none;
        color: ${accentColor};
    }
`