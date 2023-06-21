import { useState, useRef } from 'react'
import * as S from './styledLogin'

export const Login = (props) =>{
    const [idInstance, setIdInstance] = useState('')
    const [apiTokenInstance, setApiTokenInstance] = useState('')

    const instanceRef = useRef(null)
    const tokenRef = useRef(null)


    const instanceHandler = (e)=>{
        setIdInstance(e.target.value)
        localStorage.setItem('idInstanse', e.target.value)
    }

    const tokenHandler = (e)=>{
        setApiTokenInstance(e.target.value)
        localStorage.setItem('apiTokenInstance',  e.target.value)
    }

    const loginCheck = (e) =>{
        if (idInstance === '' && apiTokenInstance==='') {
            e.preventDefault()
            instanceRef.current.style.border = '1px solid red'
            tokenRef.current.style.border = '1px solid red'
        }

        instanceRef.current.style.border = '0px'
        tokenRef.current.style.border = '0px'
    
        props.idInstance(idInstance);
        props.apiTokenInstance(apiTokenInstance);
    }
    return(
        <S.LoginWrapper>
            <S.LoginForm>
                <S.LoginInput type="text" placeholder="idInstance" 
                    value={idInstance} 
                    onChange={instanceHandler}
                    ref={instanceRef}
                />
                <S.LoginInput type="text" placeholder="apiTokenInstance" 
                    value={apiTokenInstance}
                    onChange={tokenHandler}
                    ref={tokenRef}
                />
                <S.LoginBtn to='/chats' 
                onClick={loginCheck}><p>Войти</p></S.LoginBtn>
            </S.LoginForm>
        </S.LoginWrapper>
    )
}