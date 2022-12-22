import styled from "styled-components";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function HistoryPage() {
    return (
        <>
            <NavBar />
            <HistoryContainer>
                <h1>Histórico</h1>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </HistoryContainer>
            <Footer />
        </>

    )
}

const HistoryContainer = styled.div`
    min-width: 100vw;
    background-color: #E5E5E5;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 20px;
    padding-bottom:100px ;
    h1{
        color: #126BA5;
        font-size: 22.976px;
        font-weight: 400;
        padding: 20px 0 20px 0;
        margin-top: 70px;
    }
`