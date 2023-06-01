import styled from "styled-components"
import Footer from "../components/Footer"
import CreateHabits from "../components/CreateHabits"
import NavBar from "../components/NavBar"

export default function HabitsPage() {
    return (
        <>
            <NavBar />
            <HabtisContainer>
                <Header>
                    <h1>Meus hábitos</h1>
                    <button className="ButtonCreate">+</button>
                </Header>
                <CreateHabits>
                    <span>
                        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                    </span>
                </CreateHabits>
            </HabtisContainer>

            <Footer />

        </>
    )
}

const HabtisContainer = styled.div`
    min-width: 100vw;
    background-color: #E5E5E5;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom:100px ;
`
const Header = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;

    
    h1{
        color: #126BA5;
        font-size: 22.976px;
        font-weight: 400;
        padding: 20px 0 20px 0;
        margin-top: 70px;
    }
    .ButtonCreate{
        width: 40px;
        height: 35px;
        background-color: #52B6FF;
        border-radius: 4.63636px;
        color: #ffffff;
        border: none;
        font-size: 26.976px;
        font-weight: 400;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 80px 0 20px 0;
    }
`
