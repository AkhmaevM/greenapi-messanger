import React from "react";
import { Contact } from "../contact/contact";
import * as S from './styledSidebar'

export const Sidebar = ()=>{

    return(

        <S.sidebarWrapper>
            <S.sidebarTop>
                <S.contactSearch type="search"  placeholder="Search or start new chat"/>
            </S.sidebarTop>

            <S.contactsList>
                <Contact name='user1' message='test message' time='01:44 pm' />
                <Contact name='user2' message='test message' time='01:44 pm' />
                <Contact name='user3' message='test message' time='01:44 pm' />

            </S.contactsList>
        </S.sidebarWrapper>
    )
}
