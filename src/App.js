import React from "react";
import GlobalStyle from "./globalStyles";
import { Chat } from "./components/chat/chat";
import { Sidebar } from "./components/sidebar/sidebar";
import * as S from './styledApp'

function App() {
  return (
    <div>
      <GlobalStyle />

      <S.Container>
        <Sidebar />
        <Chat />
      </S.Container>

    </div>
  );
}

export default App;
