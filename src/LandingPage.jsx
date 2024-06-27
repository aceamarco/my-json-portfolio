import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from './components/AppAppBar';
import Hero from './components/Hero';
import LogoCollection from './components/LogoCollection';
import Features from './components/Features';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';

export default function LandingPage() {
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    <Container>
      <Row></Row>
      <Row></Row>
    </Container>
    </>
  )
}

function MUILandingPage() {
  const [mode, setMode] = React.useState('light');
  const lightPalette = {
    primary: {
      main: 'rgba(224, 145, 104, 0.9)', // Persian orange with 90% opacity
      contrastText: '#ffffff',
    },
    secondary: {
      main: 'rgba(254, 218, 176, 0.9)', // Light orange with 90% opacity
      contrastText: '#000000',
    },
    background: {
      default: '#FFFFFF', // White background
      paper: 'rgba(251, 197, 154, 0.7)', // Peach with 70% opacity
    },
    text: {
      primary: '#223835', // Dark slate gray
      secondary: 'rgba(83, 73, 58, 0.7)', // Walnut brown with 70% opacity
    },
  };
  
  
  const darkPalette = {
    primary: {
      main: 'rgba(224, 145, 104, 0.9)', // Persian orange with 90% opacity
      contrastText: '#ffffff',
    },
    secondary: {
      main: 'rgba(254, 218, 176, 0.9)', // Light orange with 90% opacity
      contrastText: '#000000',
    },
    background: {
      default: '#223835', // Dark slate gray
      paper: 'rgba(83, 73, 58, 0.7)', // Walnut brown with 70% opacity
    },
    text: {
      primary: '#FFFFFF', // White text
      secondary: 'rgba(251, 197, 154, 0.7)', // Peach with 70% opacity
    },
  };
  
  
  const darkTheme = createTheme({ palette: darkPalette });
  const lightTheme = createTheme({palette: lightPalette});

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={(mode === 'light') ? lightTheme : darkTheme}>
      <CssBaseline />
      {/* TODO: Fix logo when toggling color, or make new logo that works in light and dark mode */}
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      {/* TODO: Fix opening statement, add picture of your self */}
      <Hero />
      {/* <Box sx={{ bgcolor: 'background.default' }}> */}
      <Box sx={{ bgcolor: 'background.default' }}>
        {/* TODO: Refactor features section into a list of skills like : Full Stack, Infrastructure, etx. */}
        <Features />
        <Divider />
        {/* TODO: Change this into a publications sections */}
        <FAQ />
        <Divider />
        <Footer />
        {/* TODO: Add logos for previous companies: Boeing, Bloomberg, Intuit, 23andMe */}
        <LogoCollection />
      </Box>
    </ThemeProvider>
  );
}