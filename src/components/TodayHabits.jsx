import styled from "styled-components"
import NavBar from "./NavBar"
import Footer from "./Footer"
import { useContext } from "react";
import DataContextProvider from "../context/DataContextProvider";

export default function TodayHabitsPage() {
    const { token, userPicture } = useContext(DataContextProvider);

    return (
        <>
            <NavBar userPicture={userPicture} />
            <TodayHabitsContainer>
                <h1>Fazer um crochezinho</h1>
                <p>sequencia atual: 3 dias</p>
                <p>seu recorde: 5 dias</p>
                <button>
                    <ion-icon name="checkmart-outline"></ion-icon>
                </button>
            </TodayHabitsContainer>
            <Footer />
        </>
    )
}

const TodayHabitsContainer = styled.div`
    min-width: 100vw;
    background-color: #E5E5E5;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const TodayCard = styled.div`
    width: 90%;
    background: #E5E5E5;
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    margin-left: 20px;
    padding: 17px;
    border-radius: 4px;
    margin-bottom: 15px;
`

const HbtDia = styled.div`
    width: 70%;
    flex-direction: column;
    h2{
    font-size: 17.895px;
    padding-bottom: 15px;
    color: #4e4e4e;
    font-weight: 500;
}
    p{
    color:#4e4e4e;
    font-size: 13px;
    margin-bottom: 5px;
}
    button{
    width: 70px;
    height: 70px;
    border-radius: 5px;
    font-size: 50px;
    font-weight: 600;
    border: none;
    color: white;
    background-color: #E5E5E5;
    display: flex;
    justify-content: center;
    align-items: center;
}
    .done{
    background-color: #8FC549;
}
`




