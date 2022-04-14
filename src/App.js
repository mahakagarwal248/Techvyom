import './App.css';
import {BrowserRouter, Routes , Route} from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Navbar from './components/navbar/Navbar';
import CsEvents from './components/events/CsEvents/CsEvents';
import Register from './components/events/CsEvents/Register/Register'
import EcEvents from './components/events/EcEvents/EcEvents';
import EcRegister from './components/events/EcEvents/Register/EcRegister';
import MeEvents from './components/events/MeEvents/MeEvents';
import MeRegister from './components/events/MeEvents/Register/MeRegister';
import EnEvents from './components/events/EnEvents/EnEvents';
import EnRegister from './components/events/EnEvents/Register/EnRegister';

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
        <Route exact path="/me-events" element={<MeEvents/>}></Route>
        <Route exact path="/me-events/register" element={<MeRegister/>}></Route>
        <Route exact path="/en-events" element={<EnEvents/>}></Route>
        <Route exact path="/en-events/register" element={<EnRegister/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
