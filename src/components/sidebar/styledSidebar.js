import styled from 'styled-components'

export const sidebarWrapper = styled.div`
    width: 594px;
    background: #FFFFFF;
    display: flex; 
    flex-direction: column;
    row-gap: 12px;
`

export const sidebarTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const contactSearch = styled.input`
    width: 492px;
    height: 50px;
    background: #F0F2F5;
    border-radius: 10px;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.025em;
    color: #6B7C85;
    margin: 20px;
`

export const contactsList = styled.div`
    display:flex;
    flex-direction: column;
    row-gap: 20px;
    border-top: 1px solid #E9EDEF;
`