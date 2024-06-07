import React, { useState } from "react";
import { Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import SearchExercises from "../components/SearchExercises";
import HeroBanner from "../components/HeroBanner";
import Exercises from "../components/Exercises";

const theme = createTheme();

const Home = () => {
  const [ bodyPart, setBodyPart ] = useState("all");
  const [exercises, setExercises] = useState([]);

  return (
    <Box>
      <HeroBanner />
      <ThemeProvider theme={theme}>
        <SearchExercises
          setExercises={setExercises}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </ThemeProvider>
      <Exercises
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
      />
    </Box>
  );
};

export default Home;
