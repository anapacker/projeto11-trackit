import logo from "../assests/Group8.png"
import styled from "styled-components"
import { useContext, useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import UserInfosContext from "../contexts/UserInfosContext"

export default function LoginPage() {
    const [login, setLogin] = useState({ email: "", password: "" })
    const { setUserInfos } = useContext(UserInfosContext)
    const navigate = useNavigate("/habitos")


    function requisicao() {
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", login)
        promise.then(res => {
            const config = {
                headers: {
                    "Authorization": "Bearer " + res.data.token
                }
            }
            const promise2 = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
            promise2.then(res2 => {
                let qtd = 0
                console.log("res2", res2.data)
                for (let i = 0; i < res2.data.length; i++) {
                    if (res2.data[i].done === true) {
                        qtd = qtd + 1
                    }
                }

                setUserInfos({ ...res.data, progressBar: qtd / res2.data.length * 100 })
                localStorage.setItem("abc123", JSON.stringify({ ...res.data, progressBar: qtd / res2.data.length * 100 }))
            })




            navigate("/habitos")
        })
        promise.catch(err => { alert(`${err.response.data.message}`) })
    }
    return (
        <ContainerPage>
            <img src={logo} alt="LogoTracklt" />
            <LoginForm onSubmit={(event) => {
                event.preventDefault()
                requisicao()
            }}>
                <input type="email" placeholder="email"
                    value={login.email}
                    onChange={(event) => {
                        setLogin({ ...login, email: event.target.value })
                    }}

                />
                <input type="password" placeholder="senha"
                    value={login.password}
                    onChange={(event) => {
                        setLogin({ ...login, password: event.target.value })
                    }}
                />
                <button type="submit">Entrar</button>
                <StyledLink to="/cadastro">Não tem uma conta? Cadastre-se!</StyledLink>
            </LoginForm>
        </ContainerPage>
    )
}

const ContainerPage = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img{
        width: 180px;
        padding: 68px 0 32px 0;

    }
`
const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    input{
        height: 45px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        outline: none;
        font-size: 19.976px;
        margin-bottom: 5px;
        ::placeholder{
            color: #D5D5D5;
        }
    }
    button{
        background: #52B6FF;
        border-radius: 4.63636px;
        height: 45px;
        color:#FFFFFF ;
        border: none;
        margin-bottom: 20px;
    }
   
`
const StyledLink = styled(Link)`
        color: #52B6FF;
        text-align: center;
        text-decoration-line: underline;
        font-weight: 400;
        font-size: 13.976px;
        cursor: pointer;
`
