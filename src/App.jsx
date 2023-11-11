import{Chip, Divider} from '@mui/material';
import CalenderComp from './components/CalenderComp.jsx';
import DateRangeComp from './components/DateRangeComp.jsx';
import DateRangePickerComp from './components/DateRangePickerComp.jsx';
import './App.css';
import MUIDateRange from './components/MUIDateRange.jsx';


function App() {
  return (
    <>
      <Divider><Chip label="Calender"/></Divider>
      <CalenderComp />

      <Divider><Chip label="Date Range"/></Divider>
      <DateRangeComp />

      <Divider><Chip label="Date Range Picker"/></Divider>
      <DateRangePickerComp />

      <Divider><Chip label="MUI Date Range Picker"/></Divider>
      <MUIDateRange />
      
    </>
  );
}

export default App;
