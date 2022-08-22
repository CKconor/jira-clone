import type { NextPage } from "next";
import { signIn } from "next-auth/react";

const LoginPage: NextPage = () => {
  return (
    <>
      <p>Please Login</p>
      <button onClick={() => signIn()}>Sign In</button>
    </>
  );
};

export default LoginPage;
