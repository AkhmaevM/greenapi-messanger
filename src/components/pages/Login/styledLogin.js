import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const LoginWrapper = styled.div`
    background-color: #f0ece4;
    display:flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

export const LoginForm = styled.form`
    display:flex;
    flex-direction: column;
    row-gap: 15px;
    align-items: center;
    justify-content: center;
    background-color: #D9FDD3;
    border-radius: 30px;
    border: 1px solid;
    width: 35vw;
    height: 50vh;
    box-shadow: 12px 12px 12px 1px rgba(0, 0, 0, 0.5) ;
`

export const LoginInput = styled.input`
    border-radius: 15px;
    padding: 10px;
    outline: 0px;
    border: 0px;
    height: 10vh;
    width: 25vw;
`

export const LoginBtn = styled(Link)`
    border-radius: 20px 20px 20px 20px;
    border: 0px;
    background: white;
    color: gray;
    font-size: 26px;
    padding 10px;
    height: 8vh;
    width: 25vw;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration:none;

    &:hover{
        background: #c9c7c7;
    }
`