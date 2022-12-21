import axios from "axios"
import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import UserInfosContext from "../contexts/UserInfosContext"

export default function CreateHabits({ setCreateHabit, atualizarLista, setAtualizarLista }) {
    const [selectedDays, setSelectedDays] = useState([false, false, false, false, false, false, false])
    console.log(selectedDays)
    const { userInfos } = useContext(UserInfosContext)
    const [nameHabit, setNameHabit] = useState("")
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
            <p>quadro branco</p>
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
                <button onClick={() => setCreateHabit(false)}>cancelar</button>
                <button onClick={saveHabit}>
                    Salvar
                </button>


            </ButtonsContainer>
        </CreateHbtContainer>
    )

}

const CreateHbtContainer = styled.div`
    background-color: white;
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
