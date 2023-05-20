import React, {useEffect, useState} from "react";
import { Contact } from "../contact/contact";
import * as S from './styledSidebar'

export const Sidebar = ()=>{

    const [value, setValue] = useState('')
    const [contact, setContact] = useState(false)

    let currentContact = []
    let children = [];

    
    const handleClick = () =>{
        currentContact.push(value)
        console.log(currentContact);
        for (let i = 0; i < currentContact.length; i ++) {
            children.push(<Contact name={value} />);
          };
        console.log(children);
        setValue('')
        setContact(true)
    }


    return(

        <S.sidebarWrapper>
            <S.sidebarTop>
                <S.contactSearch type="search"  placeholder="Search or start new chat"
                    onChange={e=>setValue(e.target.value)}
                    value={value}
                />

                <button onClick={handleClick}>Add chat</button>
            </S.sidebarTop>

            <S.contactsList>
                { children.map(({name})=>
                    <Contact name={name} />
                )}
            </S.contactsList>
        </S.sidebarWrapper>
    )
}
