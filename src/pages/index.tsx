import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import { useSession, signIn, signOut } from "next-auth/react";
import LandingPage from "./LandingPage";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "Test" }]);

  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <h1>Welcome {session.user?.name}</h1>
        <button onClick={() => signOut()}>Sign out</button>
        {hello}
      </>
    );
  }
  return <LandingPage />;
};

export default Home;
