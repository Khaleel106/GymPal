import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Banner from "../assets/images/Banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "150px", xs: "70px" },
        ml: { sm: "50px", xs: "20px" },
        position: "relative",
        p: "20px",
      }}
    >
      <Typography
        color="#FF2625"
        fontWeight="700"
        sx={{ fontSize: { xs: "40px", lg: "60px" } }}
      >
        GymPal
      </Typography>
      <Typography
        fontWeight="600"
        sx={{
          fontSize: { lg: "44px", xs: "36px" },
        }}
        mb={{ xs: "20px", lg: "23px" }}
        mt={{ xs: "20px", lg: "30px" }}
      >
        Sweat, Smile <br />
        and Repeat
      </Typography>
      <Typography
        fontSize={{ xs: "20px", lg: "25px" }}
        lineHeight={{ xs: "30px", lg: "35px" }}
        mb={{ xs: "20px", lg: "40px" }}
      >
        Check out the most effective exercises
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{
          backgroundColor: "#ff2625",
          padding: { xs: "10px 20px", lg: "15px 30px" },
          fontSize: { xs: "14px", lg: "16px" },
        }}
        aria-label="Explore Exercises"
      >
        EXPLORE EXERCISES
      </Button>
      <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
          mt: 2,
          fontSize: { lg: "150px", xs: "100px" },
          lineHeight: "1",
        }}
      >
        NO PAIN NO GAIN
      </Typography>
      <Box
        component="img"
        src={Banner}
        alt="banner"
        sx={{
          position: 'absolute',
          right: { lg: '40px', md: '20px', sm: '10px' },
          top: { lg: '0px', md: '10px', sm: '20px' },
          width: { lg: '700px', md: '500px', sm: '400px' },
          height: 'auto',
          mt: { lg: '-130px', md: '-100px', sm: '-80px' },
          display: { xs: 'none', sm: 'block' },
          zIndex: 1
        }}
      />
    </Box>
  );
};

export default HeroBanner;
