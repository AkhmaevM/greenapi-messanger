import React from "react";
import * as S from "./styledChat";
import { useState } from "react";
const host = "https://api.green-api.com";
const idInstance = "1101821540";
const apiTokenInstance = "3b30a2771999490b8570de933b9d515fb40c203e148d42a7a6";
const chatId = "79055800483@c.us";

export const Chat = ({ contactImg, contactName }) => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    console.log(message);
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chatId: `${chatId}`,
        message: `${message}`, }),
      };
      fetch(`${host}/waInstance${idInstance}/lastIncomingMessages/${apiTokenInstance}`, requestOptions)
        .then((response) => response.json())
  };

  return (
    <S.Wrapper>
      <S.chatTop>
        <S.chatContact>
          <S.contactLogo src={contactImg} />
          <S.contactName>{contactName}</S.contactName>
        </S.chatContact>
      </S.chatTop>

      <S.chatMain>{/* Чат */}</S.chatMain>

      <S.chatBottom>
        <S.inputMessage
          type="text"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          placeholder="Type a message"
        />

        <button onClick={sendMessage}>Send</button>
      </S.chatBottom>
    </S.Wrapper>
  );
};
