"use client"
import Login from '@/app/login/page'
import { Box } from '@mui/material'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function SignIn() {

    const {data : session} = useSession();
    const router = useRouter()
   
  return <>
  <Box sx={{display: "flex", flexDirection:'column',justifyContent:"center", alignItems:"center"}}>
    <h2>{session? router.push('/') : "please log in"}</h2>
    <Login/>
  </Box>
  </>
}
