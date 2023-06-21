import React, { useState } from "react";
import { Contact } from "../contact/contact";
import * as S from "./styledSidebar";

export const Sidebar = (props) => {
  const [value, setValue] = useState("");
  const [contacts, setContacts] = useState([]);

  const appendContact = (e) => {
    if (e.keyCode === 13) {
      contacts.push(<Contact name={value} />);
      console.log(value);
      setValue("");
      setContacts(contacts);
    }
  };

  

  const addContact = (e) => {
    console.log(e.target.textContent);
    localStorage.setItem("contact", e.target.textContent);
    console.log(localStorage.getItem("contact"));

    props.changeNumber(e.target.textContent);
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

      <S.contactsList
        onClick={(e) => {
          addContact(e);
        }}
      >
        {contacts}
      </S.contactsList>
    </S.sidebarWrapper>
  );
};
