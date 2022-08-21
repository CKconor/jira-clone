import type { NextPage } from "next";
import { useSession, signOut } from "next-auth/react";
import { trpc } from "../utils/trpc";

const LandingPage: NextPage = () => {
  const { data: session } = useSession();

  const { data, isLoading } = trpc.useQuery([
    "example.tasks",
    { userId: session?.user?.id || null },
  ]);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <h1>Welcome {session?.user?.name}</h1>
      {data?.map((task) => {
        return <div key={task.id}>{task.title}</div>;
      })}
      <button onClick={() => signOut()}>Sign out</button>
    </>
  );
};

export default LandingPage;
