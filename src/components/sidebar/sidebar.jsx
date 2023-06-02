import React, { useState } from "react";
import { Contact } from "../contact/contact";
import * as S from "./styledSidebar";
import { useDispatch, useSelector } from "react-redux";

export const Sidebar = () => {
  const [value, setValue] = useState("");
  const [contacts, setContacts] = useState([]);

  

  const appendContact = (e) => {
    if (e.keyCode === 13) {
      contacts.push(<Contact name={value} />);
      console.log(contacts);
      console.log(value);
      setValue("");
      setContacts(contacts);
    }
  };

  const dispatch = useDispatch();
  const contact = useSelector((state) => state.contact);
 


  const addContact = () =>{
    dispatch({type: 'ADD_CONTACT', payload: {contact: contact}})
  }

  
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
        onClick={addContact()}
      >{contacts}</S.contactsList>
    </S.sidebarWrapper>
  );
};
