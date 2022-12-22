import axios from "axios"
import { useContext } from "react"
import styled from "styled-components"
import UserInfosContext from "../contexts/UserInfosContext"
import Footer from "./Footer"

export default function TodayHabitsCard({ name, done, currentSequence, highestSequence, id, setLtTodayHabits }) {
    const { userInfos } = useContext(UserInfosContext)
    const config = {
        headers: {
            "Authorization": "Bearer " + userInfos.token
        }
    }

    function marcarHabitoFeito() {
        let body = {}
        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, body, config)
        promise.then(res => {
            obterLtHabitos()
        })
    }

    function desmarcarHabitoFeito() {
        let body = {}
        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, body, config)
        promise.then(res => {
            obterLtHabitos()
        })
    }
    function obterLtHabitos() {
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
        promise.then(res => {
            setLtTodayHabits(res.data)
            console.log(res.data)
        })
    }
    return (
        <>
            <CardHabits>
                <HbtDia>
                    <h2>{name}</h2>
                    <p>Sequencia atual: {currentSequence} dias</p>
                    <p>Seu recorde: {highestSequence} dias</p>
                </HbtDia>
                <button
                    className={done ? "done" : ""}
                    onClick={done ? desmarcarHabitoFeito : marcarHabitoFeito}
                >
                    <ion-icon name="checkmark-outline"></ion-icon>
                </button>
            </CardHabits>
            <Footer />

        </>
    )
}
const CardHabits = styled.div`
    width: 90%;
    background-color: white;
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:white;
    margin-left: 20px;
    padding: 17px;
    border-radius: 4px;
    margin-bottom: 15px;
    h2{
        font-size: 17.895px;
        padding-bottom: 15px;
        color: #4e4e4e;
        font-weight:500;
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
        border:none;
        color:white;
        background-color: #E5E5E5;
        display: flex;
        justify-content:center;
        align-items: center;
    }
    .done{
        background-color: #8FC549;
    }
`
const HbtDia = styled.div`
    width: 70%;
    flex-direction: column;
`

