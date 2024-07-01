// src/App.js

import React, { useEffect, useState } from "react";
import "./App.css";
import EmailList from "./components/emailList";
import Login from "./components/login";
import axios from "axios";
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
// import { auth } from "./firebaseConfig";
// import { useAuthState } from "react-firebase-hooks/auth";
// import axios from "axios";

function App() {
  // const [user] = useAuthState(auth);
  // const [tokens, setTokens] = useState(null);
  const [user, setUser] = useState();
  // useEffect(() => {
  //   console.log("inside se efeect", userData);
  //   if (userData?.user?.user?.uid) {
  //     const { user } = userData?.user;
  //     axios
  //       .post("http://localhost:5000/store-tokens", {
  //         userId: user?.uid,
  //         email: user?.email,
  //         tokens: {
  //           access_token: userData?.credential?.accessToken,
  //           id_token: userData?.credential.idToken,
  //           refresh_token: user?.stsTokenManager?.refreshToken, // Ensure this is captured
  //         },
  //       })
  //       .then((response) => {
  //         console.log("Tokens stored:", response.data);
  //       })
  //       .catch((error) => {
  //         console.error("Error storing tokens:", error);
  //       });
  //   }
  // }, [userData]);

  // console.log(userData, "tokens");

  return (
    <GoogleOAuthProvider clientId="226341879966-a1nf9tfijbfkjqrlmqpdephpjd5ilquh.apps.googleusercontent.com">
      <div className="App">
        hello
        <Login />
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
