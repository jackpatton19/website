import { React, useState, useEffect } from 'react';
import { Box, useTheme} from '@mui/system';
import { Grid } from '@mui/material';
import ProjectCardDesktop from "./ProjectCardDesktop"

function ProjectsPage() {

    const myTheme = useTheme();

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const [isMobile, setIsMobile] = useState(false);

    const projects = [
        {
            name: "Money Moves",
            description: "Full Stack Financial Education Platform",
            languages: ["React.JS", "Node.JS", "AWS EC2 / S3", "MySQL"],
            link: "moneymoves"},
        {
            name: "Second Project",
            description: "Second project decsription will go here",
            languages: ["Language 1", "Language 2", "Language 3", "Language 4"],
            link: "temp"},
        {
            name: "Third Project",
            description: "Third project description will go here",
            languages: ["Language 1", "Language 2", "Language 3", "Language 4"],
            link: "temp"},
    ]

    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
          setWindowHeight(window.innerHeight);
        };
        if(window.innerWidth < 1000){
            setIsMobile(true);
        }else{
            setIsMobile(false);
        }
        window.addEventListener("resize", handleResize);
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      });

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
                        projectName={projects[0].name}
                        projectDescription={projects[0].description}
                        projectLanguages={projects[0].languages}
                        nextPageLink={projects[0].link}>
                    </ProjectCardDesktop>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                <ProjectCardDesktop 
                        projectName={projects[1].name}
                        projectDescription={projects[1].description}
                        projectLanguages={projects[1].languages}
                        nextPageLink={projects[1].link}>
                    </ProjectCardDesktop>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                <ProjectCardDesktop 
                        projectName={projects[2].name}
                        projectDescription={projects[2].description}
                        projectLanguages={projects[2].languages}
                        nextPageLink={projects[2].link}>
                    </ProjectCardDesktop>
                </Grid>
            </Grid>
        </Box>
    );

}

export default ProjectsPage;