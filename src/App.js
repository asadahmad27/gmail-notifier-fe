// src/App.js

import React, { useEffect, useState } from "react";
import "./App.css";
import EmailList from "./components/emailList";
import Login from "./components/login";
// import { auth } from "./firebaseConfig";
// import { useAuthState } from "react-firebase-hooks/auth";
// import axios from "axios";

function App() {
  // const [user] = useAuthState(auth);
  const [tokens, setTokens] = useState(null);

  // useEffect(() => {
  //   if (user) {
  //     user.getIdToken(true).then((idToken) => {
  //       const { uid } = user;
  //       // Send idToken and uid to the backend
  //       axios
  //         .post("http://localhost:3000/store-tokens", {
  //           userId: uid,
  //           tokens: idToken,
  //         })
  //         .then((response) => {
  //           console.log("Tokens stored:", response.data);
  //         })
  //         .catch((error) => {
  //           console.error("Error storing tokens:", error);
  //         });
  //     });
  //   }
  // }, [user]);

  return (
    <div className="App">
      hello
      <header className="">
        <h1>Gmail Notifier</h1>
      </header>
      <div className="">
        <EmailList />
        {/* <Login onLogin={(user) => setTokens(user?.refreshToken)} /> */}
        {/* {user && } */}
      </div>
    </div>
  );
}

export default App;
