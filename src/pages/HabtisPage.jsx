import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import CreateHabits from "../components/CreateHabits";
import HabitsCard from "../components/HabitsCard";
import NavBar from "../components/NavBar";
import UserInfosContext from "../contexts/UserInfosContext"

export default function HabtisPage() {
    const { userInfos } = useContext(UserInfosContext)
    const [habtis, sethabits] = useState({ name: "", days: [] })
    const [ltHabtis, setLtHabits] = useState([])
    const [createHabit, setCreateHabit] = useState(false)
    const [atualizarLista, setAtualizarLista] = useState(0)
    const [nameHabit, setNameHabit] = useState("")
    const [selectedDays, setSelectedDays] = useState([false, false, false, false, false, false, false])

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

    }, [atualizarLista])


    return (
        <>
            <NavBar />

            <HabtisContainer>
                <Header>

                    <h1>Meus hábitos</h1>
                    <button className="ButtonCreate" onClick={() => setCreateHabit(true)}>+</button>
                </Header>
                {createHabit === false ? <></> :
                    <CreateHabits
                        nameHabit={nameHabit}
                        setNameHabit={setNameHabit}
                        setSelectedDays={setSelectedDays}
                        selectedDays={selectedDays}
                        setCreateHabit={setCreateHabit}
                        setAtualizarLista={setAtualizarLista}
                        atualizarLista={atualizarLista}
                    />
                }

                {ltHabtis.length === 0 ?
                    <span>
                        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                    </span>
                    : ltHabtis.map((habit) => {
                        return (
                            <HabitsCard
                                key={habit.id}
                                name={habit.name}
                                days={habit.days}
                                id={habit.id}
                                setAtualizarLista={setAtualizarLista}
                                atualizarLista={atualizarLista}
                            />
                        )
                    })
                }
            </HabtisContainer>

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
    margin-top: 70px;
   span{

   }
    
`
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;
    
    h1{
        color: #126BA5;
        font-size: 22.976px;
        font-weight: 400;
        padding: 20px 0 20px 12px;
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
