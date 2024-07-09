// import { signIn, signOut, useSession } from "next-auth/react";
// import Button from "@mui/material/Button";

// const Login = () =>{
//   const {data: session} =useSession();
//   if(session){
//     return<>

//        <Button variant={'contained'} color={'error'} onClick={()=> signOut()}> signOut</Button>

//     </>
//   }
//   return<>
//   <Button variant={'contained'} color={'success'} onClick={()=>  signIn('google')}> signIn with google </Button>
//   </>
// }
// export default Login;
"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import Button from "@mui/material/Button";
import style from './../../page.module.css';

const Login = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <Button variant={"contained"} color={"error"} onClick={() => signOut()}>
          Sign out
        </Button>
      </>
    );
  }
  return (
    <>
    <div >
      <Button variant={"contained"} color={"success"} onClick={() => signIn('google')}>
        Sign in
      </Button>
      </div>
    </>
  );
};

export default Login;