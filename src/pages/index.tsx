import type { NextPage } from "next";
import { trpc } from "../utils/trpc";
import { useSession, signIn, signOut } from "next-auth/react";

const Home: NextPage = () => {
  const { data: session } = useSession();

  const user = session?.user?.id;

  const { data, isLoading } = trpc.useQuery([
    "example.tasks",
    { userId: user || null },
  ]);

  console.log(data);

  if (isLoading) return <p>Loading...</p>;

  if (session) {
    return (
      <>
        <h1>Welcome {session.user?.name}</h1>
        {data?.map((task) => {
          return <div key={task.id}>{task.title}</div>;
        })}
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      <p>Please Login</p>
      <button onClick={() => signIn()}>Sign In</button>
    </>
  );
};

export default Home;
