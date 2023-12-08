import * as React from "react";
import "../App.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green, red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#8FB8DE",
    },
    secondary: {
      main: green[500],
    },
    error: {
      main: red[500],
    },
  },
});

export const NavBar = ({
  handleHomeClick,
  handleGalleryClick,
  handleContactClick,
  handleWorkshopClick,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Stack
        display="flex"
        justifyContent={"flex-end"}
        alignContent={"center"}
        direction={"row"}
        spacing={3}
      >
        <Button onClick={handleHomeClick}>Home</Button>
        <Button onClick={handleWorkshopClick} color="primary">
          Workshop
        </Button>
        <Button onClick={handleGalleryClick} color="primary">
          Gallery
        </Button>
        <Button onClick={handleContactClick} color="primary">
          Contact
        </Button>
      </Stack>
    </ThemeProvider>
  );
};
