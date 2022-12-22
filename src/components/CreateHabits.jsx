import axios from "axios"
import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import UserInfosContext from "../contexts/UserInfosContext"

export default function CreateHabits({ setCreateHabit, atualizarLista, setAtualizarLista, nameHabit, setNameHabit, selectedDays, setSelectedDays }) {
    const { userInfos } = useContext(UserInfosContext)
    const [isDesable, setIsDesable] = useState(false)

    const config = {
        headers: {
            "Authorization": "Bearer " + userInfos.token
        }
    }

    function saveHabit() {
        const daysHabit = []
        for (let i = 0; i < selectedDays.length; i++) {
            if (selectedDays[i]) {
                daysHabit.push(i)
            }
        }
        if (daysHabit.length === 0) {
            alert("você precisa selecionar pelo menos um dia")
            return
        }
        const body = { name: nameHabit, days: daysHabit }
        setIsDesable(true)
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", body, config)
        promise.then(res => {
            setIsDesable(false)
            console.log(res.data)
            setNameHabit("")
            setSelectedDays([false, false, false, false, false, false, false])
            setCreateHabit(false)
            setAtualizarLista(atualizarLista + 1)
        })
        promise.catch(err => {
            setIsDesable(false)
            alert(`${err.response.data.message}`)
        })
    }


    return (
        <CreateHbtContainer>

            <input disabled={isDesable} placeholder="nome do hábito"
                value={nameHabit}
                onChange={(event) => {
                    setNameHabit(event.target.value)
                }}
            >
            </input>
            <Weekday>
                <button disabled={isDesable} className={selectedDays[0] ? "selected" : ""} onClick={() => {
                    setSelectedDays([!selectedDays[0], selectedDays[1], selectedDays[2], selectedDays[3], selectedDays[4], selectedDays[5], selectedDays[6]])

                }}>D</button>
                <button disabled={isDesable} className={selectedDays[1] ? "selected" : ""} onClick={() => {
                    setSelectedDays([selectedDays[0], !selectedDays[1], selectedDays[2], selectedDays[3], selectedDays[4], selectedDays[5], selectedDays[6]])
                }}>S</button>
                <button disabled={isDesable} className={selectedDays[2] ? "selected" : ""} onClick={() => {
                    setSelectedDays([selectedDays[0], selectedDays[1], !selectedDays[2], selectedDays[3], selectedDays[4], selectedDays[5], selectedDays[6]])
                }}>T</button>
                <button disabled={isDesable} className={selectedDays[3] ? "selected" : ""} onClick={() => {
                    setSelectedDays([selectedDays[0], selectedDays[1], selectedDays[2], !selectedDays[3], selectedDays[4], selectedDays[5], selectedDays[6]])
                }}>Q</button>
                <button disabled={isDesable} className={selectedDays[4] ? "selected" : ""} onClick={() => {
                    setSelectedDays([selectedDays[0], selectedDays[1], selectedDays[2], selectedDays[3], !selectedDays[4], selectedDays[5], selectedDays[6]])
                }}>Q</button>
                <button disabled={isDesable} className={selectedDays[5] ? "selected" : ""} onClick={() => {
                    setSelectedDays([selectedDays[0], selectedDays[1], selectedDays[2], selectedDays[3], selectedDays[4], !selectedDays[5], selectedDays[6]])
                }}>S</button>
                <button disabled={isDesable} className={selectedDays[6] ? "selected" : ""} onClick={() => {
                    setSelectedDays([selectedDays[0], selectedDays[1], selectedDays[2], selectedDays[3], selectedDays[4], selectedDays[5], !selectedDays[6]])
                }}>S</button>
            </Weekday>
            <ButtonsContainer>
                <button className="cancelar" onClick={() => setCreateHabit(false)}>Cancelar</button>
                <button className="salvar" onClick={saveHabit}>
                    Salvar
                </button>


            </ButtonsContainer>
        </CreateHbtContainer>
    )

}

const CreateHbtContainer = styled.div`
    background-color: white;
    width: 90%;
    padding-left: 15px;
    margin-bottom: 15px;
    input{
        width: 303px;
        height: 40px;
        border:1px solid #D4D4D4;
        border-radius: 4px;
        margin-top:15px;
        ::placeholder{
            font-size: 18.856px;
            padding-left:5px ;
        }
        

    }

`
const Weekday = styled.div`
    display: flex;
    margin-top: 13px;
    button{
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
const ButtonsContainer = styled.div`
    margin-top: 25px;
    display: flex;
    justify-content: right;
    margin-bottom: 10px;
    .cancelar{
        background:none;
        color: #52B6FF;
        margin-right: 20px;
        border: none;
        font-size: 14px;
        font-weight:400;
    }
    .salvar{
        width: 84px;
        height: 35px;
        background-color: #52B6FF;
        border-radius: 4px;
        color: #ffffff;
        border: none;
        margin-right: 20px;
        font-size: 14px;
        font-weight:400;
    }
`
