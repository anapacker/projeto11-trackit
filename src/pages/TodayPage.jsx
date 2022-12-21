import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import TodayHabitsCard from "../components/TodayHabitsCard";
import UserInfosContext from "../contexts/UserInfosContext";

export default function TodayPage() {
    const [ltTodayHabits, setLtTodayHabits] = useState([])
    const { userInfos } = useContext(UserInfosContext)

    const config = {
        headers: {
            "Authorization": "Bearer " + userInfos.token
        }
    }
    useEffect(() => {
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
        promise.then(res => {
            setLtTodayHabits(res.data)
            console.log(res.data)
        })
    }, [])

    return (
        <Section>
            <NavBar />
            <TodayDate>
                segunda, 17/05
            </TodayDate>
            {ltTodayHabits.length === 0 ?
                <span>Nenhum habito concluido ainda</span>
                : ltTodayHabits.map(hbtTday => {
                    return (
                        <TodayHabitsCard
                            key={hbtTday.id}
                            name={hbtTday.name}
                            done={hbtTday.done}
                            currenteSequence={hbtTday.currentSequence}
                            highestSequence={hbtTday.highestSequence}
                        />

                    )
                })
            }



        </Section>
    )
}
const Section = styled.div`
    min-width: 100vw;
    background-color: #E5E5E5;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    `
const TodayDate = styled.div`
    display: flex;
    margin-top: 85px;
    margin-bottom: 20px;

`