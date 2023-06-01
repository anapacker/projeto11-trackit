export default function HabitsCard() {
    return (
        <Card>
            <HabitName>
                <span>fazer um corchezinho</span>
                <button>
                    <ion-icon name="trash-outiline"></ion-icon>
                </button>
            </HabitName>

            <Weekday>
                <div className="diasDaSemana">D</div>
                <div className="diasDaSemana">S</div>
                <div className="diasDaSemana">T</div>
                <div className="diasDaSemana">Q</div>
                <div className="diasDaSemana">Q</div>
                <div className="diasDaSemana">S</div>
                <div className="diasDaSemana">S</div>
            </Weekday>
        </Card>
    )
}

const Card = styled.div`
    width: 90%;
    height: 90px;
    background-color: white;
    border-radius: 3px;
    margin-bottom: 12px;
`
const HabitName = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    span{
            color: #666666;
            padding:15px 0 15px 15px;
            font-size: 18.845px;
        }
        button{
            border: none;
            background-color: #ffffff;
            font-size: 18px;
        }
`


const Weekday = styled.div`
    display: flex;
    padding-left: 15px;
    > div{

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