import axios from "axios";
import styled from "styled-components"
import UserInfosContext from "../contexts/UserInfosContext"
import { useContext } from "react";

export default function HabitsCard({ days, name, id, atualizarLista, setAtualizarLista }) {
    const { userInfos } = useContext(UserInfosContext)
    const diasDaSemana = [];
    for (let i = 0; i < 7; i++) {
        diasDaSemana.push(days.some(day => {
            if (day == i)
                return true;
            else
                return false
        }));
    }
    function deleteHabit() {
        let confirmDelete
        confirmDelete = window.confirm("você tem certeza de que quer apagar esse hábito?")

        const config = {
            headers: {
                "Authorization": "Bearer " + userInfos.token
            }
        }
        if (confirmDelete) {
            const promise = axios.delete("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/" + id, config)
            promise.then(res => {
                setAtualizarLista(atualizarLista + 1)
                console.log(res.data)
            })

        }
    }

    return (
        <Card>
            <span>{name}</span>
            <button onClick={deleteHabit}>
                <ion-icon name="trash-outline"></ion-icon>
            </button>



            <Weekday>
                <div className={diasDaSemana[0] == true ? "selected" : ""} >D</div>
                <div className={diasDaSemana[1] == true ? "selected" : ""} >S</div>
                <div className={diasDaSemana[2] == true ? "selected" : ""} >T</div>
                <div className={diasDaSemana[3] == true ? "selected" : ""} >Q</div>
                <div className={diasDaSemana[4] == true ? "selected" : ""} >Q</div>
                <div className={diasDaSemana[5] == true ? "selected" : ""} >S</div>
                <div className={diasDaSemana[6] == true ? "selected" : ""} >S</div>
            </Weekday>
        </Card>
    )
}
const Card = styled.div`
    background-color: white;
    border-radius: 3px;
`
const Weekday = styled.div`
    background-color: blue;
    display: flex;
    .selected{
        background-color: red
    }
`
const ButtonsContainer = styled.div`
    display: flex;
    background-color: #893636;

`
