import logoImage from "../assets/TrackIt.png"
import styled from "styled-components"

export default function NavBar({ userPicture }) {
    return (
        <Header data-test="header">
            <LogoImage src={logoImage} alt="logoHabitsPage" />
            <ProfileImage data-test="avatar" src={userPicture} alt="imagem do perfil" />
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