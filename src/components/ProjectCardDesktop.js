import { useTheme } from '@emotion/react';
import { Box } from '@mui/material';
import { React, useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from "react-router-dom";

function ProjectCardDesktop({
    projectName,
    projectDescription,
    projectLanguages,
    nextPageLink
}) {

    const myTheme = useTheme();
    const navigate = useNavigate();

    const handlePage = (path) => {
        if(path.includes("http")){
            window.open(path, "_blank", "noreferrer");
        }else{
            navigate("/" + path);
        }

    }

    const myLanguages = projectLanguages.map((language) => {
        return(
            <li style={{color: "white"}}>{language}</li>
        );
    });

    return(
        <Box color={myTheme.primary.main} onClick={() => {handlePage(nextPageLink)}} sx={{
            width: "96%",
            height: "50%",
            display: "flex",
            flexDirection: "row",
            borderTop: 1,
            borderLeft: 1,
            "&:hover": {
                width: "110%",
                height: "55%"
            },
            transition: "width 0.5s ease-in-out, height 0.5s ease-in-out"
        }}>
            <Box sx={{
                width: "60%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                marginLeft: "2%",
            }}>
                <Typography variant="h1" color="white">{projectName}</Typography>
                <Typography>{projectDescription}</Typography>
            </Box>
            <Box sx={{
                width: "40%",
                height: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
            }}>
                <ul>
                    {myLanguages}
                </ul>
                <IconButton aria-label="delete" size="large">
                    <ArrowForwardIosIcon fontSize="inherit" sx={{color: myTheme.secondary.main}}/>
                </IconButton>
            </Box>
        </Box>
    );
}

export default ProjectCardDesktop;