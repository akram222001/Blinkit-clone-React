import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './Header.css'



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Header() {


  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="sticky" sx={{ backgroundColor: "white", borderBottom: "1px solid rgb(238, 238, 238)", boxShadow: "none"}}>
        <Toolbar className='Navbar'>
          <div className='LogoDiv'>
        <img src="Logo.png" alt="logo" className="Logo"/>
        </div>
        <div className='LocDiv'>
          <Typography className="DelPlace" variant="h6" component="div" sx={{color:"black", marginLeft: "50px", marginRight:"30px" }}>
          <span className='Del'>Delivery in 12 minutes<br></br></span><span className='Location'>Mumbai, Maharashtra, india</span>
          </Typography>
          </div>
          <Search className='SearchBar' sx={{ flexGrow: 2, color:"black", cursor: "text", border: "1px solid rgba(0, 0, 0, 0.04)",
          boxShadow: "rgb(28 28 28 / 8%) 0px 2px 8px", padding:"4px 0", borderRadius: "10px"}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Typography className="LoginBtn" align="center" variant="h6" component="div" sx={{ flexGrow: 1, color:"black", fontSize:"18px" }}>
           Login
          </Typography>
          <Button variant="outlined" className="NavBtn" startIcon={<ShoppingCartOutlinedIcon />}>My Cart</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

