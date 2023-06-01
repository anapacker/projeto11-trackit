import logo from "../assets/logotrakit.png"
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function LoginPage() {
    return (
        <ContainerPage>
            <img src={logo} alt="logo trackit" />

            <LoginForm>
                <input type="email" placeholder="email" />
                <input type="password" placeholder="senha" />

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