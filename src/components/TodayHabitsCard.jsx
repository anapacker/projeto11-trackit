import styled from "styled-components"

export default function TodayHabitsCard({ name, done, currentSequence, highestSequence, id }) {

    return (
        <CardHabits>
            <HbtDia>
                <h1>{name}</h1>
                <span>{currentSequence}</span>
                <span>{highestSequence}</span>
            </HbtDia>
            <button className={done ? "done" : ""}>
                <ion-icon name="checkmark-outline"></ion-icon>
            </button>
        </CardHabits>
    )
}
const CardHabits = styled.div`
    background-color: white;
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
    background-color:white;
    button{
        width: 30px;
        height: 30px;
        border-radius: 3px;
        font-size: 25px;
        border:none;
        color:white;
        background-color: grey;
        display: flex;
        justify-content:center;
        align-items: center;
        .done{
            background-color: green;
        }
    }
`
const HbtDia = styled.div`
    width: 70%;
    flex-direction: column;
`

