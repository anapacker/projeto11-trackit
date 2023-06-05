import styled from "styled-components"
import NavBar from "./NavBar"
import Footer from "./Footer"
import { useContext } from "react";
import DataContextProvider from "../context/DataContextProvider";

export default function HabbitToday({ habbit }) {
    const { token, userPicture } = useContext(DataContextProvider);

    return (
        <>
            <TodayHabitsContainer>
                <h1>{habbit.name}</h1>
                <p>Sequência atual: <span>{habbit.currentSequence}</span></p>
                <p>Seu recorde: <span>{habbit.highestSequence}</span></p>
                <button>
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

    span.selected {
        color: #8FC549;
    }

    &.selected {
        background-color: #8FC549;
    }

    button {
        grid-area: button;
        justify-self: end;
        width: 69px;
        height: 69px;
        border-radius: 5px;
        border: none;
        background-color: #EBEBEB;
        transition: background-color .3s ease-out;

        &.selected {
            background-color: #8FC549;
        }

        ion-icon {
            font-size: 45px;
            color: #FFFFFF;
            --ionicon-stroke-width: 64px;
        }
    }
`;



