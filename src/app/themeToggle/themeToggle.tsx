// import { Box, CssBaseline,  ThemeProvider, createTheme, useTheme } from "@mui/material";
// import { IconButton, Typography, useMediaQuery } from '@mui/material';
// import React from 'react'
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';

// export type ThemeToggleprops ={
//     colorModeContext: React.Context<{toggleColorMode : () => void ;}>
//    }

// // export default function ThemeToggle(props : ThemeToggleprops) {
//    const mobileCheck = useMediaQuery(('min-width : 500px'))
//    const {colorModeContext = React.createContext({toggleColorMode:()=>{}})} = props ;
//    const theme = useTheme();
//    const colorMode = React.useContext(colorModeContext)
//   return <>
//   {
//     mobileCheck &&(
//         <Typography>{theme.palette.mode}</Typography>
//     )
//   }
//   <IconButton onClick={colorMode.toggleColorMode} sx={{mr:2} title={theme.palette.mode + 'mode'} aria-label={theme.palette.mode +'mode button'} }
//     {theme.palette.mode === 'dark' ? <Brightness7Icon/> :<Brightness4Icon/>}
    
//   </IconButton>
  
//   </>
// }
import React from 'react'
import { Box, CssBaseline, IconButton, ThemeProvider, createTheme, useMediaQuery, useTheme } from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export type ThemeToggleprops ={
    colorModeContext: React.Context<{toggleColorMode : () => void ;}>
   }

export default function ThemeToggle(props : ThemeToggleprops) {
    const mobileCheck = useMediaQuery(('min-width : 500px'))
    const {colorModeContext = React.createContext({toggleColorMode:()=>{}})} = props ;
    const theme = useTheme();
    const colorMode = React.useContext(colorModeContext)
  return<>
              <Box
                sx={{
                  display: 'flex',
                  // width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                //   bgcolor: 'background.default',
                  color: 'text.primary',
                  borderRadius: 1,
                  p: 1,
                }}
              >
                {/* {theme.palette.mode} mode */}
                <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                  {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
              </Box>
  </>
}
