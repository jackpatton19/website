import { React, useState, useEffect } from 'react';
import { Box, useTheme} from '@mui/system';
import Button from '@mui/material/Button';
import { NoEncryption } from '@mui/icons-material';

function AboutNavbar({pageChanger, mainPage, mainPageChanger}) {

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
            border: 0
        }}>
            <Button variant="outlined" sx={{
                width: "60%",
                height: "20%",
                borderRadius: "10px",
            }} onClick={() => {handlePage("education")}}>Education</Button>
            <Button variant="outlined" sx={{
                width: "60%",
                height: "20%",
                borderRadius: "10px",
            }} onClick={() => {handlePage("experience")}}>Experience</Button>
            <Button variant="outlined" sx={{
                width: "60%",
                height: "20%",
                borderRadius: "10px",
            }} onClick={() => {handlePage("skills")}}>Skills</Button>

        </Box>
    );
}

export default AboutNavbar;