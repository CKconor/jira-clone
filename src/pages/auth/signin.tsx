import { getProviders, signIn, useSession } from "next-auth/react";
import { InferGetServerSidePropsType } from "next";
import { FaGithub } from "react-icons/fa";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { CtxOrReq } from "next-auth/client/_utils";

const SignIn = ({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session]);
  return (
    <>
      <section>
        <div>
          <div>
            {providers
              ? Object.values(providers).map((provider, i) => {
                  if (provider.id !== "email") {
                    return (
                      <div key={provider.name}>
                        <div>
                          <span
                            className="cursor-pointer flex flex-row content-center"
                            onClick={() => signIn(provider.id)}
                          >
                            <FaGithub className="mr-2" />
                            Sign in using {provider.name}
                          </span>
                        </div>
                      </div>
                    );
                  }
                })
              : ""}
          </div>
        </div>
      </section>
    </>
  );
};

export const getServerSideProps = async () => {
  const providers = await getProviders();
  return {
    props: { providers },
  };
};

export default SignIn;
