import type { NextPage } from "next";
import { useSession, signIn, signOut } from "next-auth/react";

const LandingPage: NextPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold">
        To Start Using the Service Please
        <button onClick={() => signIn()}>Sign In</button>
      </h1>
    </>
  );
};

export default LandingPage;
