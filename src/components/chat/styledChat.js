import styled from 'styled-components'
import { ReactComponent as File } from './file.svg'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
   
`

export const chatTop = styled.div`
    height: 74px;
    background: #F0F2F5;
    padding-top:15px;
`

export const chatContact = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start
    margin-left: 30px;
`

export const contactLogo = styled.img`
    box-sizing: border-box;
    width: 50px;
    height: 50px;
`

export const contactName = styled.h2`
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: -0.025em;
    color: #6B7C85;
    width: 111px;
    height: 23px;
`

export const chatMain = styled.div`
    height: 860px;
    background-color: #f0ece4;
`

export const chatBottom = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-around;
`

export const inputFile = styled.input`
    width: 24px;
    height: 24px;
    background:${File};
`

export const inputMessage = styled.input`
    width: 914px;
    height: 50px;
    background: #FFFFFF;
    border-radius: 10px;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.025em;
    color: #6B7C85;
    margin-left: 69px;
`