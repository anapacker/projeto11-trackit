import styled from "styled-components"

export default function HabitsCard({ days, name }) {

    const diasDaSemana = [];
    for (let i = 0; i < 7; i++) {
        diasDaSemana.push(days.some(day => {
            if (day == i)
                return true;
            else
                return false
        }));
    }

    return (
        <Card>
            <span>{name}</span>
            <Weekday>
                <div className={diasDaSemana[0] == true ? "selected" : ""} >D</div>
                <div className={diasDaSemana[1] == true ? "selected" : ""} >S</div>
                <div className={diasDaSemana[2] == true ? "selected" : ""} >T</div>
                <div className={diasDaSemana[3] == true ? "selected" : ""} >Q</div>
                <div className={diasDaSemana[4] == true ? "selected" : ""} >Q</div>
                <div className={diasDaSemana[5] == true ? "selected" : ""} >S</div>
                <div className={diasDaSemana[6] == true ? "selected" : ""} >S</div>
            </Weekday>
        </Card>
    )
}
const Card = styled.div`
    background-color: white;
    border-radius: 3px;
`
const Weekday = styled.div`
    background-color: blue;
    display: flex;
    .selected{
        background-color: red
    }
`
const ButtonsContainer = styled.div`
    display: flex;
    background-color: #893636;

`
