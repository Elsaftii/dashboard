'use client'
import { Avatar, useMediaQuery } from '@mui/material';
import { useSession } from 'next-auth/react';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { signIn, signOut} from "next-auth/react";
import ThemeToggle from '../../app/themeToggle/themeToggle';
import EqualizerIcon from '@mui/icons-material/Equalizer';


// const pages = ['Products', 'Pricing', 'Blog'];

export type HeaderProps ={
  colorModeContext : React.Context<{toggleColorMode : ()=> void ;}>
}
const ColorModeContext = React.createContext({ toggleColorMode: () => { } });


function Header(props:HeaderProps) { 

  const {colorModeContext}= props ;
  const {data: session} =useSession();
  
  const userProfileImg = session?.user?.image as string;
  const userProfileName = session?.user?.name as string ;
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  

  // const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const tableCheck = useMediaQuery('(min-width: 768px)')

  return (
    <AppBar position="fixed" sx={{paddingX:6 , marginBottom:4}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <EqualizerIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            DashBoard
          </Typography>

          
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            DashBoard
          </Typography>
         
         {
          tableCheck &&( <><Box sx={{ paddingRight: 5 ,marginLeft:'auto'}}>{session ? <Typography>signed in as {session?.user?.email}</Typography> : 'not signed in'}</Box><ThemeToggle colorModeContext={colorModeContext} /></>)
         }
          <Box sx={{ flexGrow: 0 }} >
            <Tooltip title="Open profile settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={userProfileName} src={userProfileImg} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                <MenuItem  onClick={()=> session ? signOut() : signIn()}>
                  <Typography textAlign="center">{session? 'sinout' : 'signin'}</Typography>
                </MenuItem>
              
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
