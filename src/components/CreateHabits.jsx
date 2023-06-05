import { useContext, useState } from "react"
import styled from "styled-components"
import DataContextProvider from "../context/DataContextProvider"
import axios from "axios"
import { ThreeDots } from "react-loader-spinner"

export default function CreateHabits({ nameHabbit, setNameHabbit, weekdays, setWeekdays, habbitsList, setHabbitsList }) {
    const { token, creatingNewHabbit, setCreatingNewHabbit } = useContext(DataContextProvider)
    const [isDisable, setIsDisable] = useState(false)

    function saveHabbit() {
        setIsDisable(true)
        const config = {
            headers: { "Authorization": `Bearer ${token}` }
        }
        let habbitToSendAPI = {
            name: nameHabbit,
            days: weekdays
        }
        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`, habbitToSendAPI, config)
        promise.then(resp => {
            console.log(resp.data)
            setHabbitsList([...habbitsList, resp.data])
            setNameHabbit("")
            setWeekdays([])
            setCreatingNewHabbit(false)
        })
        promise.catch(error => {
            setIsDisable(false)
            console.log(error)
            alert(error.message)
        })
    }
    function isDaySelected(day) {
        let diaJaFoiClicado = false;

        for (let i = 0; i < weekdays.length; i++) {
            if (weekdays[i] == day) {
                diaJaFoiClicado = true
                break;
            }
        }
        return diaJaFoiClicado
    }

    function selectDays(day) {
        let weekdaysUpdated = []

        if (isDaySelected(day)) {
            for (let j = 0; j < weekdays.length; j++) {

                if (weekdays[j] != day) {
                    weekdaysUpdated.push(weekdays[j])
                }
            }
            setWeekdays(weekdaysUpdated)
        } else {
            setWeekdays([...weekdays, day])
        }
    }

    return (
        <CreateHbtContainer data-test="habit-create-container">
            <input placeholder="nome do hábito"
                type="text"
                value={nameHabbit}
                onChange={e => setNameHabbit(e.target.value)}
                disabled={isDisable}
                required
                data-test="habit-name-input"
            />

            <Weekdays>
                <ButtonDay disabled={isDisable} propsStyledDay={isDaySelected(0)} onClick={() => {
                    selectDays(0)
                }}>D</ButtonDay>
                <ButtonDay disabled={isDisable} propsStyledDay={isDaySelected(1)} onClick={() => {
                    selectDays(1)
                }}>S</ButtonDay>
                <ButtonDay disabled={isDisable} propsStyledDay={isDaySelected(2)} onClick={() => {
                    selectDays(2)
                }}>T</ButtonDay>
                <ButtonDay disabled={isDisable} propsStyledDay={isDaySelected(3)} onClick={() => {
                    selectDays(3)
                }}>Q</ButtonDay>
                <ButtonDay disabled={isDisable} propsStyledDay={isDaySelected(4)} onClick={() => {
                    selectDays(4)
                }}>Q</ButtonDay>
                <ButtonDay disabled={isDisable} propsStyledDay={isDaySelected(5)} onClick={() => {
                    selectDays(5)
                }}>S</ButtonDay>
                <ButtonDay disabled={isDisable} propsStyledDay={isDaySelected(6)} onClick={() => {
                    selectDays(6)
                }}>S</ButtonDay>
            </Weekdays>

            <ButtonsContainer>
                <button className="cancelar" disabled={isDisable} onClick={() => setCreatingNewHabbit(false)}>Cancelar</button>
                <button className="salvar" disabled={isDisable} onClick={() => saveHabbit()}>{!isDisable ? "Salvar" : <ThreeDots color="#FFFFFF" height={30} width={30} />}</button>
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
const Weekdays = styled.div`
    display: flex;
    margin-top: 13px;
    margin-right: 50px;       
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
        display: flex;
        justify-content: center;
        align-items: center;

    }
`