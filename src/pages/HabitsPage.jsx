import styled from "styled-components"
import Footer from "../components/Footer"
import CreateHabits from "../components/CreateHabits"
import NavBar from "../components/NavBar"
import { useContext, useEffect, useState } from "react";
import DataContextProvider from "../context/DataContextProvider";
import axios from "axios";

export default function HabitsPage() {
    const { token, userPicture, creatingNewHabbit, setCreatingNewHabbit } = useContext(DataContextProvider);
    const [nameHabbit, setNameHabbit] = useState("")
    const [weekdays, setWeekdays] = useState([])
    const [habbitsList, setHabbitsList] = useState([])

    function isDaySelected(day, habbit) {
        let daySelected = false;

        for (let i = 0; i < habbit.days.length; i++) {
            if (habbit.days[i] == day) {
                daySelected = true
                break;
            }
        }
        return daySelected
    }

    const config = {
        headers: { "Authorization": `Bearer ${token}` }
    }
    useEffect(() => {
        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`, config)
        promise.then(resp => {
            setHabbitsList(resp.data)
        })


    }, [])
    return (
        <>
            <NavBar userPicture={userPicture} />
            <HabtisContainer>
                <Header>
                    <h1>Meus hábitos</h1>
                    <button data-test="habit-create-btn" className="ButtonCreate" onClick={() => setCreatingNewHabbit(!creatingNewHabbit)}>+</button>
                </Header>
                {creatingNewHabbit ? <CreateHabits habbitsList={habbitsList} setHabbitsList={setHabbitsList} nameHabbit={nameHabbit} setNameHabbit={setNameHabbit} weekdays={weekdays} setWeekdays={setWeekdays} /> : ""}
                {habbitsList.length === 0 ?
                    <span>
                        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                    </span>
                    :
                    habbitsList.map(habbit => {
                        return (
                            <CreatedHabbit>
                                <h2>{habbit.name}</h2>
                                <ion-icon name="trash-outline"></ion-icon>
                                <Weekdays>
                                    <ButtonDay propsStyledDay={isDaySelected(0, habbit)}>D</ButtonDay>
                                    <ButtonDay propsStyledDay={isDaySelected(1, habbit)}>S</ButtonDay>
                                    <ButtonDay propsStyledDay={isDaySelected(2, habbit)}>T</ButtonDay>
                                    <ButtonDay propsStyledDay={isDaySelected(3, habbit)}>Q</ButtonDay>
                                    <ButtonDay propsStyledDay={isDaySelected(4, habbit)}>Q</ButtonDay>
                                    <ButtonDay propsStyledDay={isDaySelected(5, habbit)}>S</ButtonDay>
                                    <ButtonDay propsStyledDay={isDaySelected(6, habbit)}>S</ButtonDay>
                                </Weekdays>
                            </CreatedHabbit>
                        )
                    })
                }

            </HabtisContainer>

            <Footer />

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
    align-items: center;
    padding-bottom:100px ;
`
const Header = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;

    
    h1{
        color: #126BA5;
        font-size: 22.976px;
        font-weight: 400;
        padding: 20px 0 20px 0;
        margin-top: 70px;
    }
    .ButtonCreate{
        width: 40px;
        height: 35px;
        background-color: #52B6FF;
        border-radius: 4.63636px;
        color: #ffffff;
        border: none;
        font-size: 26.976px;
        font-weight: 400;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 80px 0 20px 0;
    }
`
const CreatedHabbit = styled.div`
    background-color: white;
    width: 90%;
    padding-left: 15px;
    margin-bottom: 15px;
    border-radius: 3px;
    position: relative;
    h2{
        margin-top:15px;
        font-size: 20px;
        font-family: 'Roboto';
    }
    ion-icon{
        position: absolute;
        top: 5px;
        right: 5px;
    }
    `
const Weekdays = styled.div`
    display: flex;
    margin-top: 13px;
    margin-right: 50px;   
    margin-bottom:15px;    
`
const ButtonDay = styled.button`
    background-color:${(props) => (props.propsStyledDay ? '#CFCFCF' : '#ffffff')};
    border-radius: 3px;
    border: 1px solid ${(props) => (props.propsStyledDay ? '#CFCFCF' : '#D4D4D4')};
    color:${(props) => (props.propsStyledDay ? '#FFFFFF' : '#CFCFCF')} ;
    width: 30px;
    height: 30px;
    display:flex;
    justify-content: center;
    align-items:center;
    font-size: 20px;
    font-weight: 400;
    margin-right: 5px;
`