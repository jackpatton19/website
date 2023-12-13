import { React, useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { Box, useTheme} from '@mui/system';
import Grid from '@mui/system/Unstable_Grid';
import Paper from '@mui/material/Paper';
import "./navbar.css";

function Navbar({page, pageChanger}) {

    const myTheme = useTheme();

    const [isHome, setIsHome] = useState(true);
    const [isProjects, setIsProjects] = useState(false);
    const [isMore, setIsMore] = useState(false);
    const [isAbout, setIsAbout] = useState(false);
    const [isContact, setIsContact] = useState(false);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
          setWindowHeight(window.innerHeight);
        };
        window.addEventListener("resize", handleResize);
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

    const handlePage = (newPage) => {
        pageChanger(newPage)
        if(newPage === "home"){
            setIsHome(true);
            setIsProjects(false);
            setIsMore(false);
            setIsAbout(false);
            setIsContact(false);
        }else if(newPage === "projects"){
            setIsHome(false);
            setIsProjects(true);
            setIsMore(false);
            setIsAbout(false);
            setIsContact(false);
        }else if(newPage === "more"){
            setIsHome(false);
            setIsProjects(false);
            setIsMore(true);
            setIsAbout(false);
            setIsContact(false);
        }else if(newPage === "about"){
            setIsHome(false);
            setIsProjects(false);
            setIsMore(false);
            setIsAbout(true);
            setIsContact(false);
        }else{
            setIsHome(false);
            setIsProjects(false);
            setIsMore(false);
            setIsAbout(false);
            setIsContact(true);
        }
    }

    return(
        <Box 
        sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "right",
            width: "100%",
            height: "70%",
        }}>
            <Grid container 
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignContent: "flex-end",
                width: "100%",
                height: "100%",
                marginRight: "10%",
            }}>
                <Grid item sx={12}>
                    {isHome ? (
                        <Box display="flex" justifyContent="flex-end">
                            <Paper sx={{
                            width: "3vw",
                            height: "3vw",
                            borderRadius: "50%",
                            backgroundColor: myTheme.secondary.main,
                        }}></Paper>
                        </Box>
                    ) : (
                        <Typography variant="h3" align="right" onClick={() => {handlePage("home")}} sx={{ color: "white", transition: "font-size 0.3s ease-out", "&:hover": { fontSize: "3.5vw"}}}>Home</Typography>
                    )}
                </Grid>
                <Grid item sx={12}>
                    {isProjects ? (
                        <Box display="flex" justifyContent="flex-end">
                            <Paper sx={{
                            width: "3vw",
                            height: "3vw",
                            borderRadius: "50%",
                            backgroundColor: myTheme.secondary.main,
                        }}></Paper>
                        </Box>
                    ) : (
                        <Typography variant="h3" align="right" onClick={() => {handlePage("projects")}} sx={{color: "white", transition: "font-size 0.3s ease-out", "&:hover": { fontSize: "3.5vw"}}}>Projects</Typography>
                    )}
                </Grid>
                <Grid item sx={12}>
                    {isMore ? (
                        <Box display="flex" justifyContent="flex-end">
                            <Paper sx={{
                            width: "3vw",
                            height: "3vw",
                            borderRadius: "50%",
                            backgroundColor: myTheme.secondary.main,
                        }}></Paper>
                        </Box>
                    ) : (
                        <Typography variant="h3" align="right" onClick={() => {handlePage("more")}} sx={{color: "white", transition: "font-size 0.3s ease-out", "&:hover": { fontSize: "3.5vw"}}}>More Work</Typography>
                    )}
                </Grid>
                <Grid item sx={12}>
                    {isAbout ? (
                        <Box display="flex" justifyContent="flex-end">
                            <Paper sx={{
                            width: "3vw",
                            height: "3vw",
                            borderRadius: "50%",
                            backgroundColor: myTheme.secondary.main,
                        }}></Paper>
                        </Box>
                    ) : (
                        <Typography variant="h3" align="right" onClick={() => {handlePage("about")}} sx={{color: "white", transition: "font-size 0.3s ease-out", "&:hover": { fontSize: "3.5vw"}}}>About Me</Typography>
                    )}
                </Grid>
                <Grid item sx={12}>
                    {isContact ? (
                        <Box display="flex" justifyContent="flex-end">
                            <Paper sx={{
                            width: "3vw",
                            height: "3vw",
                            borderRadius: "50%",
                            backgroundColor: myTheme.secondary.main,
                        }}></Paper>
                        </Box>
                    ) : (
                        <Typography variant="h3" align="right" onClick={() => {handlePage("contact")}} sx={{color: "white", transition: "font-size 0.3s ease-out", "&:hover": { fontSize: "3.5vw"}}}>Contact</Typography>
                    )}
                </Grid>
            </Grid>
        </Box>
    )
}

export default Navbar;