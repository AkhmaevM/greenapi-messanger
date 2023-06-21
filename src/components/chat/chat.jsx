import React, { useEffect } from "react";
import * as S from "./styledChat";
import { useState } from "react";
import axios from "axios";
import { PostMessage } from "../messages/postMessage";
import { PostMessageList } from "../messages/styledPostMessage";
import { GetMessage } from "../messages/getMessage";
import { GetMessageList } from "../messages/styledGetMessage";

export const Chat = (props) => {
  const host = "https://api.green-api.com";

  // 1101821540
  // 3b30a2771999490b8570de933b9d515fb40c203e148d42a7a6

  const [message, setMessage] = useState("");
  const [postMessage, setPostMessage] = useState([]);

  const [getMessage, setGetMessage] = useState([]);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = (e) => {
    if (e.keyCode === 13) {
      const atribute = {
        chatId: `${props.number}@c.us`,
        message: message,
      };

      postMessage.push(<PostMessage message={message} />);
      setPostMessage(postMessage);

      axios
        .post(
          `${host}/waInstance${props.instance}/sendMessage/${props.token}`,
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
    }
  };
  console.log(props.token);
  console.log(props.number);
  const getMessages = () => {
    axios
      .get(
        `${host}/waInstance${props.instance}/receiveNotification/${props.token}`,
        { mode: "no-cors" }
      )
      .then((response) => {
        if (
          response.data.body.messageData === undefined ||
          response.data.body.senderData.chatId !== `${props.number}@c.us`
        ) {
          axios.delete(
            `${host}/waInstance${props.instance}/deleteNotification/${props.token}/${response.data.receiptId}`,
            { mode: "no-cors" }
          );
        }
        else if (response.data.body.senderData.chatId === `${props.number}@c.us`) {
          console.log(
            response.data.messageData.textMessageData.textMessage
          );
          getMessage.push(<GetMessage message={message} />);
          setGetMessage(
            response.data.body.messageData.textMessageData.textMessage
          );
        }
      })
      .catch(function (error) {
        console.log("error", error);
      });
  };
  useEffect(() => {
    setInterval(() => {
      getMessages();
    }, 5000);
  }, );

  return (
    <S.Wrapper>
      <S.chatTop>
        <S.chatContact>
          <S.contactLogo src={props.contactImg} />
          <S.contactName>{props.number}</S.contactName>
        </S.chatContact>
      </S.chatTop>

      <S.chatMain>
        <PostMessageList>{postMessage}</PostMessageList>

        <GetMessageList>{getMessage}</GetMessageList>
      </S.chatMain>

      <S.chatBottom>
        <S.inputMessage
          type="text"
          onChange={handleChange}
          placeholder="Type a message"
          value={message}
          onKeyUp={sendMessage}
        />
      </S.chatBottom>
    </S.Wrapper>
  );
};
