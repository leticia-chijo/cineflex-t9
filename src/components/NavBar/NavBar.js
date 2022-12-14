import { Link, useNavigate, useLocation } from "react-router-dom"
import { NavContainer, BackArrow } from "./styled"

export default function NavBar() {
    const navigate = useNavigate()
    let location = useLocation()

    return (
        <NavContainer>
            <Link to="/">
                {location.pathname !== "/" && <BackArrow onClick={() => navigate(-1)} src="https://cdn.iconscout.com/icon/free/png-256/back-arrow-1767515-1502579.png" alt="arrow"/>}
                CINEFLEX
            </Link>
        </NavContainer>
    )
}