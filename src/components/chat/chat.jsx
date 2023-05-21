import React, { useEffect } from "react";
import * as S from "./styledChat";
import { useState } from "react";
import axios from "axios";
const host = "https://api.green-api.com";
const idInstance = "1101821540";
const apiTokenInstance = "3b30a2771999490b8570de933b9d515fb40c203e148d42a7a6";
const chatId = "79055800483";

const getMessage = () =>{
  setTimeout(() => {
    axios.get(
      `${host}/waInstance${idInstance}/receiveNotification/${apiTokenInstance}`
    , {mode: 'no-cors'})
      .then((response) =>{
        console.log(response.data.body);
        console.log("message getted");
      })
      .catch((error) => console.log("error", error));
  }, 5000);
}

export const Chat = ({ contactImg, contactName }) => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    getMessage()
  });

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    const atribute = {
      chatId: `${chatId}@c.us`,
      message: message,
    };

    axios
      .post(
        `${host}/waInstance${idInstance}/sendMessage/${apiTokenInstance}`,
        atribute
      )
      .then(function (response) {
        console.log(response);
        console.log("message sended");
        setMessage("");
      })
      .catch(function (error) {
        console.log(error);
      });
    setMessage(" ");
  };

  return (
    <S.Wrapper>
      <S.chatTop>
        <S.chatContact>
          <S.contactLogo src={contactImg} />
          <S.contactName>{chatId}</S.contactName>
        </S.chatContact>
      </S.chatTop>

      <S.chatMain>{/* Чат */}</S.chatMain>

      <S.chatBottom>
        <S.inputMessage
          type="text"
          onChange={handleChange}
          placeholder="Type a message"
          value={message}
        />

        <button onClick={sendMessage}>Send</button>

        <button>get</button>
      </S.chatBottom>
    </S.Wrapper>
  );
};
