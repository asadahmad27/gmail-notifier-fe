import React from "react";
import { signInWithGoogle, logOut, auth } from "../firebaseConfig";
// import { useAuthState } from "react-firebase-hooks/auth";

const Login = ({ onLogin }) => {
  //   const [user] = useAuthState(auth);
  const user = null;
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

    signInWithGoogle()
      .then((user) => {
        console.log(user);
        onLogin(user);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      {user ? (
        <>
          <p>Welcome, {user.displayName}</p>
          <button onClick={logOut}>Log Out</button>
        </>
      ) : (
        <button onClick={handleLogin}>Sign In with Google</button>
      )}
    </div>
  );
};

export default Login;
