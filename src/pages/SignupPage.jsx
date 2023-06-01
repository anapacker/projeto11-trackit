import styled from "styled-components"
import logo from "../assets/logotrakit.png"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"


export default function SignupPage() {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [sendPhoto, setSendPhoto] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [loadingDots, setLoadingDots] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        const interval = setInterval(() => {
            setLoadingDots((prevDots) => {
                if (prevDots === '...') {
                    return '.';
                } else {
                    return prevDots + '.';
                }
            });

        }, 300)

        return () => {
            clearInterval(interval);
        };
    }, []);


    function completeForm(event) {
        event.preventDefault()
        console.log("event", event)
        setEmail('');
        setName('');
        setSendPhoto('');
        setPassword('');
        setLoading(true);

        let dataSendToAPI = {
            email: email,
            name: name,
            image: sendPhoto,
            password: password
        }
        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up`, dataSendToAPI)
        setEmail('');
        setName('');
        setSendPhoto('');
        setPassword('');
        setLoading(false);


        promise.then(() => {
            navigate(`/`)

        })
            .catch(error => {
                alert(`${error.response.data.message}`)
            })
        console.log("dados", dataSendToAPI)
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
                    disabled={loading}
                    required />
                <input type="text"
                    placeholder="nome"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    disabled={loading}
                    required />
                <input type="url"
                    placeholder="foto"
                    value={sendPhoto}
                    onChange={e => setSendPhoto(e.target.value)}
                    disabled={loading}
                    required />
                <input type="password"
                    placeholder="senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    disabled={loading}
                    required />

                <button type="submit" disabled={loading}>{loading ? `${loadingDots}` : 'Cadastrar'}</button>
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