import React from "react";
import * as S from "./styledChat";
import { useState } from "react";
import axios from "axios";
import { getMessage } from "./getMessage";
const host = "https://api.green-api.com";
const idInstance = "1101821540";
const apiTokenInstance = "3b30a2771999490b8570de933b9d515fb40c203e148d42a7a6";
const chatId = "79055800483@c.us";


export const Chat = ({ contactImg, contactName }) => {
  const [message, setMessage] = useState("");

  const sendMessage = async (e) => {
    console.log(message);
    e.preventDefault()
      // Send WhatsApp message
       await axios.post(`${host}}/waInstance${idInstance}}/sendMessage/${apiTokenInstance}`,{
        headers: 'application/json',
        body:{'message':message, 'chatId':chatId}
      }).then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    console.log("message sended");
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

          <button type="submit  " onClick={sendMessage}>
            Send
          </button>

          <button onClick={getMessage}>get</button>
        
      </S.chatBottom>
    </S.Wrapper>
  );
};
