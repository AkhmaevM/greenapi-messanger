import React from "react";
import * as S from './styledPostMessage'

export const PostMessage = (props) =>{
    return(
        <S.PostMessageWrapperGreen>
            <S.PostMessageText>
                {props.message}
            </S.PostMessageText>
        </S.PostMessageWrapperGreen>
    )
}