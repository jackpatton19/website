import { React, useState, useEffect } from 'react';
import { Box, useTheme} from '@mui/system';
import sillyCat from '../images/sillycat.png';
import { Grid } from '@mui/material';
import ProjectCardDesktop from "./ProjectCardDesktop"

function MoreWorkPage() {

    const myTheme = useTheme()

    return(
        <Box color={myTheme.secondary.main} sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
        }}>
            <Grid container spacing={3} sx={{
                width: "90%",
                height: "80%",
                marginLeft: "2%",
            }}>
                <Grid item xs={12} sm={12} md={12} >
                    <ProjectCardDesktop 
                        projectName="Photography Portfolio"
                        projectDescription="My photography work from the past 8 years"
                        projectLanguages={["Sports", "Landscape", "Lifestyle", "Travel"]}
                        nextPageLink="https://jackpatton2018.myportfolio.com/work">
                    </ProjectCardDesktop>
                </Grid>
            </Grid>
        </Box>
    );

}

export default MoreWorkPage;