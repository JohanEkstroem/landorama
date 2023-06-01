import './App.css';
import {
  Box,
  createTheme,
  Typography,
  Tabs,
  Tab,
  useMediaQuery,
  Grid,
} from '@mui/material';
import Introduction from './components/Introduction';
import HomeIntro from './components/HomeIntro';
import { useState } from 'react';

const customBreakpoints = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
      xxl: 2560,
    },
  },
});

function App() {
  const [value, setValue] = useState(0);
  const biggerThanXL = useMediaQuery(customBreakpoints.breakpoints.up('xxl'));
  const isSmall = useMediaQuery(customBreakpoints.breakpoints.down('sm'));

  const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3, display: 'flex', justifyContent: 'flex-start' }}>
            {children}
          </Box>
        )}
      </div>
    );
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ height: '100vh' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          pt: biggerThanXL ? 40 : 10,
          mb: biggerThanXL ? 30 : 20,
        }}
      >
        <Typography
          variant="h1"
          sx={{ fontFamily: 'Ubuntu', fontWeight: 700, color: '#464a50' }}
        >
          Working title
        </Typography>
      </Box>
      <Grid container>
        <Grid item xl={3}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            onChange={handleChange}
            sx={{
              borderRight: 1,
              borderColor: 'black',
            }}
            value={value}
          >
            {['Home', 'Johan', 'Haeju', 'Together'].map((menuItem) => (
              <Tab
                label={menuItem}
                sx={{
                  fontSize: biggerThanXL ? '70px' : '30px',
                  display: 'flex',
                  alignItems: 'flex-end',
                  m: biggerThanXL ? 5 : 2,
                  ml: biggerThanXL ? 30 : 0,
                  fontFamily: 'Ubuntu',
                  maxWidth: '500px',
                }}
                key={menuItem}
              />
            ))}
          </Tabs>
        </Grid>
        <Grid item xl={9}>
          <Box>
            <TabPanel value={value} index={0}>
              <HomeIntro />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Introduction />
            </TabPanel>
            <TabPanel value={value} index={2}>
              haeju component
            </TabPanel>
            <TabPanel value={value} index={3}>
              together component
            </TabPanel>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
