import React from "react";
import * as S from './styledContanct'

export const Contact = (props) =>{

    return(
        <S.contactsWrapper>
            <S.contactLogo src={props.img}  />

            <S.contactMain>
                <S.contactName>{props.name}</S.contactName>
                <S.contactMessage>{props.message}</S.contactMessage>
            </S.contactMain>

            <S.messageTime>{props.time}</S.messageTime>
        </S.contactsWrapper>
    )
}