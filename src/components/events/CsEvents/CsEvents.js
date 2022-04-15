import React from 'react';
import Navbar from '../../navbar/Navbar';
import CsEventCard from './CsEventCard';
import CsEventCard2 from './CsEventCard2';
import './CsEvents.css';

function CsEvents() {
    return (
        <div className="csevents">
            <Navbar/>
            <div style={{paddingTop:'6%',height:'100vh'}}>
            <CsEventCard/>
            </div>
            <div style={{height:'80vh'}}>
            <CsEventCard2/>
            </div>
        </div>
    )
}

export default CsEvents
