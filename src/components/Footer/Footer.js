import { FooterContainer, PosterContainer, TitleContainer, Poster } from "./styled"

export default function Footer({poster, movieTitle, weekday, time}) {
    return (
        <FooterContainer>
            <PosterContainer>
                <Poster src={poster} alt="poster" />
            </PosterContainer>
            <TitleContainer>
                <p>{movieTitle}</p>
                {weekday && time && <p>{weekday} - {time}</p>}
            </TitleContainer>
        </FooterContainer>
    )
}