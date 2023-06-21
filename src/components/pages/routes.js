import { Routes, Route } from "react-router-dom";
import { Login } from "./Login/login";
import { ChatFrame } from "./Chat/ChatFrame";
import { useState } from "react";

export default function AppRoutes() {
  const [instance, getInstance] = useState("");
  const [token, getToken] = useState("");

  return (
    <Routes>
      <Route
        path="/"
        element={<Login idInstance={getInstance} apiTokenInstance={getToken} />}
      />
      <Route
        path="/chats"
        element={
          <ChatFrame instance={instance} token={token}  />
        }
      />
      
    </Routes>
  );
}
