import styled from "styled-components"

export default function Footer() {
    return (
        <FooterContainer>
            <button>Hábitos</button>
            <Tday>Hoje</Tday>
            <button>Histórico</button>
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
`
