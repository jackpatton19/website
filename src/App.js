import './App.css';
import { Paper, Typography, Divider } from '@mui/material';
import { Box } from '@mui/system';
import Grid from '@mui/system/Unstable_Grid';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';

const myTheme = createTheme({
    primary: {
      main: "#1E1E1E",
    },
    secondary: {
      main: "#01BAEF",
    },
    typography: {
      fontFamily: 'sans-serif',
      h1: {
        '@media (max-width:800px)': {
          fontSize: '5rem',
        },
        fontSize: '10vw',
      },
      h2: {
        fontSize: '7vw',
      },
      h3: {
        fontSize: '3vw',
      }
    }
});


function App() {
  return (
    <ThemeProvider theme={myTheme}>
    <Paper
    sx={{
      display: "flex",
      backgroundColor: myTheme.primary.main,
      width: "100vw",
      height: "100vh",
      justifyContent: "center",
      alignItems: "center",

    }}>
      <Box 
      sx={{
        border: 1,
        borderColor: myTheme.secondary.main,
        width: "97vw",
        height: "97vh",
      }}>
        <Grid container 
        sx={{
          height: "100%",
        }}>
          <Grid item xs={8} sx={{}}>
            <Grid container 
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}>
              <Grid item xs={12} 
              sx={{
                height: "40%",
              }}>
                <Typography variant="h1"
                sx={{
                  color: "white",
                  marginBottom: "0.5vw",
                  marginLeft: "2vw",
                }}>
                  Jack Patton
                </Typography>
                <Typography variant="h3" 
                sx={{
                  color: "white",
                  marginBottom: "1.5vw",
                  marginLeft: "2vw",
                }}>
                  Developer, Designer, Creator
                </Typography>
                <Divider sx={{backgroundColor:myTheme.secondary.main, marginRight: "5vw"}}></Divider>
              </Grid>
              <Grid item xs={12} sx={{height: "60%"}}>

              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4} sx={{}}>
            
          </Grid>
        </Grid>
      </Box>
    </Paper>
    </ThemeProvider>
  );
}

export default App;
