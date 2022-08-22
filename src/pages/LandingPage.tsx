import type { NextPage } from "next";
import { signOut } from "next-auth/react";
import { trpc } from "../utils/trpc";

const LandingPage: NextPage = () => {
  const { data: tasks, isLoading } = trpc.useQuery(["tasks.getAll"]);
  const user = trpc.useQuery(["user.getUser"]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <h1>Welcome {user.data?.name}</h1>
      {tasks?.map((task) => {
        return <div key={task.id}>{task.title}</div>;
      })}
      <button onClick={() => signOut()}>Sign out</button>
    </>
  );
};

export default LandingPage;
