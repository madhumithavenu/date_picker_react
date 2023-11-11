import{Chip, Divider} from '@mui/material';
import CalenderComp from './components/CalenderComp.jsx';
import DateRangeComp from './components/DateRangeComp.jsx';
import DateRangePickerComp from './components/DateRangePickerComp.jsx';
import './App.css';

function App() {
  return (
    <>
      <Divider><Chip label="Calender"/></Divider>
      <CalenderComp />

      <Divider><Chip label="Data Range"/></Divider>
      <DateRangeComp />

      <Divider><Chip label="Data Range Picker"/></Divider>
      <DateRangePickerComp />
      
    </>
  );
}

export default App;
