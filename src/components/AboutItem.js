import { React, useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box, useTheme} from '@mui/system';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CodeIcon from '@mui/icons-material/Code';
import MemoryIcon from '@mui/icons-material/Memory';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import Collapse from '@mui/material/Collapse';
import CircleIcon from '@mui/icons-material/Circle';

function AboutItem({page, pageChanger, mainPageChanger}) {

    const [languagesOpen, setLanguagesOpen] = useState(false);
    const [frameworksOpen, setFrameworksOpen] = useState(false);
    const [skillsOpen, setSkillsOpen] = useState(false);

    const handlePage = (newPage) => {
        pageChanger(newPage);
        mainPageChanger(true);
    }

    const handleExpandLanguages = () => {
        setLanguagesOpen(!languagesOpen)
        if(frameworksOpen){
            setFrameworksOpen(false)
        }
        if(skillsOpen){
            setSkillsOpen(false)
        }
    }
    const handleExpandFrameworks = () => {
        setFrameworksOpen(!frameworksOpen)
        if(languagesOpen){
            setLanguagesOpen(false)
        }
        if(skillsOpen){
            setSkillsOpen(false)
        }
    }
    const handleExpandSkills = () => {
        setSkillsOpen(!skillsOpen)
        if(languagesOpen){
            setLanguagesOpen(false)
        }
        if(frameworksOpen){
            setFrameworksOpen(false)
        }
    }


    const languages = ["Python", "Javascript", "C++", "Swift", "Java"]
    const languagesItems = languages.map((language) =>
        <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <CircleIcon />
            </ListItemIcon>
            <ListItemText primary={language} />
        </ListItemButton>
    );

    const frameworks = ["React.JS", "Node.JS", "SwiftUI", "Flutter", "Git"]
    const frameworkItems = frameworks.map((language) =>
        <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <CircleIcon />
            </ListItemIcon>
            <ListItemText primary={language} />
        </ListItemButton>
    );

    const otherSkills = ["Project Management", "Problem Solving", "Graphic Design", "Photography", "Videography"]
    const skillsItems = otherSkills.map((language) =>
        <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <CircleIcon />
            </ListItemIcon>
            <ListItemText primary={language} />
        </ListItemButton>
    );

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
                flexDirection: "column",
                maxHeight: "100%",
                overflow: "auto"
            }}>
                <Box sx={{
                    width: "100%",
                    height: "10%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start"
                }}>
                    <IconButton aria-label="delete" size="large">
                        <ArrowBackIosIcon fontSize="inherit" sx={{color: "white"}} onClick={() => {handlePage("main")}}/>
                    </IconButton>
                    <Typography variant="h3" color="white" sx={{marginLeft: "10%"}}>My Experience</Typography>
                </Box>
                    <List
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'white', borderRadius: "10px"}}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    >
                        <ListItemButton onClick={handleExpandLanguages}>
                            <ListItemIcon>
                            <CodeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Languages" />
                            {languagesOpen ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={languagesOpen} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {languagesItems}
                            </List>
                        </Collapse>

                        <ListItemButton onClick={handleExpandFrameworks}>
                            <ListItemIcon>
                            <MemoryIcon />
                            </ListItemIcon>
                            <ListItemText primary="Frameworks / Technology" />
                            {frameworksOpen ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={frameworksOpen} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {frameworkItems}
                            </List>
                        </Collapse>

                        <ListItemButton onClick={handleExpandSkills}>
                            <ListItemIcon>
                            <EmojiPeopleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Other Skills" />
                            {skillsOpen ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={skillsOpen} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {skillsItems}
                            </List>
                        </Collapse>
                    </List>
            </Box>
        );
    }
}

export default AboutItem;