import axios from "axios";
import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import TodayHabitsCard from "../components/TodayHabitsCard";
import UserInfosContext from "../contexts/UserInfosContext";

export default function TodayPage() {
    const [ltTodayHabits, setLtTodayHabits] = useState([])
    const { userInfos, setUserInfos } = useContext(UserInfosContext)
    const weekDays = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    const [qtdDone, setQtdDone] = useState(0)
    const config = {
        headers: {
            "Authorization": "Bearer " + userInfos.token
        }
    }
    useEffect(() => {
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
        promise.then(res => {
            setLtTodayHabits(res.data)
        })
    }, [])

    function verificaProgresso() {
        let qtd = 0

        for (let i = 0; i < ltTodayHabits.length; i++) {
            if (ltTodayHabits[i].done === true) {
                qtd = qtd + 1
            }
        }
        setQtdDone(qtd)

        return (qtd)
    }
    useEffect(() => {
        const qtd = verificaProgresso()
        setUserInfos({ ...userInfos, progressBar: qtd / ltTodayHabits.length * 100 })
    }, [ltTodayHabits])

    return (
        <Section>
            <NavBar />
            <TodayDate>
                <h1>{weekDays[dayjs().$W]}, {("00" + (dayjs().$D)).slice(-2)}/{("00" + (dayjs().$M + 1)).slice(-2)}</h1>
                {qtdDone === 0 ?
                    <p>Nenhum habito concluido ainda</p> :
                    <p className="progress">{(qtdDone / ltTodayHabits.length).toFixed(2).replace("0.", "").replace(".", "")}% dos hábitos concluídos</p>
                }

            </TodayDate>
            {ltTodayHabits.length === 0 ?
                <p>Nenhum habito registrado pra hoje</p>
                : ltTodayHabits.map(hbtTday => {
                    return (
                        <TodayHabitsCard
                            setLtTodayHabits={setLtTodayHabits}
                            key={hbtTday.id}
                            id={hbtTday.id}
                            name={hbtTday.name}
                            done={hbtTday.done}
                            currentSequence={hbtTday.currentSequence}
                            highestSequence={hbtTday.highestSequence}
                        />

                    )
                })
            }


            <Footer />
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
    margin-left: 20px;
    margin-top: 85px;
    margin-bottom: 20px;
    h1{
       color:#126BA5;
       font-size: 21px;
       font-weight: 400;
    }
    .progress{
        color:#8FC549;
    }
    `