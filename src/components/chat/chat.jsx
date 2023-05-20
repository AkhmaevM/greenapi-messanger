import React, { useEffect } from "react";
import * as S from "./styledChat";
import { useState } from "react";
import axios from "axios";
const host = "https://api.green-api.com";
const idInstance = "1101821540";
const apiTokenInstance = "3b30a2771999490b8570de933b9d515fb40c203e148d42a7a6";
const chatId = "79055800483";

export const Chat = ({ contactImg, contactName }) => {
  const [message, setMessage] = useState("");

  // useEffect(()=>{
  //  setTimeout(() => {
  //   axios.get(`${host}}/waInstance${idInstance}}/ReceiveNotification/${apiTokenInstance}`
  //   ).then(function (response) {
  //     console.log(response);
  //     console.log("message getted");
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  //  }, 5000);
  // })


  const handleChange = (e)=>{
    setMessage(e.target.value)
  }

  const sendMessage = () => {
    const atribute = {
      chatId: `${chatId}@c.us`,
      message: message,
    };
    
    axios
      .post(
        `https://api.green-api.com/waInstance1101821540/sendMessage/3b30a2771999490b8570de933b9d515fb40c203e148d42a7a6`,
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

        <button >get</button>
      </S.chatBottom>
    </S.Wrapper>
  );
};
