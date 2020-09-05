import React from "react";
import Navbar from "./subcomponents/Navbar";
import Buttonbar from "./subcomponents/Buttonbar";
import LoginButton from "./subcomponents/LoginButton";

function Login({ user }) {
  return (
    <>
      <Navbar text="Welcome" />
      <Buttonbar>
        <LoginButton user={user} />
      </Buttonbar>
    </>
  );
}

export default Login;
