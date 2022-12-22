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
            <Hbt>
                <span>{name}</span>
                <button onClick={deleteHabit}>
                    <ion-icon name="trash-outline"></ion-icon>
                </button>

            </Hbt>

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
    width: 90%;
    height: 90px;
    background-color: white;
    border-radius: 3px;
    margin-bottom: 12px;
`
const Hbt = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    span{
            color: #666666;
            padding:15px 0 15px 15px;
            font-size: 18.845px;
        }
        button{
            border: none;
            background-color: #ffffff;
            font-size: 18px;
        }
`


const Weekday = styled.div`
    display: flex;
    padding-left: 15px;
    > div{

        background-color:#ffffff ;
        border-radius: 3px;
        border: 1px solid #D4D4D4;
        color: #D4D4D4;
        width: 30px;
        height: 30px;
        display:flex;
        justify-content: center;
        align-items:center;
        font-size: 20px;
        font-weight: 400;
        margin-right: 5px;
    }
        
    .selected{
        background-color: #D4D4D4;
        color: #ffffff;
        display:flex;
        justify-content: center;
        align-items:center;
        font-size: 20px;
        font-weight: 400;
        margin-right: 5px;
    }
`



