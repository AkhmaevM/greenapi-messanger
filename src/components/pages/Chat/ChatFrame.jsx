import { Chat } from "../../chat/chat"
import { Sidebar } from "../../sidebar/sidebar"
import * as S from '../../../styledApp'
import { useState } from "react"


export const ChatFrame = (props) =>{
    const [number, setNumber] = useState('')

    return(
        <S.Container>
            <Sidebar changeNumber={setNumber}/>
            <Chat number={number} instance={props.instance} token={props.token} />
        </S.Container>
    )
}