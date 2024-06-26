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

export default function LandingPage() {
  const [mode, setMode] = React.useState('light');
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      {/* TODO: Fix logo when toggling color, or make new logo that works in light and dark mode */}
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      {/* TODO: Fix opening statement, add picture of your self */}
      <Hero />
      <Box sx={{ bgcolor: 'background.default' }}>
        {/* TODO: Add logos for previous companies: Boeing, Bloomberg, Intuit, 23andMe */}
        <LogoCollection />
        {/* TODO: Refactor features section into a list of skills like : Full Stack, Infrastructure, etx. */}
        <Features />
        <Divider />
        {/* TODO: Change this into a publications sections */}
        <FAQ />
        <Divider />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}