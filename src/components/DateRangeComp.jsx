import React, {useEffect, useState, useRef} from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
// import { DateRange } from 'react-date-range';
// import { TextField } from '@mui/material';
import { addDays } from 'date-fns';

function DateRangeComp() {

  const [range, setRange] = useState([{
    startDate: new Date(),
    endDate: addDays(new Date(), 7),
    key: 'selection'
  }]);

  const [open, setOpen] = useState(false);
  const refOne = useRef(null);

  function hideOnEscape(e) {
    if(e.key === 'Escape'){
      setOpen(false);
    }
  }
  function hideOnClickOutside(e) {
    if(refOne.current && !refOne.current.contains(e.target)){
      setOpen(false);
    }
  }

  useEffect(()=>{
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  },[]);

  return (
    <div>DateRangeComp</div>
  )
}

export default DateRangeComp