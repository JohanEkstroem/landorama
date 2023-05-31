import './App.css';
import {
  Box,
  Typography,
  MenuList,
  MenuItem,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Introduction from './components/Introduction';
import HomeIntro from './components/HomeIntro';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState(0);

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
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const theme = useTheme();
  const isNormalSize = useMediaQuery(theme.breakpoints.down('xl'));
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ height: '100vh' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          pt: isNormalSize ? 10 : 40,
          mb: isNormalSize ? 10 : 30,
        }}
      >
        <Typography
          variant="h1"
          sx={{ fontFamily: 'Ubuntu', fontWeight: 700, color: '#464a50' }}
        >
          Working title
        </Typography>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: 'background.paper',
          display: 'flex',
          // ml: isNormalSize ? 15 : '15%',
          ml: isNormalSize ? 15 : 'calc(10px + 10vw)',
        }}
      >
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
          {['Home', 'Johan', 'Haeju', 'Together'].map((menuItem, index) => (
            <Tab
              label={menuItem}
              sx={{
                fontSize: isNormalSize ? '30px' : '55px',
                display: 'flex',
                alignItems: 'flex-end',
                m: 2,
                fontFamily: 'Ubuntu',
              }}
            />
          ))}
        </Tabs>
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
    </Box>
  );
}

export default App;
