import { React, useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { Box, useTheme} from '@mui/system';
import People from '@mui/icons-material/People';
import PermMedia from '@mui/icons-material/PermMedia';
import Dns from '@mui/icons-material/Dns';
import Public from '@mui/icons-material/Public';
import Grid from '@mui/system/Unstable_Grid';
import Avatar from '@mui/material/Avatar';
import avatarIcon from '../images/headshot.JPG'
import AboutNavbar from './AboutNavbar.js'
import AboutItem from './AboutItem.js'

function AboutMe() {

    const [mainPage, setMainPage] = useState(true);
    const [currentPage, setCurrentPage] = useState("education");

    return(
    <Grid container sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        height: "100%",
    }}>
      <Grid item sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "right",
            height: "100%", 
        }} xs={12} md={6}>
        <Avatar alt="Jack Patton" src={avatarIcon} sx={{alignSelf: "center", height: "12rem", width: "12rem"}}/>
        <Typography color="white" variant="p"
            sx={{textAlign: "center", padding: "10px"}}>
                Hello! My name is Jack Patton, and I am a senior computer science student at Michigan State University.
                I am currently looking to enter the industry and expand my skillset in both development and leadership
        </Typography>
      </Grid>

      <Grid item sx={{
            height: "100%",
        }} xs={12} md={6}>
            {mainPage 
            ? <AboutNavbar pageChanger={setCurrentPage} mainPage={mainPage} mainPageChanger={setMainPage}></AboutNavbar>
            : <AboutItem page={currentPage} pageChanger={setCurrentPage} mainPageChanger={setMainPage}></AboutItem>
            }
      </Grid>
    </Grid>
    )
}

export default AboutMe;