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
    border:1px solid #FFFFFF;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.025em;
    color: #6B7C85;
    margin: 20px;
    padding-left: 20px;

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

export const contactsList = styled.div`
    display:flex;
    flex-direction: column;
    row-gap: 20px;
    border-top: 1px solid #E9EDEF;
`