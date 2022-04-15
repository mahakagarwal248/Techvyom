import React from 'react';
import './MRCEvents.css';
import Navbar from '../../navbar/Navbar'
import MRCEventCard from './MRCEventCard';

function MRCEvents() {
    return (
        <div className="mrcevents">
            <Navbar/>
            <div style={{paddingTop:'6%',height:'80vh'}}>
                <MRCEventCard/>
            </div>
        </div>
    )
}

export default MRCEvents
