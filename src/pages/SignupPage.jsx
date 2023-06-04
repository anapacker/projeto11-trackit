import styled from "styled-components"
import logo from "../assets/logotrakit.png"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { ThreeDots } from "react-loader-spinner"
import { useState } from "react"


export default function SignupPage() {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [sendPhoto, setSendPhoto] = useState("")
    const [password, setPassword] = useState("")
    const [disable, setDisable] = useState(false)
    const navigate = useNavigate()

    function completeForm(event) {
        event.preventDefault()
        setDisable(true)

        let dataSendToAPI = {
            email: email,
            name: name,
            image: sendPhoto,
            password: password
        }
        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up`, dataSendToAPI)
        promise.then(() => {
            navigate(`/`)
        })
        promise.catch(error => {
            alert(`${error.response.data.message}`)
        })
    }

    return (
        <ContainerPage>
            <img src={logo} alt="logo trackit, grafico com uma seta azul" />

            <SignupForm onSubmit={completeForm}>
                <input
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    disabled={disable}
                    required
                    data-test="email-input"
                />
                <input type="text"
                    placeholder="nome"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    disabled={disable}
                    required
                    data-test="user-name-input"
                />
                <input type="url"
                    placeholder="foto"
                    value={sendPhoto}
                    onChange={e => setSendPhoto(e.target.value)}
                    disabled={disable}
                    required
                    data-test="user-image-input"
                />
                <input type="password"
                    placeholder="senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    disabled={disable}
                    required
                    data-test="password-input"
                />

                <button data-test="signup-btn" type="submit" disabled={disable}>{!disable ? 'Cadastrar' : <ThreeDots color="FFFFFF" height={55} width={55} />}</button>
                <StyledLink data-test="login-link" to="/">Já tem uma conta? Faça login!</StyledLink>
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