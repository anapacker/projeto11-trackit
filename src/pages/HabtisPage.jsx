import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import CreateHabits from "../components/CreateHabits";
import NavBar from "../components/NavBar";
import UserInfosContext from "../contexts/UserInfosContext"

export default function HabtisPage() {
    const { userInfos } = useContext(UserInfosContext)
    const [habtis, sethabits] = useState({ name: "", days: [] })
    const [ltHabtis, setLtHabits] = useState([])
    const [createHabit, setCreateHabit] = useState(false)

    const config = {
        headers: {
            "Authorization": "Bearer " + userInfos.token
        }
    }

    useEffect(() => {
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)
        promise.then(res => {
            setLtHabits(res.data)
            console.log("res.data", res.data)
        })

    }, [])


    return (
        <>
            <NavBar />

            <HabtisContainer>
                {ltHabtis.length === 0 ?
                    <p>
                        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                    </p>
                    : <p>kasjflkasfk</p>
                }
                <h1>Meus hábitos</h1>
                <button className="ButtonCreate" onClick={() => setCreateHabit(true)}>+</button>
                {createHabit === false ? <></> :
                    <CreateHabits setCreateHabit={setCreateHabit} />
                }

            </HabtisContainer>

        </>
    )
}


const HabtisContainer = styled.div`
    background-color: #E5E5E5;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    h1{
        color: #126BA5;
        font-size: 22.976px;
        font-weight: 400;
    }
    .ButtonCreate{
        width: 40px;
        height: 35px;
        background-color: #52B6FF;
        border-radius: 4.63636px;
        color: #ffffff;
        border: none;
        font-size: 34px;
        font-weight: 400;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
