'use client'
import Dashboard from "./dashboard/page";
import { useSession } from "next-auth/react";
import SignIn from "../auth/signin/page";
import Sidemenu from "@/common/sidemenu/sidemenu";


export default function Home() {
  const { data: session } = useSession();

  return (
    <main  >
      {session ? <>
        <Sidemenu />
        <Dashboard/>
      </> : <SignIn/>}

    </main>
  );
}
