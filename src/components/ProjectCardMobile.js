import { useTheme } from '@emotion/react';
import { Box } from '@mui/material';
import { React, useState, useEffect } from 'react';

function ProjectCardDesktop() {

    const myTheme = useTheme();

    return(
        <Box color={myTheme.primary.white} sx={{
            width: "100%",
            height: "90%",
            border: 1
        }}>

        </Box>
    );
}

export default ProjectCardDesktop;