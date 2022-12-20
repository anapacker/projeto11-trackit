import styled from "styled-components"
import logoImage from "../assests/TrackIt.png"
import { useContext } from "react"
import UserInfosContext from "../contexts/UserInfosContext"

export default function NavBar() {
    const context = useContext(UserInfosContext)
    return (
        <>
            <Header>
                <LogoImage src={logoImage} alt="logoHabitsPage" />
                <ProfileImage src={context.userInfos.image} alt="imagem do perfil" />
            </Header>

        </>

    )
}

const Header = styled.div`
    background-color: #126BA5;
    display: flex;
    justify-content: space-between;
`

const LogoImage = styled.img`
    width: 97px;
    padding: 15px 0 15px 10px;

`
const ProfileImage = styled.img`
    width: 51px;
    height: 51px;
    border-radius: 50%;
`