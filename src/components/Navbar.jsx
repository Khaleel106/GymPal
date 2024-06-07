import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from "../assets/images/Logo.png"; 

const Navbar = () => {
  return (
    <Stack 
      direction="row" 
      justifyContent="space-between" 
      alignItems="center"
      sx={{
        px: { xs: 2, sm: 4, lg: 6 }, // Padding for different screen sizes
        py: 2, // Vertical padding
        backgroundColor: '#fff', // Background color
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Box shadow for a subtle effect
        position: 'sticky', // Sticky position to keep navbar at the top
        top: 0, // Sticks to the top
        zIndex: 1000, // Ensures navbar is above other content
      }}
    >
      <Link to="/">
        <img 
          src={Logo} 
          alt="Logo" 
          style={{ 
            width: '50px', 
            height: '50px', 
            margin: '0 20px' 
          }} 
        />
      </Link>
      <Stack 
        direction="row" 
        gap={{ xs: 2, sm: 4, lg: 6 }} // Gap between links, responsive
        fontSize={{ xs: '18px', sm: '20px', lg: '25px' }} // Font size responsive
        alignItems="center"
      >
        <Link 
          to="/" 
          style={{ 
            textDecoration: 'none', 
            color: '#3A1212', 
            borderBottom: '3px solid #FF2625' 
          }}
        >
          Home
        </Link>
        <a 
          href="#exercises" 
          style={{ 
            textDecoration: 'none', 
            color: '#3A1212' 
          }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
