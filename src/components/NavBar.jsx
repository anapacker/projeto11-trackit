import logoImage from "../assets/TrackIt.png"
import styled from "styled-components"

export default function NavBar() {
    return (
        <Header>
            <LogoImage src={logoImage} alt="logoHabitsPage" />
            <ProfileImage src="https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTO0GkLc-pMsuvF_7RsPVM4g0kZ9rLcAPbFbwO0pZE-sY3_SaNm9fV1M1E2IF2-ZrSN" alt="imagem do perfil" />
        </Header>
    )
}

const Header = styled.header`
    min-width: 100vw;
    background-color: #126BA5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top:0;
    z-index:1;
`

const LogoImage = styled.img`
    width: 97px;
    padding: 20px 0 20px 14px;

`
const ProfileImage = styled.img`
    width: 51px;
    height: 51px;
    border-radius: 50%;
    margin-right: 14px;
`