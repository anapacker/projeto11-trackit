import styled from "styled-components"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { useContext, useEffect, useState } from "react"
import DataContextProvider from "../context/DataContextProvider"
import axios from "axios"
import HabbitToday from "../components/HabbitToday"
import dayjs from "dayjs"

export default function TodayPage() {
    const { token, userPicture } = useContext(DataContextProvider)
    const [habbitsToday, setHabbitsToday] = useState([])
    const weekDays = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    const config = {
        headers: { "Authorization": `Bearer ${token}` }
    }


    useEffect(() => {
        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`, config)
        promise.then(resp => {
            console.log(resp.data)
            setHabbitsToday(resp.data)
        })


    }, [])

    return (
        <Section>
            <NavBar userPicture={userPicture} />
            <TodayDate>
                <h1>{weekDays[dayjs().$W]}, {("00" + (dayjs().$D)).slice(-2)}/{("00" + (dayjs().$M + 1)).slice(-2)}</h1>
                {habbitsToday.length === 0 ?
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                    :
                    habbitsToday.map(habbit => {
                        return (
                            <HabbitToday habbit={habbit} key={habbit.id} />
                        )
                    })
                }
            </TodayDate>
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
    font-family: 'Roboto';
    `
const TodayDate = styled.div`
    margin-left: 20px;
    margin-top: 85px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-right: 15px ;

    h1{
       color:#126BA5;
       font-size: 21px;
       font-weight: 400;
       margin-bottom: 15px;
    }
    .progress{
        color:#8FC549;
    }
    `

