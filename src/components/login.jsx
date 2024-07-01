import React, { useState } from "react";
import { signInWithGoogle, logOut, auth } from "../firebaseConfig";
import { useGoogleLogin } from "@react-oauth/google";
// import { useAuthState } from "react-firebase-hooks/auth";

const Login = ({ onLogin }) => {
  //   const [user] = useAuthState(auth);
  // const user = null;
  const [user, setUser] = useState();
  const handleLogin = () => {
    // signInWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //         // Signed in
    //         const user = userCredential.user;
    //         navigate("/home")
    //         console.log(user);
    //     })
    //     .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         console.log(errorCode, errorMessage)
    //     });
    // signInWithGoogle()
    //   .then((user) => {
    //     console.log(user);
    //     onLogin(user);
    //   })
    //   .catch((e) => console.log(e));
  };

  const login = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      console.log(codeResponse);
      setUser(codeResponse);
      const { code } = codeResponse;
      makeAPICall(code);
      // Send the authorization code to your backend
      // const res = await fetch("http://localhost:5000/store-tokens", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ code }),
      // });

      // const data = await res.json();
      // console.log("Backend response:", data);
    },
    onError: (error) => console.log("Login Failed:", error),
    flow: "auth-code",
  });

  const makeAPICall = async (
    code = "4/0ATx3LY7Ixa-YzwVzao3cTaaLqGVZdjn-yt7QcGkM1x3qw5N1ghGu_h17CkAND6qNhBF57A"
  ) => {
    // Send the authorization code to your backend
    const res = await fetch(
      "https://gmail-notifier-local-build-fkbxp5ur6q-uc.a.run.app/store-tokens",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      }
    );

    const data = await res.json();
    console.log("Backend response:", data);
  };
  console.log(user);

  return (
    <div>
      <button onClick={() => login()}>Sign in with Google 🚀 </button>
      {/* <button onClick={() => makeAPICall()}>Sign in with Google 🚀 </button> */}
      {/* {user ? (
        <>
          <p>Welcome, {user.displayName}</p>
          <button onClick={logOut}>Log Out</button>
        </>
      ) : (
        <button onClick={handleLogin}>Sign In with Google</button>
      )} */}
    </div>
  );
};

export default Login;
