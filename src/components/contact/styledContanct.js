import styled from 'styled-components'


export const contactsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #E9EDEF;
    margin: 25px;
    cursor: pointer;
`

export const contactLogo = styled.img`
    box-sizing: border-box;
    max-width: 50px;
    max-height: 50px;
    border: 2px solid #FFFFFF;
`

export const contactMain = styled.div`
    display:flex;
    flex-direction: column;
`
export const contactName = styled.h3`
    font-weight: 600;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: -0.025em;
    width: 308px;
    height: 23px;
    color: #6B7C85;
`

export const contactMessage = styled.p`
    width: 362px;
    height: 19px;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.025em;
    color: #6B7C85;
`
export const messageTime = styled.p`
    width: 54px;
    height: 16px;
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.025em;
    color: #6B7C85;
`