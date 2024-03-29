import styled from "styled-components"
import NavBar from "./NavBar"
import Footer from "./Footer"
import { useContext, useState } from "react";
import DataContextProvider from "../context/DataContextProvider";
import axios from "axios";

export default function HabbitToday({ habbit, atualiza, setAtualiza }) {
    const { token } = useContext(DataContextProvider);
    console.log(habbit)
    function setHabbitAsDone() {
        const body = {}

        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        if (habbit.done) {
            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habbit.id}/uncheck`, body, config)
            promise.then(resp => {
                setAtualiza(!atualiza)
                console.log(resp.data)
            })
        } else {
            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habbit.id}/check`, body, config)
            promise.then(resp => {
                setAtualiza(!atualiza)
                console.log(resp.data)
            })
        }
    }

    return (
        <>
            <TodayHabitsContainer data-test="today-habit-container" selected={habbit.done}>
                <h1 data-test="today-habit-name">{habbit.name}</h1>
                <p data-test="today-habit-sequence">Sequência atual: <span>{habbit.currentSequence}</span></p>
                <p data-test="today-habit-record">Seu recorde: <span>{habbit.highestSequence}</span></p>
                <button data-test="today-habit-check-btn" onClick={setHabbitAsDone}>
                    <ion-icon name="checkmark-outline"></ion-icon>
                </button>
            </TodayHabitsContainer>
        </>
    )
}

const TodayHabitsContainer = styled.li`
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 13px 13px 13px 16px;
    display: grid;
    grid-template-areas: 
        "h3 button"
        "p1 button"
        "p2 button";
    font-family: 'Roboto';

    h1 {
        grid-area: h3;
        font-size: 20px;
        line-height: 25px;
        color: #666666;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    p {
        font-size: 13px;
        line-height: 16px;
        color: #666666;
    }

    p:first-child {
        grid-area: p1;
    }

    p:last-child {
        grid-area: p2;
    }


    button {
        grid-area: button;
        justify-self: end;
        width: 69px;
        height: 69px;
        border-radius: 5px;
        border: none;
        background-color: ${props => props.selected ? '#8FC549' : '#EBEBEB'};
        transition: background-color .3s ease-out;

        ion-icon {
            font-size: 45px;
            color: #FFFFFF;
            --ionicon-stroke-width: 64px;
        }
    }
`;



