import { useState } from "react"
import styled from "styled-components"

export default function CreateHabits() {
    const [nameHabbit, setNameHabbit] = useState("")
    const [disable, setDisable] = useState(false)
    const [weekdays, setWeekdays] = useState([])

    function selectDays(day) {
        let weekdaysUpdated = []

        console.log("DAY: ", day)
        console.log("WEEKDAYS: ", weekdays)
        console.log(`TEM ALGUM DIA EM WEEKDAYS IGUAL A ${day}? : `, weekdays.some((element) => element == day))

        if (weekdays.some((element) => element == day)) {

            weekdaysUpdated = weekdays.filter(param => param != day)

            console.log(`ARRAY FILTRADO: `, weekdays.filter(param => param != day))
            setWeekdays(weekdaysUpdated)
        } else {
            setWeekdays([...weekdays, day])
        }

    }

    function selectDaysTeste(day) {
        let weekdaysUpdated = []
        let diaJaFoiClicado = false;

        for (let i = 0; i < weekdays.length; i++) {
            if (weekdays[i] == day) {
                diaJaFoiClicado = true
                break;
            }
        }
        if (diaJaFoiClicado) {
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

    console.log("weekdays", weekdays)
    return (
        <CreateHbtContainer>
            <input placeholder="nome do hábito"
                type="text"
                value={nameHabbit}
                onChange={e => setNameHabbit(e.target.value)}
                disabled={disable}
                required
            />

            <Weekday>
                <button onClick={() => {
                    selectDays(0)
                }}>D</button>
                <button onClick={() => {
                    selectDays(1)
                }}>S</button>
                <button onClick={() => {
                    selectDays(2)
                }}>T</button>
                <button onClick={() => {
                    selectDays(3)
                }}>Q</button>
                <button onClick={() => {
                    selectDays(4)
                }}>Q</button>
                <button onClick={() => {
                    selectDays(5)
                }}>S</button>
                <button onClick={() => {
                    selectDays(6)
                }}>S</button>
            </Weekday>

            <ButtonsContainer>
                <button className="cancelar">Cancelar</button>
                <button className="salvar">Salvar</button>
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
const Weekday = styled.div`
    display: flex;
    margin-top: 13px;
    margin-right: 50px;
    button{
        background-color:#ffffff ;
        border-radius: 3px;
        border: 1px solid #D4D4D4;
        color: #D4D4D4;
        width: 30px;
        height: 30px;
        display:flex;
        justify-content: center;
        align-items:center;
        font-size: 20px;
        font-weight: 400;
        margin-right: 5px;
    }        
        .selected{
            background-color: #D4D4D4;
            color: #ffffff;
            display:flex;
            justify-content: center;
            align-items:center;
            font-size: 20px;
            font-weight: 400;
            margin-right: 5px;
        }


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
    }
`