import { FooterContainer, PosterContainer, TitleContainer, Poster } from "./styled"

export default function Footer() {
    return (
        <FooterContainer>
            <PosterContainer>
                <Poster src={"https://http2.mlstatic.com/D_NQ_NP_654490-MLB47711020206_092021-O.jpg"} alt="poster" />
            </PosterContainer>
            <TitleContainer>
                <p>Titanic</p>
                <p>Terça - 18h00</p>
            </TitleContainer>
        </FooterContainer>
    )
}