import { React, useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { Box, useTheme} from '@mui/system';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import FolderIcon from '@mui/icons-material/Folder';
import Paper from '@mui/material/Paper';
import ListItemButton from '@mui/material/ListItemButton';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import People from '@mui/icons-material/People';
import PermMedia from '@mui/icons-material/PermMedia';
import Dns from '@mui/icons-material/Dns';
import Public from '@mui/icons-material/Public';

const data = [
    { icon: <People />, label: 'Authentication' },
    { icon: <Dns />, label: 'Database' },
    { icon: <PermMedia />, label: 'Storage' },
    { icon: <Public />, label: 'Hosting' },
];

const data2 = [
    { icon: <People />, label: 'Authentication' },
    { icon: <Dns />, label: 'Database' },
    { icon: <PermMedia />, label: 'Storage' },
    { icon: <Public />, label: 'Hosting' },
];

const data3 = [
    { icon: <People />, label: 'Authentication' },
    { icon: <Dns />, label: 'Database' },
    { icon: <PermMedia />, label: 'Storage' },
    { icon: <Public />, label: 'Hosting' },
];

function AboutMe() {

    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

    return(
    <Box sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        height: "100%",
    }}>
      <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "right",
            width: "45%", 
            height: "100%", 
        }}>
        <Typography color="white" variant="p"
            sx={{}}>
                Hello! My name is Jack Patton, and I am a senior computer science student at Michigan State University.
             I am currently looking to enter the industry and expand my skillset in both development and leadership
        </Typography>
        <Box sx={{ 
            height: "70%",
            }}>
        </Box>
      </Box>
      <Box sx={{width: "45%", height: "100%"}}>
        <Typography>Stats Go Here</Typography>
    </Box>
    </Box>
    )
}

export default AboutMe;