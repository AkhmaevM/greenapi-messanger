import React from "react";
import * as S from './styledContanct'

export const Contact = ({img, name, message, time}) =>{

    return(
        <S.contactsWrapper>
            <S.contactLogo src={img}  />

            <S.contactMain>
                <S.contactName>{name}</S.contactName>
                <S.contactMessage>{message}</S.contactMessage>
            </S.contactMain>

            <S.messageTime>{time}</S.messageTime>
        </S.contactsWrapper>
    )
}