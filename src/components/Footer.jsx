import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function Footer() {
    const navigate = useNavigate()
    return (
        <FooterContainer>
            <button onClick={() => { navigate("/habitos") }}>Hábitos</button>
            <Tday onClick={() => { navigate("/hoje") }}></Tday>
            <button onClick={() => { navigate("/historico") }}>Histórico</button>
        </FooterContainer>
    )
}


const FooterContainer = styled.div`
    position:fixed;
    bottom: 0;
    z-index: 1;
    background-color: #ffffff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    right: 0;
    left: 0;
    button{
        color: #52B6FF;
        height: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        background: none;
        font-size:17px;

    }
    
`
const Tday = styled.div`
    width: 91px;
    height: 91px;
    border-radius: 50%;
    background-color: #52B6FF;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 10px;
    z-index: 2;
    left: calc(50% - 45px);
    padding: 2px;
`