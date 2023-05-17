import React from "react";
// import { ReactComponent as sendMessage } from "./send.svg";
import * as S from './styledChat'

export const Chat = ({contactImg, contactName}) =>{

    return (
      <S.Wrapper>
        
        <S.chatTop>
          <S.chatContact>
            <S.contactLogo />
            <S.contactName>{contactName}</S.contactName>
          </S.chatContact>
        </S.chatTop>

        <S.chatMain>
            {/* Чат */}
        </S.chatMain>

        <S.chatBottom>
            <S.inputFile type="file" />

            <S.inputMessage type="text" placeholder="Type a message" />

            <button>
                 {/* <sendMessage /> */}
            </button>
        </S.chatBottom>
      </S.Wrapper>
    );

}
