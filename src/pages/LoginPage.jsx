import { useContext, useState } from "react";
import logo from "../assets/logotrakit.png"
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import DataContextProvider from "../context/DataContextProvider";


export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { setToken, setUserPicture } = useContext(DataContextProvider);

    const navigate = useNavigate()

    function loginToAccont(e) {
        e.preventDefault()

        let dadosLoadingEnviarAPI = {
            email: email,
            password: password
        }
        console.log(dadosLoadingEnviarAPI)
        axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login`, dadosLoadingEnviarAPI)
            .then(resp => {
                setToken(resp.data.token)
                setUserPicture(resp.data.image)
                navigate(`/hoje`)
            })
            .catch(erro => {
                alert(erro.response.data.message)
            })
    }
    return (
        <ContainerPage>
            <img src={logo} alt="logo trackit" />

            <LoginForm onSubmit={loginToAccont}>
                <label htmlFor="email"></label>
                <input
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    data-test="email-input"
                />

                <input
                    type="password"
                    placeholder="senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    data-test="password-input"
                />

                <button data-test="login-btn" type="submit">Entrar</button>
                <StyledLink data-test="signup-link" to="/cadastro">Não tem uma conta? Cadastre-se!</StyledLink>
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