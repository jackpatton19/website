import { useTheme } from '@emotion/react';
import { Box } from '@mui/material';
import { React, useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton from '@mui/material/IconButton';

function ProjectCardDesktop({
    projectName,
    projectDescription,
    projectLanguages,
    nextPageLink
}) {

    const myTheme = useTheme();

    const handlePage = (path) => {

    }

    const myLanguages = projectLanguages.map((language) => {
        return(
            <li>{language}</li>
        );
    });

    return(
        <Box color={myTheme.secondary.main} sx={{
            width: "96%",
            height: "85%",
            display: "flex",
            flexDirection: "row",
            borderTop: 1,
            borderLeft: 1,
            "&:hover": {
                width: "110%",
                height: "95%"
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
                    <ArrowForwardIosIcon fontSize="inherit" sx={{color: "white"}} onClick={() => {handlePage("main")}}/>
                </IconButton>
            </Box>
        </Box>
    );
}

export default ProjectCardDesktop;