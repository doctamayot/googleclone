import { useSession, signIn, signOut } from "next-auth/react";

export default function User() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <img
          className="h-10 w-10 rounded-full hover:bg-gray-200"
          src={session.user.image}
          alt="session imagen"
          referrerPolicy="no-referrer"
        />
        <button
          className="text-white bg-red-500 px-6 py-2 rounded-md font-bold
           hover:brightness-105 hover:shadow-md "
          onClick={signOut}
        >
          Cerrar
        </button>
      </>
    );
  }
  return (
    <>
      <button
        className="text-white bg-blue-500 px-6 py-2 rounded-md font-bold hover:brightness-105 hover:shadow-md"
        onClick={signIn}
      >
        Login
      </button>
    </>
  );
}
