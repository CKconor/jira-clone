import type { NextPage } from "next";

import { useSession } from "next-auth/react";
import LandingPage from "./LandingPage";
import LoginPage from "./LoginPage";

const Home: NextPage = () => {
  const { data: session } = useSession();
  if (session?.user) {
    return <LandingPage />;
  }
  return <LoginPage />;
};

export default Home;
