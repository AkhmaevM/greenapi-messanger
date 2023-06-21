import styled from 'styled-components'


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100vw;
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
    column-gap:12px;
`

export const contactLogo = styled.img`
    box-sizing: border-box;
    width: 50px;
    height: 50px;
    margin-left: 30px;
`

export const contactName = styled.h2`
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: -0.025em;
    color: #6B7C85;
    width: 111px;
    height: 23px;
    margin-left: 12px;
`

export const chatMain = styled.div`
    height: 75vh;
    background-color: #f0ece4;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 15px;
    align-items: flex-end

`

export const chatBottom = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    background: #F0F2F5;
    height:14vh;
    align-items:center;
`

export const inputMessage = styled.input`
    width: 50vw;
    height: 8vh;
    background: #FFFFFF;
    border-radius: 10px;
    font-weight: 500;
    border:1px solid #FFFFFF;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.025em;
    color: #6B7C85;
    padding-left:20px;
    margin-top: 20px;
    margin-bottom: 20px;
    &::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color:    #6B7C85;
    
    }
    &:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color:    #6B7C85;
  
    opacity:  1;
    }
    &::-moz-placeholder { /* Mozilla Firefox 19+ */
    color:    #6B7C85;
   
    opacity:  1;
    }
    &:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color:    #6B7C85;
    
    }
    &::-ms-input-placeholder { /* Microsoft Edge */
    color:    #6B7C85;
    
    }

    &::placeholder { /* Most modern browsers support this now. */
    color:    #6B7C85;
   
    }
`
