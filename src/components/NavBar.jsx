import styled from "styled-components"
import logoImage from "../assests/TrackIt.png"
import { useContext } from "react"
import UserInfosContext from "../contexts/UserInfosContext"

export default function NavBar() {
    const context = useContext(UserInfosContext)
    return (
        <Header>
            <LogoImage src={logoImage} alt="logoHabitsPage" />
            <ProfileImage src={context.userInfos.image} alt="imagem do perfil" />
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