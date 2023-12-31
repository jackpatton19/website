import { React, useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { Box, useTheme} from '@mui/system';
import Grid from '@mui/system/Unstable_Grid';
import Paper from '@mui/material/Paper';
import AboutMe from './AboutMe.js';
import HomePage from './HomePage.js';
import ProjectsPage from './ProjectsPage.js';
import ContactPage from './ContactPage.js';
import MoreWorkPage from './MoreWorkPage.js';

function CurrentPage({pageName}) {

    if({pageName}.pageName == "home"){
        return(
            <HomePage></HomePage>
        )
    }else if({pageName}.pageName == "projects"){
        return(
            <ProjectsPage></ProjectsPage>
        )
    }else if({pageName}.pageName == "more"){
        return(
            <MoreWorkPage></MoreWorkPage>
        )
    }else if({pageName}.pageName == "about"){
        return(
            <AboutMe></AboutMe>
        )
    }else{
        return(
            <ContactPage></ContactPage>
        )
   }

}

export default CurrentPage