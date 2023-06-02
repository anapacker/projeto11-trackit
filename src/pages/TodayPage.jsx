import styled from "styled-components"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

export default function TodayPage() {
    return (
        <Section>
            <NavBar />
            <TodayDate>
                <h1>Meus habitos</h1>
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </TodayDate>
            <Footer />
        </Section>
    )
}

const Section = styled.div`
    min-width: 100vw;
    background-color: #E5E5E5;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    `
const TodayDate = styled.div`
    margin-left: 20px;
    margin-top: 85px;
    margin-bottom: 20px;
    h1{
       color:#126BA5;
       font-size: 21px;
       font-weight: 400;
    }
    .progress{
        color:#8FC549;
    }
    `