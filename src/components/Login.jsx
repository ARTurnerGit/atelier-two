import React from "react";
import Navbar from "./subcomponents/Navbar";
import Buttonbar from "./subcomponents/Buttonbar";
import LoginButton from "./subcomponents/LoginButton";

function Login() {
  return (
    <>
      <Navbar text="Welcome" />
      <Buttonbar>
        <LoginButton />
      </Buttonbar>
    </>
  );
}

export default Login;
