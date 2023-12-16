import { List, ListItem } from '@mui/material';
import { Box, useTheme } from '@mui/system';
import { React, useState, useEffect } from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { Typography } from '@mui/material';

function ContactPage() {

    const myTheme = useTheme();

    return(
        <Box color={myTheme.secondary.main} sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Box sx={{
                width: "80%",
                height: "80%",
            }}>
                <List sx={{
                    width: "100%",
                    height: "100%"
                }}>
                    <ListItem sx={{height: "30%", color: "white"}}>
                        <ListItemIcon><EmailIcon fontSize="large" sx={{color: "white"}}></EmailIcon></ListItemIcon>
                        <ListItemText><Typography variant="h2">patton27@msu.edu</Typography></ListItemText>
                    </ListItem>

                    <ListItem sx={{height: "30%", color: "white"}}>
                        <ListItemIcon><LinkedInIcon fontSize="large" sx={{color: "white"}}></LinkedInIcon></ListItemIcon>
                        <ListItemText><Typography variant="h2"><a href="https://www.linkedin.com/in/jack-patton-74a2651b5/" target="_blank">LinkedIn</a></Typography></ListItemText>
                    </ListItem>

                    <ListItem sx={{height: "30%", color: "white"}}>
                        <ListItemIcon><PhoneIphoneIcon fontSize="large" sx={{color: "white"}}></PhoneIphoneIcon></ListItemIcon>
                        <ListItemText><Typography variant="h2">+1 (630) - 544 - 9680</Typography></ListItemText>
                    </ListItem>
                </List>
            </Box>
        </Box>
    );

}

export default ContactPage;