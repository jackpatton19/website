import './App.css';
import { useState, useRef } from "react";
import { useContainerDimensions } from "./ContainerDimensions.js";
import { Paper, Typography, Divider } from '@mui/material';
import { Box } from '@mui/system';
import Grid from '@mui/system/Unstable_Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from "./components/Navbar.js";
import sketch from "./components/sketch.js";
import {ReactP5Wrapper} from 'react-p5-wrapper';

const myTheme = createTheme({
    primary: {
      main: "#181818",
    },
    secondary: {
      main: "#01BAEF",
    },
    typography: {
      fontFamily: 'sans-serif',
      h1: {
        '@media (max-width:800px)': {
          fontSize: '5rem',
        },
        fontSize: '10vw',
      },
      h2: {
        fontSize: '7vw',
      },
      h3: {
        fontSize: '3vw',
      }
    }
});


function App() {

  const [currentPage, setCurrentPage] = useState("home");

  const componentRef = useRef();
  const { width, height } = useContainerDimensions(componentRef);
  

  return (
    <ThemeProvider theme={myTheme}>
    <Paper
    sx={{
      display: "flex",
      backgroundColor: myTheme.primary.main,
      width: "100vw",
      height: "100vh",
      justifyContent: "center",
      alignItems: "center",

    }}>
      <Box 
      sx={{
        border: 1,
        borderColor: myTheme.secondary.main,
        width: "97vw",
        height: "97vh",
      }}>
        <Grid container 
        sx={{
          height: "100%",
        }}>
          <Grid item xs={8} sx={{}}>
            <Grid container 
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}>
              <Grid item xs={12} 
              sx={{
                height: "40%",
              }}>
                <Typography variant="h1"
                sx={{
                  color: "white",
                  marginBottom: "0.5vw",
                  marginLeft: "2vw",
                }}>
                  Jack Patton
                </Typography>
                <Typography variant="h3" 
                sx={{
                  color: "white",
                  marginBottom: "1.5vw",
                  marginLeft: "2vw",
                }}>
                  Developer, Designer, Creator
                </Typography>
                <Divider sx={{backgroundColor:myTheme.secondary.main, marginRight: "5vw"}}></Divider>
              </Grid>
              <Grid ref={componentRef} item xs={12} sx={{height: "60%"}}>
                <Typography>{currentPage}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
              <Navbar page={currentPage} pageChanger={setCurrentPage}></Navbar>
          </Grid>
        </Grid>
      </Box>
    </Paper>
    </ThemeProvider>
  );
}

export default App;
