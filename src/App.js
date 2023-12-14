import './App.css';
import { useState, useRef } from "react";
import { useContainerDimensions } from "./ContainerDimensions.js";
import { Paper, Typography, Divider } from '@mui/material';
import { Box } from '@mui/system';
import Grid from '@mui/system/Unstable_Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from "./components/Navbar.js";
import CurrentPage from "./components/CurrentPage.js";
import HelveticaThin from "./fonts/Helvetica-Thin.ttf";

const myTheme = createTheme({
    primary: {
      main: "#181818",
    },
    secondary: {
      main: "#01BAEF",
    },
    typography: {
      fontFamily: 'Helvetica Neue',
      h1: {
        '@media (max-width:1000px)': {
          fontSize: '2.5rem',
          fontWeight: 100,
        },
        fontSize: '4.5rem',
        fontWeight: 100,
      },
      h2: {
        '@media (max-width:1000px)': {
          fontSize: '1.5rem',
          fontWeight: 100,
        },
        fontSize: '3rem',
        fontWeight: 100,
      },
      h3: {
        '@media (max-width:1000px)': {
          fontSize: '1rem',
          fontWeight: 100,
        },
        fontSize: '2rem',
        fontWeight: 100,
      },
      p: {
        fontSize: '1rem',
      }
    },
});


function App() {

  const [currentPage, setCurrentPage] = useState("home");

  const componentRef = useRef();
  

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
        overflow: "auto",
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
              justifyContent: "flex-start",
              height: "100%",
            }}>
              <Grid item xs={12} 
              sx={{
                height: "20%",
                marginBottom: 0,
                paddingTop: "15px",
              }}>
                <Typography variant="h1"
                sx={{
                  color: "white",
                  marginBottom: "0.5vw",
                  marginLeft: "2vw",
                  transition: "font-size 0.3s ease-out"
                }}>
                  Jack Patton
                </Typography>
                <Typography variant="h3" 
                sx={{
                  color: "white",
                  marginBottom: "1.5vw",
                  marginLeft: "2vw",
                  transition: "font-size 0.3s ease-out"
                }}>
                  Developer, Designer, Creator
                </Typography>
                
              </Grid>
              <Grid ref={componentRef} item xs={12} sx={{height: "80%", paddingTop: "25px"}}>
                <CurrentPage pageName={currentPage}></CurrentPage>
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
