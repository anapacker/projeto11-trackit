import styled from "styled-components"

export default function CreateHabits() {
    return (
        <CreateHbtContainer>
            <input placeholder="nome do hábito" />

            <Weekday>
                <button>D</button>
                <button>S</button>
                <button>T</button>
                <button>Q</button>
                <button>Q</button>
                <button>S</button>
                <button>S</button>
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