import { React, useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box, useTheme} from '@mui/system';

function AboutItem({page, pageChanger, mainPageChanger}) {

    const handlePage = (newPage) => {
        pageChanger(newPage);
        mainPageChanger(true);
    }

    if(page == "education"){
        return(
            <Box sx={{
                display: "flex",
                flexDirection: "column"
            }}>
                <Box sx={{
                    width: "100%",
                    height: "10%"
                }}>
                    <IconButton aria-label="delete" size="large">
                        <ArrowBackIosIcon fontSize="inherit" sx={{color: "white"}} onClick={() => {handlePage("main")}}/>
                    </IconButton>
                </Box>
                <Typography variant="h1" sx={{
                    color: "white",
                    alignSelf: "center"
                }}>
                    Education
                </Typography>
            </Box>
        );
    }else if(page == "experience"){
        return(
            <Box sx={{
                display: "flex",
                flexDirection: "column"
            }}>
                <Box sx={{
                    width: "100%",
                    height: "10%"
                }}>
                    <IconButton aria-label="delete" size="large">
                        <ArrowBackIosIcon fontSize="inherit" sx={{color: "white"}} onClick={() => {handlePage("main")}}/>
                    </IconButton>
                </Box>
                <Typography variant="h1" sx={{
                    color: "white",
                    alignSelf: "center"
                }}>
                    Experience
                </Typography>
            </Box>
        );
    }else{
        return(
            <Box sx={{
                display: "flex",
                flexDirection: "column"
            }}>
                <Box sx={{
                    width: "100%",
                    height: "10%"
                }}>
                    <IconButton aria-label="delete" size="large">
                        <ArrowBackIosIcon fontSize="inherit" sx={{color: "white"}} onClick={() => {handlePage("main")}}/>
                    </IconButton>
                </Box>
                <Typography variant="h1" sx={{
                    color: "white",
                    alignSelf: "center"
                }}>
                    Skills
                </Typography>
            </Box>
        );
    }
}

export default AboutItem;