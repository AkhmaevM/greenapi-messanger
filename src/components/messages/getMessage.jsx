import React from "react";
import * as S from "./styledGetMessage";

export function GetMessage(props) {

  return (
    <S.GetMessageWrapper>
      <S.GetMessageText>{props.message}</S.GetMessageText>
    </S.GetMessageWrapper>
  );
}
