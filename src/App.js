import './App.css';
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from "./pages/home";
import MoneyMoves from './pages/moneymoves';
import UnderConstruction from './pages/underConstruction';
const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });

const myTheme = createTheme({
    primary: {
      main: "#181818",
      white: "#FFFFFF",
    },
    secondary: {
      main: "#01BAEF",
    },
    typography: {
      fontFamily: 'Helvetica Neue',
      h1: {
        '@media (max-width:1000px)': {
          fontSize: '2.5rem',
          fontWeight: 100,
        },
        fontSize: '4.5rem',
        fontWeight: 100,
      },
      h2: {
        '@media (max-width:1000px)': {
          fontSize: '1.5rem',
          fontWeight: 100,
        },
        fontSize: '3rem',
        fontWeight: 100,
      },
      h3: {
        '@media (max-width:1000px)': {
          fontSize: '1rem',
          fontWeight: 100,
        },
        fontSize: '2rem',
        fontWeight: 100,
      },
      p: {
        fontSize: '1rem',
      }
    },
    palette: {
      primary: createColor('#FFFFFF'),
    },
});


function App() {
  return(
    <ThemeProvider theme={myTheme}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/moneymoves" element={<MoneyMoves />}></Route>
          <Route path="/temp" element={<UnderConstruction />}></Route>
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );

}

export default App;
