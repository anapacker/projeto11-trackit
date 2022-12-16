import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import logo from "../assests/Group8.png"

export default function SignupPage() {
    const [signup, setSignup] = useState({ email: "", password: "", name: "", image: "" })


    function requisicao() {
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", signup)
        promise.then(res => {/* fazer alguma coisa com os dados */ })
        promise.catch(err => { alert(`${err.response.data.message}`) })
    }
    return (
        <ContainerPage>
            <img src={logo} alt="LogoTracklt" />
            <SignupForm onSubmit={(event) => {
                event.preventDefault()
                console.log("event", event)
                requisicao()
            }}>
                <input required type="email" placeholder="email"
                    value={signup.email}
                    onChange={(event) => {
                        setSignup({ ...signup, email: event.target.value })
                    }}

                />
                <input required type="text" placeholder="nome"
                    value={signup.name}
                    onChange={(event) => {
                        setSignup({ ...signup, name: event.target.value })
                    }}
                />
                <input required type="url" placeholder="foto"
                    value={signup.image}
                    onChange={(event) => {
                        setSignup({ ...signup, image: event.target.value })
                    }}
                />
                <input required type="password" placeholder="senha"
                    value={signup.password}
                    onChange={(event) => {
                        setSignup({ ...signup, password: event.target.value })
                    }}
                />
                <button type="submit">Cadastrar</button>
                <StyledLink to="/">Já tem uma conta? Faça login!</StyledLink>
            </SignupForm>
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
const SignupForm = styled.form`
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
