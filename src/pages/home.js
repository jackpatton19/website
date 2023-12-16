import { React, useState, useEffect } from 'react';
import { useRef } from "react";
import { useContainerDimensions } from "../ContainerDimensions.js";
import { Paper, Typography, Divider } from '@mui/material';
import { Box, useTheme } from '@mui/system';
import Grid from '@mui/system/Unstable_Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from "../components/Navbar.js";
import CurrentPage from "../components/CurrentPage.js";
import HelveticaThin from "../fonts/Helvetica-Thin.ttf";
import bgImage from '../images/background_1.jpg';

function Home() {
    const [currentPage, setCurrentPage] = useState("home");

    const componentRef = useRef();

    const myTheme = useTheme()

    return (
        <Paper
        sx={{
        display: "flex",
        backgroundImage: `url(${bgImage})`,
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",

        }}>
            <Box 
            sx={{
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
    );
}

export default Home;