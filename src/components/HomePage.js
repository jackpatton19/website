import { React, useState, useEffect } from 'react';
import { Box, useTheme} from '@mui/system';
import sillyCat from '../images/sillycat.png';

function HomePage() {

    const myTheme = useTheme()

    return(
        <Box color={myTheme.secondary.main} sx={{
            width: "100%",
            height: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: 'center',
        }}>

        </Box>
    );

}

export default HomePage;