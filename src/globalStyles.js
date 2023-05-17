import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&display=swap');

*{
    margin: 0;
    paddin: 0;
    box-sizing: border-box;
    font-family: 'Work Sans', sans-serif;
  }

  input{
    outline:none
  }

`;
 
export default GlobalStyle;