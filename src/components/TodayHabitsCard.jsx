import axios from "axios"
import { useContext } from "react"
import styled from "styled-components"
import UserInfosContext from "../contexts/UserInfosContext"

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
        <CardHabits>
            <HbtDia>
                <h1>{name}</h1>
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
    )
}
const CardHabits = styled.div`
    background-color: white;
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
    background-color:white;
    button{
        width: 30px;
        height: 30px;
        border-radius: 3px;
        font-size: 25px;
        border:none;
        color:white;
        background-color: grey;
        display: flex;
        justify-content:center;
        align-items: center;
    }
    .done{
        background-color: green;
    }
`
const HbtDia = styled.div`
    width: 70%;
    flex-direction: column;
`

