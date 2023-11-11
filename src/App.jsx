import{Chip, Divider} from '@mui/material';
import CalenderComp from './components/CalenderComp.jsx';
import './App.css';

function App() {
  return (
    <>
      <Divider><Chip label="Calender"/></Divider>
      <CalenderComp />
      
    </>
  );
}

export default App;
