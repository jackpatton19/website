import { React, useState, useEffect } from 'react';
import { Box, useTheme} from '@mui/system';
import Button from '@mui/material/Button';
import { ThemeContext } from '@emotion/react';

function AboutNavbar({pageChanger, mainPage, mainPageChanger}) {

    const myTheme = useTheme();

    const handlePage = (newPage) => {
        pageChanger(newPage);
        mainPageChanger(false);
    }

    return(
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            width: "90%",
            height: "100%",
        }}>
            <Button variant="outlined" color="primary" sx={{
                width: "60%",
                height: "20%",
                borderRadius: "20px",
                "&:hover": {
                  borderRadius: "10px"
                },
                transition: "border-radius 0.5s ease-out"
            }} onClick={() => {handlePage("education")}}>Education</Button>
            <Button variant="outlined" sx={{
                width: "60%",
                height: "20%",
                borderRadius: "20px",
                "&:hover": {
                  borderRadius: "10px"
                },
                transition: "border-radius 0.5s ease-out"
            }} onClick={() => {handlePage("experience")}}>Experience</Button>
            <Button variant="outlined" sx={{
                width: "60%",
                height: "20%",
                borderRadius: "20px",
                "&:hover": {
                  borderRadius: "10px"
                },
                transition: "border-radius 0.5s ease-out"
            }} onClick={() => {handlePage("skills")}}>Skills</Button>

        </Box>
    );
}

export default AboutNavbar;