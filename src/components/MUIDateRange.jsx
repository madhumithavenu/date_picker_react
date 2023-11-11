import React, {useState} from 'react';
import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import Box from '@mui/material/Box';
import { DateRangePicker } from '@mui/x-date-pickers-pro';
import {AdapterDayjs} from '@mui/x-date-pickers-pro/AdapterDayjs'


function MUIDateRange() {
  const [value, setValue] = useState([null,null]);

  return (
    <LocalizationProvider
    dateAdapter={AdapterDayjs}
    localeText={{ start: "Check-in", end: "Check-out"}}
    >
      <DateRangePicker
      value={value}
      onChange={newValue=> setValue(newValue)}
      renderInput={(startProps, endProps) =>(
        <React.Fragment>
          <TextField {...startProps}/>
          <Box sx={{ mx:2 }}> to </Box>
          <TextField {...endProps}/>
        </React.Fragment>
      )} 
      />
  </LocalizationProvider>
  )
}

export default MUIDateRange