import React from "react";
import Header from "../../components/Header";
import { getProviders, signIn } from "next-auth/react";

export default function signin({ providers }) {
  return (
    <>
      <Header />
      <div className="mt-40">
        {Object.values(providers).map((provider) => (
          <div key={provider.name} className=" flex flex-col items-center">
            <img
              className="w-52 object-cover"
              src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
              alt="google image"
            />
            <p className="text-sm italic my-10 text-center">
              Este webside es creado con fines educativos
            </p>
            <button
              className="bg-red-400 rounded-lg text-white p-3 hover:bg-red-500"
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            >
              Entrar con {provider.name}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps = async () => {
  const providers = await getProviders(); // your fetch function here

  return {
    props: {
      providers,
    },
  };
};
