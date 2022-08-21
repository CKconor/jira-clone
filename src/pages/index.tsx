import type { NextPage } from "next";

import { useSession, signIn } from "next-auth/react";
import LandingPage from "./LandingPage";

const Home: NextPage = () => {
  const { data: session } = useSession();

  if (session) {
    return <LandingPage />;
  }
  return (
    <>
      <p>Please Login</p>
      <button onClick={() => signIn()}>Sign In</button>
    </>
  );
};

export default Home;
