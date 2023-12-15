import { React, useState, useEffect } from 'react';
import { Box, useTheme} from '@mui/system';

function HomePage() {

    const myTheme = useTheme()

    return(
        <Box color={myTheme.secondary.main} sx={{
            width: "100%",
            height: "100%",
            border: 1,
        }}>

        </Box>
    );

}

export default HomePage;