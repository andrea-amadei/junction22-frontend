import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {useState} from "react";

export default function CenteredTabs() {
  const [value, setValue] = useState(0);
  
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={(event, newValue) => setValue(newValue)} centered>
        <Tab label="Today" />
        <Tab label="Journal" />
      </Tabs>
    </Box>
  );
}
