import './App.css';
import {BrowserRouter, Routes , Route} from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Navbar from './components/navbar/Navbar';
import CsEvents from './components/events/CsEvents/CsEvents';
import Register from './components/events/CsEvents/Register/Register'
import EcEvents from './components/events/EcEvents/EcEvents';
import EcRegister from './components/events/EcEvents/Register/EcRegister';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={
          <div className="App">
            <Navbar/>
            <Homepage/>
          </div>
        }>
        </Route>
        <Route exact path="/cs-it-events" element={<CsEvents/>}></Route>
        <Route exact path="/cs-it-events/register" element={<Register/>}></Route>
        <Route exact path="/ec-events" element={<EcEvents/>}></Route>
        <Route exact path="/ec-events/register" element={<EcRegister/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
