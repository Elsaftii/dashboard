import styled from '@emotion/styled';
import { Button, Link, Paper, useTheme } from '@mui/material';
import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react'
import style from './../../app/page.module.css'



export default function Footer() {
    const { data: session } = useSession();
  const theme = useTheme();

  const FooterLink = styled(Link)`
    color: ${theme.palette.text.primary};
  `;
  return <>
  <footer className={style.footer}>
      <Paper sx={{ width: "100%" }} color={"#262626"}>
        <ul role="menu">
          <li>
            <FooterLink href={"/"}>Home</FooterLink>
          </li>
          <li>
            <FooterLink href={"/dashboard/data"}>Data</FooterLink>
          </li>
          <li>
            <FooterLink href={"/dashboard/profile"}>Profile</FooterLink>
          </li>
          <li>
            <FooterLink href={"/dashboard/settings"}>Settings</FooterLink>
          </li>
          <li>
          <FooterLink href={"/dashboard/login"}>
            <Button
              variant={"text"}
              color={session ? "error" : "success"}
              onClick={() => (session ? signOut() : signIn())}
            >
              {session ? "Sign Out" : "Sign In"}
            </Button>
            </FooterLink>
          </li>
        </ul>
      </Paper>
    </footer>
  </>
}
