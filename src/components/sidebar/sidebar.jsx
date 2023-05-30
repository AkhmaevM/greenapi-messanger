import React, { useState } from "react";
import { Contact } from "../contact/contact";
import * as S from "./styledSidebar";

export const Sidebar = () => {
  const [value, setValue] = useState("");
  const [contacts, setContacts] = useState([]);


  const appendContact = (e) => {
    if (e.keyCode === 13) {
     
      contacts.push(<Contact name={value}/>)
      console.log(contacts);                                                                                                                                                                           
      setValue("");
      setContacts(contacts)
    }
  };

  return (
    <S.sidebarWrapper>
      <S.sidebarTop>
        <S.contactSearch
          type="search"
          placeholder="Search or start new chat"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          onKeyUp={appendContact}      
        />
      </S.sidebarTop>

      <S.contactsList>
        {
          contacts
        }
      </S.contactsList>
    </S.sidebarWrapper>
  );
};
